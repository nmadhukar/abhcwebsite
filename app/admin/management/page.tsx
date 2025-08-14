"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Plus, Edit, Trash2, Loader2, Save, X } from "lucide-react"
import {
  type ManagementTeamMember,
  getManagementTeam,
  createManagementTeamMember,
  updateManagementTeamMember,
  deleteManagementTeamMember,
} from "@/lib/supabase/management-team"

export default function ManagementTeamCMS() {
  const [members, setMembers] = useState<ManagementTeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingMember, setEditingMember] = useState<ManagementTeamMember | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    image_url: "",
    credentials: "",
    specialties: [] as string[],
    order_index: 0,
    is_active: true,
  })

  useEffect(() => {
    loadMembers()
  }, [])

  const loadMembers = async () => {
    setIsLoading(true)
    const data = await getManagementTeam()
    setMembers(data)
    setIsLoading(false)
  }

  const openModal = (member?: ManagementTeamMember) => {
    if (member) {
      setEditingMember(member)
      setFormData({
        name: member.name,
        title: member.title,
        bio: member.bio || "",
        image_url: member.image_url || "",
        credentials: member.credentials || "",
        specialties: member.specialties || [],
        order_index: member.order_index,
        is_active: member.is_active,
      })
    } else {
      setEditingMember(null)
      setFormData({
        name: "",
        title: "",
        bio: "",
        image_url: "",
        credentials: "",
        specialties: [],
        order_index: members.length + 1,
        is_active: true,
      })
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingMember(null)
    setFormData({
      name: "",
      title: "",
      bio: "",
      image_url: "",
      credentials: "",
      specialties: [],
      order_index: 0,
      is_active: true,
    })
  }

  const handleSave = async () => {
    setIsSaving(true)

    try {
      if (editingMember) {
        // Update existing member
        const updated = await updateManagementTeamMember(editingMember.id, formData)
        if (updated) {
          setMembers(members.map((m) => (m.id === editingMember.id ? updated : m)))
        }
      } else {
        // Create new member
        const created = await createManagementTeamMember(formData)
        if (created) {
          setMembers([...members, created])
        }
      }
      closeModal()
    } catch (error) {
      console.error("Error saving member:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this team member?")) return

    const success = await deleteManagementTeamMember(id)
    if (success) {
      setMembers(members.filter((m) => m.id !== id))
    }
  }

  const addSpecialty = () => {
    setFormData({
      ...formData,
      specialties: [...formData.specialties, ""],
    })
  }

  const updateSpecialty = (index: number, value: string) => {
    const newSpecialties = [...formData.specialties]
    newSpecialties[index] = value
    setFormData({
      ...formData,
      specialties: newSpecialties,
    })
  }

  const removeSpecialty = (index: number) => {
    setFormData({
      ...formData,
      specialties: formData.specialties.filter((_, i) => i !== index),
    })
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Management Team CMS</h1>
          <p className="text-gray-600">Manage your leadership team members</p>
        </div>
        <Button onClick={() => openModal()} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Team Member
        </Button>
      </div>

      <div className="grid gap-6">
        {members.map((member) => (
          <Card key={member.id}>
            <CardContent className="p-6">
              <div className="flex gap-6 items-start">
                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  {member.image_url ? (
                    <img
                      src={member.image_url || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.title}</p>
                      {member.credentials && <p className="text-sm text-gray-600">{member.credentials}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={member.is_active ? "default" : "secondary"}>
                        {member.is_active ? "Active" : "Inactive"}
                      </Badge>
                      <Badge variant="outline">Order: {member.order_index}</Badge>
                    </div>
                  </div>

                  {member.bio && <p className="text-gray-600 mt-2 line-clamp-3">{member.bio}</p>}

                  {member.specialties && member.specialties.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {member.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button onClick={() => openModal(member)} size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button onClick={() => handleDelete(member.id)} size="sm" variant="destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingMember ? "Edit Team Member" : "Add Team Member"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full name"
                />
              </div>
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Job title"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="credentials">Credentials</Label>
              <Input
                id="credentials"
                value={formData.credentials}
                onChange={(e) => setFormData({ ...formData, credentials: e.target.value })}
                placeholder="MD, PhD, LCSW, etc."
              />
            </div>

            <div>
              <Label htmlFor="bio">Biography</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                placeholder="Professional background and experience"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="image_url">Image URL</Label>
              <Input
                id="image_url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Specialties</Label>
                <Button type="button" onClick={addSpecialty} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
              <div className="space-y-2">
                {formData.specialties.map((specialty, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={specialty}
                      onChange={(e) => updateSpecialty(index, e.target.value)}
                      placeholder="Specialty area"
                    />
                    <Button type="button" onClick={() => removeSpecialty(index)} size="sm" variant="outline">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="order_index">Display Order</Label>
                <Input
                  id="order_index"
                  type="number"
                  value={formData.order_index}
                  onChange={(e) => setFormData({ ...formData, order_index: Number.parseInt(e.target.value) || 0 })}
                />
              </div>
              <div className="flex items-center space-x-2 pt-6">
                <Switch
                  id="is_active"
                  checked={formData.is_active}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                />
                <Label htmlFor="is_active">Active</Label>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={closeModal} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isSaving || !formData.name || !formData.title}>
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
