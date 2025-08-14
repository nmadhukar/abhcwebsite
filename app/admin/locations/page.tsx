"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit, Trash2, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

const fallbackLocations = [
  {
    id: 1,
    name: "Cadiz",
    slug: "cadiz",
    address: "239 E Warren St, Cadiz, OH 43907",
    phone: "740-942-2891",
    email: "clinic@autumntreatment.com",
    hours: {
      monday: "8:00 AM - 5:00 PM",
      tuesday: "8:00 AM - 5:00 PM",
      wednesday: "8:00 AM - 5:00 PM",
      thursday: "8:00 AM - 5:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "9:00 AM - 1:00 PM",
      sunday: "Closed",
    },
    services: ["Outpatient Treatment", "Medication Management", "Counseling Services", "Family Support"],
    images: ["/locations/cadiz-exterior.png"],
    hero_image: "/locations/cadiz-exterior.png",
    description:
      "Our Cadiz location serves Harrison County and surrounding communities with comprehensive behavioral health and addiction treatment services.",
    map_url: "https://maps.google.com/?q=239+E+Warren+St+Cadiz+OH+43907",
    seo_title: "Cadiz Location | Autumn Behavioral Health",
    seo_description:
      "Autumn Behavioral Health Cadiz location providing comprehensive behavioral health and addiction treatment services.",
    is_active: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Circleville",
    slug: "circleville",
    address: "1015 S Court St, Circleville, OH 43113",
    phone: "740-300-0393",
    email: "clinic@autumntreatment.com",
    hours: {
      monday: "8:00 AM - 5:00 PM",
      tuesday: "8:00 AM - 5:00 PM",
      wednesday: "8:00 AM - 5:00 PM",
      thursday: "8:00 AM - 5:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "Closed",
      sunday: "Closed",
    },
    services: ["Mental Health Services", "Addiction Treatment", "Individual Counseling", "Group Therapy"],
    images: ["/locations/circleville-exterior.png"],
    hero_image: "/locations/circleville-exterior.png",
    description:
      "Our Circleville location provides comprehensive behavioral health and addiction treatment services to Pickaway County and surrounding areas.",
    map_url: "https://maps.google.com/?q=1015+S+Court+St+Circleville+OH+43113",
    seo_title: "Circleville Location | Autumn Behavioral Health",
    seo_description:
      "Autumn Behavioral Health Circleville location providing comprehensive behavioral health and addiction treatment services.",
    is_active: true,
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

interface Location {
  id: number
  name: string
  slug: string
  address: string
  phone: string
  email: string
  hours: Record<string, string> | null
  services: string[]
  images: string[]
  hero_image: string | null
  description: string | null
  map_url: string | null
  seo_title: string | null
  seo_description: string | null
  is_active: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export default function LocationsCMSPage() {
  const [locations, setLocations] = useState<Location[]>(fallbackLocations)
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingLocation, setEditingLocation] = useState<Location | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    address: "",
    phone: "",
    email: "",
    hours: "{}",
    services: "[]",
    images: "[]",
    hero_image: "",
    description: "",
    map_url: "",
    seo_title: "",
    seo_description: "",
    is_active: true,
    display_order: 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const locationData = {
        ...formData,
        id: editingLocation?.id || Date.now(),
        hours: JSON.parse(formData.hours || "{}"),
        services: JSON.parse(formData.services || "[]"),
        images: JSON.parse(formData.images || "[]"),
        created_at: editingLocation?.created_at || new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }

      if (editingLocation) {
        setLocations(locations.map((loc) => (loc.id === editingLocation.id ? locationData : loc)))
        alert("Location updated successfully (demo mode)")
      } else {
        setLocations([...locations, locationData])
        alert("Location created successfully (demo mode)")
      }

      setIsModalOpen(false)
      resetForm()
    } catch (error) {
      console.error("Error saving location:", error)
      alert("Failed to save location")
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (location: Location) => {
    setEditingLocation(location)
    setFormData({
      name: location.name,
      slug: location.slug,
      address: location.address,
      phone: location.phone,
      email: location.email,
      hours: JSON.stringify(location.hours || {}),
      services: JSON.stringify(location.services || []),
      images: JSON.stringify(location.images || []),
      hero_image: location.hero_image || "",
      description: location.description || "",
      map_url: location.map_url || "",
      seo_title: location.seo_title || "",
      seo_description: location.seo_description || "",
      is_active: location.is_active,
      display_order: location.display_order,
    })
    setIsModalOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this location?")) return

    setLoading(true)
    try {
      setLocations(locations.filter((loc) => loc.id !== id))
      alert("Location deleted successfully (demo mode)")
    } catch (error) {
      console.error("Error deleting location:", error)
      alert("Failed to delete location")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setEditingLocation(null)
    setFormData({
      name: "",
      slug: "",
      address: "",
      phone: "",
      email: "",
      hours: "{}",
      services: "[]",
      images: "[]",
      hero_image: "",
      description: "",
      map_url: "",
      seo_title: "",
      seo_description: "",
      is_active: true,
      display_order: 0,
    })
  }

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-brand-blue">Locations Management</h1>
          <p className="text-gray-600 mt-2">Manage all Autumn Behavioral Health locations</p>
          <p className="text-sm text-orange-600 mt-1">Demo Mode: Changes are simulated and not saved to database</p>
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm} className="bg-brand-blue hover:bg-brand-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Location
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingLocation ? "Edit Location" : "Add New Location"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="media">Media</TabsTrigger>
                  <TabsTrigger value="seo">SEO</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Location Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                          const name = e.target.value
                          setFormData({
                            ...formData,
                            name,
                            slug: generateSlug(name),
                          })
                        }}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="slug">URL Slug</Label>
                      <Input
                        id="slug"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="map_url">Google Maps URL</Label>
                    <Input
                      id="map_url"
                      value={formData.map_url}
                      onChange={(e) => setFormData({ ...formData, map_url: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="display_order">Display Order</Label>
                      <Input
                        id="display_order"
                        type="number"
                        value={formData.display_order}
                        onChange={(e) =>
                          setFormData({ ...formData, display_order: Number.parseInt(e.target.value) || 0 })
                        }
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="is_active"
                        checked={formData.is_active}
                        onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                      />
                      <Label htmlFor="is_active">Active</Label>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="content" className="space-y-4">
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hours">Hours (JSON format)</Label>
                    <Textarea
                      id="hours"
                      value={formData.hours}
                      onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                      placeholder='{"monday": "9:00 AM - 5:00 PM", "tuesday": "9:00 AM - 5:00 PM"}'
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="services">Services (JSON array)</Label>
                    <Textarea
                      id="services"
                      value={formData.services}
                      onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                      placeholder='["Outpatient Treatment", "Mental Health Services", "Addiction Treatment"]'
                      rows={3}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="media" className="space-y-4">
                  <div>
                    <Label htmlFor="hero_image">Hero Image URL</Label>
                    <Input
                      id="hero_image"
                      value={formData.hero_image}
                      onChange={(e) => setFormData({ ...formData, hero_image: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="images">Additional Images (JSON array)</Label>
                    <Textarea
                      id="images"
                      value={formData.images}
                      onChange={(e) => setFormData({ ...formData, images: e.target.value })}
                      placeholder='["/location-1.jpg", "/location-2.jpg"]'
                      rows={3}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="seo" className="space-y-4">
                  <div>
                    <Label htmlFor="seo_title">SEO Title</Label>
                    <Input
                      id="seo_title"
                      value={formData.seo_title}
                      onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="seo_description">SEO Description</Label>
                    <Textarea
                      id="seo_description"
                      value={formData.seo_description}
                      onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
                      rows={3}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading} className="bg-brand-blue hover:bg-brand-blue/90">
                  {loading ? "Saving..." : editingLocation ? "Update Location" : "Create Location"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {locations.map((location) => (
          <Card key={location.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-brand-blue">{location.name}</h3>
                    <Badge variant={location.is_active ? "default" : "secondary"}>
                      {location.is_active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-brand-accent-green" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-brand-accent-green" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-brand-accent-green" />
                      <span>{location.email}</span>
                    </div>
                    {location.map_url && (
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-brand-accent-green" />
                        <a
                          href={location.map_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-blue hover:underline"
                        >
                          View on Maps
                        </a>
                      </div>
                    )}
                  </div>
                  {location.description && <p className="mt-3 text-gray-600 line-clamp-2">{location.description}</p>}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {location.services.slice(0, 3).map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                    {location.services.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{location.services.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button onClick={() => handleEdit(location)} size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button onClick={() => handleDelete(location.id)} size="sm" variant="destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/locations">View Public Locations Page</Link>
        </Button>
      </div>
    </div>
  )
}
