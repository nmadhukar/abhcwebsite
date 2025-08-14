"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Edit, Trash2, Save, X, Globe, BarChart3 } from "lucide-react"
import {
  getAllSEOMetadata,
  createSEOMetadata,
  updateSEOMetadata,
  deleteSEOMetadata,
  type SEOMetadata,
} from "@/lib/supabase/seo"

export default function SEOManagementPage() {
  const [seoData, setSeoData] = useState<SEOMetadata[]>([])
  const [filteredData, setFilteredData] = useState<SEOMetadata[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [editingItem, setEditingItem] = useState<SEOMetadata | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [loading, setLoading] = useState(true)

  const [formData, setFormData] = useState<Partial<SEOMetadata>>({
    page_path: "",
    page_type: "static",
    title: "",
    description: "",
    keywords: [],
    canonical_url: "",
    og_title: "",
    og_description: "",
    og_image_url: "",
    og_type: "website",
    twitter_card: "summary_large_image",
    twitter_title: "",
    twitter_description: "",
    twitter_image_url: "",
    meta_robots: "index,follow",
    priority: 0.5,
    change_frequency: "monthly",
    is_active: true,
  })

  useEffect(() => {
    loadSEOData()
  }, [])

  useEffect(() => {
    filterData()
  }, [seoData, searchTerm, selectedType])

  const loadSEOData = async () => {
    setLoading(true)
    try {
      const data = await getAllSEOMetadata()
      setSeoData(data)
    } catch (error) {
      console.error("Error loading SEO data:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterData = () => {
    let filtered = seoData

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.page_path.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedType !== "all") {
      filtered = filtered.filter((item) => item.page_type === selectedType)
    }

    setFilteredData(filtered)
  }

  const handleInputChange = (field: keyof SEOMetadata, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleKeywordsChange = (value: string) => {
    const keywords = value
      .split(",")
      .map((k) => k.trim())
      .filter((k) => k.length > 0)
    setFormData((prev) => ({ ...prev, keywords }))
  }

  const handleSubmit = async () => {
    try {
      if (isCreating) {
        await createSEOMetadata(formData as Omit<SEOMetadata, "id" | "created_at" | "updated_at">)
      } else if (editingItem) {
        await updateSEOMetadata(editingItem.id, formData)
      }

      await loadSEOData()
      resetForm()
    } catch (error) {
      console.error("Error saving SEO data:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this SEO entry?")) {
      try {
        await deleteSEOMetadata(id)
        await loadSEOData()
      } catch (error) {
        console.error("Error deleting SEO data:", error)
      }
    }
  }

  const startEditing = (item: SEOMetadata) => {
    setEditingItem(item)
    setFormData(item)
    setIsCreating(false)
  }

  const startCreating = () => {
    setIsCreating(true)
    setEditingItem(null)
    setFormData({
      page_path: "",
      page_type: "static",
      title: "",
      description: "",
      keywords: [],
      canonical_url: "",
      og_title: "",
      og_description: "",
      og_image_url: "",
      og_type: "website",
      twitter_card: "summary_large_image",
      twitter_title: "",
      twitter_description: "",
      twitter_image_url: "",
      meta_robots: "index,follow",
      priority: 0.5,
      change_frequency: "monthly",
      is_active: true,
    })
  }

  const resetForm = () => {
    setEditingItem(null)
    setIsCreating(false)
    setFormData({})
  }

  const pageTypes = [
    { value: "all", label: "All Types" },
    { value: "static", label: "Static Pages" },
    { value: "service", label: "Service Pages" },
    { value: "location", label: "Location Pages" },
    { value: "blog", label: "Blog Posts" },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading SEO data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Globe className="h-8 w-8 text-blue-600" />
                SEO Management
              </h1>
              <p className="text-gray-600 mt-2">Manage SEO metadata for all pages across the website</p>
            </div>
            <Button onClick={startCreating} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add SEO Entry
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by title, path, or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  {pageTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Form for Creating/Editing */}
        {(isCreating || editingItem) && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {isCreating ? "Create New SEO Entry" : "Edit SEO Entry"}
                <Button variant="ghost" size="sm" onClick={resetForm}>
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="basic" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="basic">Basic SEO</TabsTrigger>
                  <TabsTrigger value="social">Social Media</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="page_path">Page Path *</Label>
                      <Input
                        id="page_path"
                        value={formData.page_path || ""}
                        onChange={(e) => handleInputChange("page_path", e.target.value)}
                        placeholder="/services/mental-health"
                      />
                    </div>
                    <div>
                      <Label htmlFor="page_type">Page Type *</Label>
                      <Select
                        value={formData.page_type || "static"}
                        onValueChange={(value) => handleInputChange("page_type", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="static">Static Page</SelectItem>
                          <SelectItem value="service">Service Page</SelectItem>
                          <SelectItem value="location">Location Page</SelectItem>
                          <SelectItem value="blog">Blog Post</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="title">SEO Title *</Label>
                    <Input
                      id="title"
                      value={formData.title || ""}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Page Title - Autumn Behavioral Health Center"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Meta Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description || ""}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Brief description of the page content..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                    <Input
                      id="keywords"
                      value={formData.keywords?.join(", ") || ""}
                      onChange={(e) => handleKeywordsChange(e.target.value)}
                      placeholder="keyword1, keyword2, keyword3"
                    />
                  </div>

                  <div>
                    <Label htmlFor="canonical_url">Canonical URL</Label>
                    <Input
                      id="canonical_url"
                      value={formData.canonical_url || ""}
                      onChange={(e) => handleInputChange("canonical_url", e.target.value)}
                      placeholder="https://autumntreatment.com/page-path"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="social" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="og_title">Open Graph Title</Label>
                      <Input
                        id="og_title"
                        value={formData.og_title || ""}
                        onChange={(e) => handleInputChange("og_title", e.target.value)}
                        placeholder="Title for social media sharing"
                      />
                    </div>
                    <div>
                      <Label htmlFor="og_type">Open Graph Type</Label>
                      <Select
                        value={formData.og_type || "website"}
                        onValueChange={(value) => handleInputChange("og_type", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Website</SelectItem>
                          <SelectItem value="article">Article</SelectItem>
                          <SelectItem value="business.business">Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="og_description">Open Graph Description</Label>
                    <Textarea
                      id="og_description"
                      value={formData.og_description || ""}
                      onChange={(e) => handleInputChange("og_description", e.target.value)}
                      placeholder="Description for social media sharing"
                      rows={2}
                    />
                  </div>

                  <div>
                    <Label htmlFor="og_image_url">Open Graph Image URL</Label>
                    <Input
                      id="og_image_url"
                      value={formData.og_image_url || ""}
                      onChange={(e) => handleInputChange("og_image_url", e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="twitter_title">Twitter Title</Label>
                      <Input
                        id="twitter_title"
                        value={formData.twitter_title || ""}
                        onChange={(e) => handleInputChange("twitter_title", e.target.value)}
                        placeholder="Title for Twitter sharing"
                      />
                    </div>
                    <div>
                      <Label htmlFor="twitter_card">Twitter Card Type</Label>
                      <Select
                        value={formData.twitter_card || "summary_large_image"}
                        onValueChange={(value) => handleInputChange("twitter_card", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="summary">Summary</SelectItem>
                          <SelectItem value="summary_large_image">Summary Large Image</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="technical" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="meta_robots">Meta Robots</Label>
                      <Select
                        value={formData.meta_robots || "index,follow"}
                        onValueChange={(value) => handleInputChange("meta_robots", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="index,follow">Index, Follow</SelectItem>
                          <SelectItem value="noindex,follow">No Index, Follow</SelectItem>
                          <SelectItem value="index,nofollow">Index, No Follow</SelectItem>
                          <SelectItem value="noindex,nofollow">No Index, No Follow</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="priority">Sitemap Priority</Label>
                      <Select
                        value={formData.priority?.toString() || "0.5"}
                        onValueChange={(value) => handleInputChange("priority", Number.parseFloat(value))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1.0">1.0 (Highest)</SelectItem>
                          <SelectItem value="0.9">0.9</SelectItem>
                          <SelectItem value="0.8">0.8</SelectItem>
                          <SelectItem value="0.7">0.7</SelectItem>
                          <SelectItem value="0.6">0.6</SelectItem>
                          <SelectItem value="0.5">0.5 (Default)</SelectItem>
                          <SelectItem value="0.4">0.4</SelectItem>
                          <SelectItem value="0.3">0.3 (Lowest)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="change_frequency">Change Frequency</Label>
                      <Select
                        value={formData.change_frequency || "monthly"}
                        onValueChange={(value) => handleInputChange("change_frequency", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="always">Always</SelectItem>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4 mr-2" />
                  {isCreating ? "Create" : "Update"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* SEO Data Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>SEO Entries ({filteredData.length})</span>
              <Badge variant="secondary">
                <BarChart3 className="h-3 w-3 mr-1" />
                {seoData.length} Total
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredData.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <Badge
                          variant={
                            item.page_type === "service"
                              ? "default"
                              : item.page_type === "location"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {item.page_type}
                        </Badge>
                        {!item.is_active && <Badge variant="destructive">Inactive</Badge>}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{item.page_path}</p>
                      <p className="text-sm text-gray-700 mb-3">{item.description}</p>
                      {item.keywords && item.keywords.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {item.keywords.slice(0, 5).map((keyword, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                          {item.keywords.length > 5 && (
                            <Badge variant="outline" className="text-xs">
                              +{item.keywords.length - 5} more
                            </Badge>
                          )}
                        </div>
                      )}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Priority: {item.priority}</span>
                        <span>Frequency: {item.change_frequency}</span>
                        <span>Updated: {new Date(item.updated_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm" onClick={() => startEditing(item)}>
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {filteredData.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Globe className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No SEO entries found</p>
                  <p className="text-sm">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
