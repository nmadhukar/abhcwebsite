"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Save, X, HelpCircle } from "lucide-react"
import { type FAQ, getFAQs, createFAQ, updateFAQ, deleteFAQ, getFAQCategories } from "@/lib/supabase/faq"

export default function FAQManagement() {
  const [faqs, setFAQs] = useState<FAQ[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "general",
    display_order: 0,
    is_active: true,
  })

  useEffect(() => {
    loadFAQs()
    loadCategories()
  }, [])

  const loadFAQs = async () => {
    setLoading(true)
    const data = await getFAQs()
    setFAQs(data)
    setLoading(false)
  }

  const loadCategories = async () => {
    const data = await getFAQCategories()
    setCategories(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      const updated = await updateFAQ(editingId, formData)
      if (updated) {
        setFAQs(faqs.map((faq) => (faq.id === editingId ? updated : faq)))
        setEditingId(null)
      }
    } else {
      const created = await createFAQ(formData)
      if (created) {
        setFAQs([...faqs, created])
        setShowAddForm(false)
      }
    }

    resetForm()
    loadCategories()
  }

  const handleEdit = (faq: FAQ) => {
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
      display_order: faq.display_order,
      is_active: faq.is_active,
    })
    setEditingId(faq.id)
    setShowAddForm(false)
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this FAQ?")) {
      const success = await deleteFAQ(id)
      if (success) {
        setFAQs(faqs.filter((faq) => faq.id !== id))
        loadCategories()
      }
    }
  }

  const resetForm = () => {
    setFormData({
      question: "",
      answer: "",
      category: "general",
      display_order: 0,
      is_active: true,
    })
    setEditingId(null)
    setShowAddForm(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading FAQs...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-brand-blue flex items-center gap-2">
            <HelpCircle className="h-8 w-8" />
            FAQ Management
          </h1>
          <p className="text-gray-600 mt-2">Manage frequently asked questions for your website</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="bg-brand-blue hover:bg-brand-blue/90">
          <Plus className="h-4 w-4 mr-2" />
          Add FAQ
        </Button>
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingId) && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{editingId ? "Edit FAQ" : "Add New FAQ"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Question</label>
                <Input
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder="Enter the question"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Answer</label>
                <Textarea
                  value={formData.answer}
                  onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                  placeholder="Enter the answer"
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Input
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., admissions, treatment, insurance"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Display Order</label>
                  <Input
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: Number.parseInt(e.target.value) })}
                    min="0"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-6">
                  <input
                    type="checkbox"
                    id="is_active"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    className="rounded"
                  />
                  <label htmlFor="is_active" className="text-sm font-medium">
                    Active
                  </label>
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90">
                  <Save className="h-4 w-4 mr-2" />
                  {editingId ? "Update" : "Create"} FAQ
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs Found</h3>
              <p className="text-gray-600 mb-4">Get started by adding your first FAQ.</p>
              <Button onClick={() => setShowAddForm(true)} className="bg-brand-blue hover:bg-brand-blue/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Your First FAQ
              </Button>
            </CardContent>
          </Card>
        ) : (
          faqs.map((faq) => (
            <Card key={faq.id} className={editingId === faq.id ? "ring-2 ring-brand-blue" : ""}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{faq.category}</Badge>
                      <Badge variant={faq.is_active ? "default" : "destructive"}>
                        {faq.is_active ? "Active" : "Inactive"}
                      </Badge>
                      <span className="text-sm text-gray-500">Order: {faq.display_order}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(faq)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(faq.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
