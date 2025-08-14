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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Loader2, Save, X, Eye, Calendar, User, Tag } from "lucide-react"
import {
  type BlogPost,
  getBlogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  generateSlug,
} from "@/lib/supabase/blog"

const CATEGORIES = [
  "Recovery",
  "Mental Health",
  "Addiction Treatment",
  "Family Support",
  "Wellness",
  "Education",
  "News",
  "Resources",
]

export default function BlogCMS() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all")

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image_url: "",
    author_name: "",
    author_title: "",
    category: "",
    tags: [] as string[],
    is_published: false,
    is_featured: false,
    published_at: "",
  })

  const [newTag, setNewTag] = useState("")

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    setIsLoading(true)
    const data = await getBlogPosts()
    setPosts(data)
    setIsLoading(false)
  }

  const filteredPosts = posts.filter((post) => {
    if (filter === "published") return post.is_published
    if (filter === "draft") return !post.is_published
    return true
  })

  const openModal = (post?: BlogPost) => {
    if (post) {
      setEditingPost(post)
      setFormData({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || "",
        content: post.content,
        featured_image_url: post.featured_image_url || "",
        author_name: post.author_name,
        author_title: post.author_title || "",
        category: post.category || "",
        tags: post.tags || [],
        is_published: post.is_published,
        is_featured: post.is_featured,
        published_at: post.published_at || "",
      })
    } else {
      setEditingPost(null)
      setFormData({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        featured_image_url: "",
        author_name: "",
        author_title: "",
        category: "",
        tags: [],
        is_published: false,
        is_featured: false,
        published_at: "",
      })
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingPost(null)
    setNewTag("")
  }

  const handleTitleChange = async (title: string) => {
    setFormData({ ...formData, title })
    if (!editingPost && title) {
      const slug = await generateSlug(title)
      setFormData((prev) => ({ ...prev, title, slug }))
    }
  }

  const handleSave = async () => {
    setIsSaving(true)

    try {
      const postData = {
        ...formData,
        published_at:
          formData.is_published && !formData.published_at ? new Date().toISOString() : formData.published_at,
      }

      if (editingPost) {
        // Update existing post
        const updated = await updateBlogPost(editingPost.id, postData)
        if (updated) {
          setPosts(posts.map((p) => (p.id === editingPost.id ? updated : p)))
        }
      } else {
        // Create new post
        const created = await createBlogPost(postData)
        if (created) {
          setPosts([created, ...posts])
        }
      }
      closeModal()
    } catch (error) {
      console.error("Error saving post:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return

    const success = await deleteBlogPost(id)
    if (success) {
      setPosts(posts.filter((p) => p.id !== id))
    }
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()],
      })
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    })
  }

  const handlePublishToggle = (post: BlogPost) => {
    const updatedPost = {
      ...post,
      is_published: !post.is_published,
      published_at: !post.is_published && !post.published_at ? new Date().toISOString() : post.published_at,
    }
    updateBlogPost(post.id, updatedPost).then((updated) => {
      if (updated) {
        setPosts(posts.map((p) => (p.id === post.id ? updated : p)))
      }
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
          <h1 className="text-3xl font-bold">Blog CMS</h1>
          <p className="text-gray-600">Manage your blog posts and content</p>
        </div>
        <Button onClick={() => openModal()} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Blog Post
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")} size="sm">
            All ({posts.length})
          </Button>
          <Button
            variant={filter === "published" ? "default" : "outline"}
            onClick={() => setFilter("published")}
            size="sm"
          >
            Published ({posts.filter((p) => p.is_published).length})
          </Button>
          <Button variant={filter === "draft" ? "default" : "outline"} onClick={() => setFilter("draft")} size="sm">
            Drafts ({posts.filter((p) => !p.is_published).length})
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-6">
              <div className="flex gap-6 items-start">
                <div className="w-32 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  {post.featured_image_url ? (
                    <img
                      src={post.featured_image_url || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-gray-500">/{post.slug}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={post.is_published ? "default" : "secondary"}>
                        {post.is_published ? "Published" : "Draft"}
                      </Badge>
                      {post.is_featured && <Badge variant="outline">Featured</Badge>}
                    </div>
                  </div>

                  {post.excerpt && <p className="text-gray-600 text-sm line-clamp-2 mb-2">{post.excerpt}</p>}

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author_name}
                    </div>
                    {post.category && (
                      <div className="flex items-center gap-1">
                        <Tag className="h-4 w-4" />
                        {post.category}
                      </div>
                    )}
                    {post.published_at && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.published_at).toLocaleDateString()}
                      </div>
                    )}
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 5).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 5}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Button onClick={() => openModal(post)} size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => handlePublishToggle(post)}
                    size="sm"
                    variant={post.is_published ? "secondary" : "default"}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button onClick={() => handleDelete(post.id)} size="sm" variant="destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingPost ? "Edit Blog Post" : "Create Blog Post"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Blog post title"
              />
            </div>

            <div>
              <Label htmlFor="slug">URL Slug *</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="url-friendly-slug"
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Brief description for previews and SEO"
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="content">Content *</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Blog post content (supports HTML)"
                rows={8}
              />
            </div>

            <div>
              <Label htmlFor="featured_image_url">Featured Image URL</Label>
              <Input
                id="featured_image_url"
                value={formData.featured_image_url}
                onChange={(e) => setFormData({ ...formData, featured_image_url: e.target.value })}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="author_name">Author Name *</Label>
                <Input
                  id="author_name"
                  value={formData.author_name}
                  onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                  placeholder="Author's full name"
                />
              </div>
              <div>
                <Label htmlFor="author_title">Author Title</Label>
                <Input
                  id="author_title"
                  value={formData.author_title}
                  onChange={(e) => setFormData({ ...formData, author_title: e.target.value })}
                  placeholder="Author's job title"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Tags</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag"
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                />
                <Button type="button" onClick={addTag} size="sm">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-1">
                {formData.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                    {tag} <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="is_published"
                  checked={formData.is_published}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                />
                <Label htmlFor="is_published">Published</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is_featured"
                  checked={formData.is_featured}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
                />
                <Label htmlFor="is_featured">Featured</Label>
              </div>
            </div>

            {formData.is_published && (
              <div>
                <Label htmlFor="published_at">Publish Date</Label>
                <Input
                  id="published_at"
                  type="datetime-local"
                  value={formData.published_at ? new Date(formData.published_at).toISOString().slice(0, 16) : ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      published_at: e.target.value ? new Date(e.target.value).toISOString() : "",
                    })
                  }
                />
              </div>
            )}
          </div>

          <DialogFooter>
            <Button onClick={closeModal} variant="outline">
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={isSaving || !formData.title || !formData.content || !formData.author_name}
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Post
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
