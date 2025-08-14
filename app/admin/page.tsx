"use client"

import React, { useState, useEffect, useTransition } from "react"
import type { ReactElement } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import {
  Users,
  FileText,
  MapPin,
  Plus,
  Edit,
  Trash2,
  Shield,
  BarChart3,
  Crown,
  UserCheck,
  PenTool,
  LayoutTemplate,
  Loader2,
  Upload,
  Lock,
  MessageSquare,
  HelpCircle,
  Globe,
} from "lucide-react"
import { getAdminData, saveTeamMembers, savePageContent, saveChatbotSettings } from "./actions"
import type { TeamMember } from "@/lib/team-data"
import type { ChatbotSettings } from "@/lib/data"
import Link from "next/link"

// --- DATA STRUCTURES ---

const ROLES = {
  SUPER_ADMIN: "super_admin",
  EDITOR: "editor",
  CONTRIBUTOR: "contributor",
} as const

type Role = (typeof ROLES)[keyof typeof ROLES]

interface User {
  id: number
  username: string
  email: string
  role: Role
  name: string
  lastLogin: string
  status: "active" | "inactive"
}

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  category: string
  status: "published" | "draft"
  date: string
  featured: boolean
  seo: {
    title: string
    description: string
  }
  image: string
}

interface Location {
  id: number
  name: string
  address: string
  phone: string
  email: string
  hours: string
  services: string[]
  images: string[]
}

// --- STATIC INITIAL DATA (for non-persistent parts) ---

const initialUsers: User[] = [
  {
    id: 1,
    username: "admin",
    email: "admin@autumntreatment.com",
    role: ROLES.SUPER_ADMIN,
    name: "System Administrator",
    lastLogin: new Date().toISOString(),
    status: "active",
  },
  {
    id: 2,
    username: "editor_jane",
    email: "jane.doe@autumntreatment.com",
    role: ROLES.EDITOR,
    name: "Jane Doe",
    lastLogin: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    status: "active",
  },
]

const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding the Connection Between Mental Health and Addiction",
    slug: "understanding-mental-health-addiction",
    excerpt:
      "Explore the complex relationship between mental health disorders and substance use, and how integrated treatment can lead to better outcomes.",
    content: "Full blog post content here...",
    author: "Dr. Lisa",
    category: "Dual Diagnosis",
    status: "published",
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
    featured: true,
    seo: {
      title: "Mental Health & Addiction | Autumn Behavioral Health",
      description: "Learn about the connection between mental health and addiction.",
    },
    image: "/mental-health-abstract.png",
  },
  {
    id: 2,
    title: "The Role of Family in the Recovery Process",
    slug: "role-of-family-in-recovery",
    excerpt:
      "Family involvement is a crucial component of successful, long-term recovery. Learn how to support your loved one.",
    content: "Full blog post content here...",
    author: "John Carter, LISW",
    category: "Family Support",
    status: "published",
    date: new Date(Date.now() - 86400000 * 10).toISOString(),
    featured: false,
    seo: {
      title: "Family's Role in Recovery | Autumn Behavioral Health",
      description: "Discover how family can positively impact the addiction recovery journey.",
    },
    image: "/family-support-group.png",
  },
  {
    id: 3,
    title: "Navigating Life After Treatment: Tips for Sustained Sobriety",
    slug: "life-after-treatment",
    excerpt: "Leaving treatment is just the beginning. Here are practical tips for building a fulfilling, sober life.",
    content: "Full blog post content here...",
    author: "Dr. Lisa",
    category: "Sober Living",
    status: "draft",
    date: new Date().toISOString(),
    featured: false,
    seo: {
      title: "Life After Treatment | Autumn Behavioral Health",
      description: "Tips and strategies for maintaining sobriety and wellness after completing a treatment program.",
    },
    image: "/person-sunrise-contemplation.png",
  },
]

const initialLocations: Location[] = [
  {
    id: 1,
    name: "Toledo East",
    address: "732 Main St, Toledo, OH 43605",
    phone: "1-833-762-1013",
    email: "info@autumntreatment.com",
    hours: "Outpatient: Mon-Thu: 8:30AM-4:00PM, Fri: 8:30AM-3:00PM | OTP: Mon-Fri: 6:00AM-2:00PM, Sat: 7:00AM-10:00AM",
    services: ["Outpatient Treatment", "Methadone/Suboxone OTP", "Mental Health Services", "Addiction Treatment"],
    images: [
      "/toledo-east-exterior.png",
      "/toledo-east-lobby.png",
      "/toledo-east-therapy-room.png",
      "/toledo-east-group-room.png",
      "/toledo-east-medical.png",
    ],
  },
  {
    id: 2,
    name: "Toledo West",
    address: "3100 West Central Avenue, Toledo, OH 43606",
    phone: "1-833-762-1013",
    email: "info@autumntreatment.com",
    hours: "Mon-Fri: 8:30AM-4:30PM",
    services: ["Mental Health Services", "Addiction Treatment", "Case Management", "Recovery Housing"],
    images: [
      "/toledo-west-exterior.png",
      "/toledo-west-lobby.png",
      "/toledo-west-therapy-room.png",
      "/toledo-west-group-room.png",
      "/toledo-west-parking.png",
    ],
  },
  {
    id: 3,
    name: "Toledo West - Healspace Recovery",
    address: "5085 Monroe St, Toledo, OH 43606",
    phone: "1-833-762-1013",
    email: "info@autumntreatment.com",
    hours: "Contact for hours",
    services: ["Recovery Housing", "Sober Living", "Transitional Housing", "Support Services"],
    images: [
      "/healspace-recovery-exterior.png",
      "/healspace-recovery-lobby.png",
      "/healspace-recovery-therapy-room.png",
      "/healspace-recovery-group-room.png",
      "/healspace-recovery-housing.png",
    ],
  },
  {
    id: 4,
    name: "Mansfield",
    address: "650 Park Avenue W, Mansfield, OH 44906",
    phone: "1-833-762-1013",
    email: "info@autumntreatment.com",
    hours: "Mon-Thu: 8:30AM-5:00PM, Fri: 8:30AM-3:00PM",
    services: ["Outpatient Treatment", "Mental Health Services", "Addiction Treatment", "Case Management"],
    images: [
      "/mansfield-facility-exterior.png",
      "/mansfield-facility-lobby.png",
      "/mansfield-facility-therapy-room.png",
      "/mansfield-facility-group-room.png",
      "/mansfield-facility-parking.png",
    ],
  },
  {
    id: 5,
    name: "Clyde",
    address: "420 W McPherson Hwy, Clyde, OH 43410",
    phone: "1-833-762-1013",
    email: "info@autumntreatment.com",
    hours: "Mon & Thu: 8:00AM-4:00PM, Tue & Wed: 8:30AM-7:00PM",
    services: ["Outpatient Treatment", "Mental Health Services", "Addiction Treatment", "Evening Hours"],
    images: [
      "/clyde-facility-exterior.png",
      "/clyde-facility-lobby.png",
      "/clyde-facility-therapy-room.png",
      "/clyde-facility-group-room.png",
      "/clyde-facility-evening.png",
    ],
  },
]

const allPagesMeta = [
  { path: "home", name: "Home Page" },
  { path: "about", name: "About Page" },
  { path: "management-team", name: "Management Team Page" },
  { path: "services-addiction-treatment", name: "Service: Addiction Treatment" },
  { path: "services-case-management", name: "Service: Case Management" },
  { path: "services-mental-health", name: "Service: Mental Health" },
  { path: "services-methadone-treatment", name: "Service: Methadone Treatment" },
  { path: "services-outpatient", name: "Service: Outpatient" },
  { path: "services-recovery-housing", name: "Service: Recovery Housing" },
  { path: "services-residential", name: "Service: Residential" },
  { path: "services-residential-detox", name: "Service: Residential Detox" },
  { path: "admissions", name: "Admissions Page" },
  { path: "insurance", name: "Insurance Page" },
  { path: "contact", name: "Contact Page" },
  { path: "privacy", name: "Privacy Policy Page" },
  { path: "terms", name: "Terms of Service Page" },
  { path: "accessibility", name: "Accessibility Page" },
  { path: "hipaa", name: "HIPAA Notice Page" },
]

// --- PERMISSIONS LOGIC ---
const PERMISSIONS: Record<
  Role,
  {
    management: Permission
    blog: Permission
    locations: Permission
    pages: Permission
    users?: Permission
    chatbot?: Permission
  }
> = {
  [ROLES.SUPER_ADMIN]: {
    management: { create: true, read: true, update: true, delete: true },
    blog: { create: true, read: true, update: true, delete: true },
    locations: { create: true, read: true, update: true, delete: true },
    pages: { create: false, read: true, update: true, delete: false },
    users: { create: true, read: true, update: true, delete: true },
    chatbot: { create: true, read: true, update: true, delete: true },
  },
  [ROLES.EDITOR]: {
    management: { create: true, read: true, update: true, delete: false },
    blog: { create: true, read: true, update: true, delete: true },
    locations: { create: true, read: true, update: true, delete: false },
    pages: { create: false, read: true, update: true, delete: false },
  },
  [ROLES.CONTRIBUTOR]: {
    management: { create: false, read: true, update: false, delete: false },
    blog: { create: true, read: true, update: true, delete: false },
    locations: { create: false, read: true, update: false, delete: false },
    pages: { create: false, read: true, update: false, delete: false },
  },
}

interface Permission {
  create: boolean
  read: boolean
  update: boolean
  delete: boolean
}

const ROLE_LABELS = {
  [ROLES.SUPER_ADMIN]: { label: "Super Admin", color: "bg-red-100 text-red-800", icon: Crown },
  [ROLES.EDITOR]: { label: "Editor", color: "bg-blue-100 text-blue-800", icon: UserCheck },
  [ROLES.CONTRIBUTOR]: { label: "Contributor", color: "bg-green-100 text-green-800", icon: PenTool },
}

export default function AdminPage(): ReactElement {
  const [isPending, startTransition] = useTransition()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loginForm, setLoginForm] = useState({ username: "", password: "" })
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isLoading, setIsLoading] = useState(true)

  // Content States
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [team, setTeam] = useState<TeamMember[]>([])
  const [pages, setPages] = useState<Record<string, any>>({})
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts)
  const [locations, setLocations] = useState<Location[]>(initialLocations)
  const [chatbotSettings, setChatbotSettings] = useState<ChatbotSettings | null>(null)

  // Modal/Form States
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<string | null>(null)
  const [currentItem, setCurrentItem] = useState<any>(null)

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(true)
      getAdminData().then(({ team, pages, chatbotSettings }) => {
        setTeam(team)
        setPages(pages)
        setChatbotSettings(chatbotSettings)
        setIsLoading(false)
      })
    }
  }, [isAuthenticated])

  const hasPermission = (section: keyof (typeof PERMISSIONS)[Role], action: keyof Permission): boolean => {
    if (!currentUser) return false
    const permissions = PERMISSIONS[currentUser.role][section]
    return permissions?.[action] || false
  }
  const canManageUsers = (): boolean => currentUser?.role === ROLES.SUPER_ADMIN

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const validCredentials = [{ username: "admin", password: "732M@instreet", role: ROLES.SUPER_ADMIN }]
    const validUser = validCredentials.find(
      (cred) => cred.username === loginForm.username && cred.password === loginForm.password,
    )
    const user = initialUsers.find((u) => u.username === loginForm.username)

    if (validUser && user) {
      setIsAuthenticated(true)
      setCurrentUser(user)
    } else {
      alert("Invalid credentials")
    }
  }

  const openModal = (type: string, item: any = null) => {
    setModalType(type)
    setCurrentItem(item ? JSON.parse(JSON.stringify(item)) : {})
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalType(null)
    setCurrentItem(null)
  }

  const handleSave = (type: string, data: any) => {
    startTransition(async () => {
      const id = data.id || data.path
      const isEditing = !!id

      switch (type) {
        case "member":
          const updatedTeam = isEditing
            ? team.map((m) => (m.id === id ? data : m))
            : [...team, { ...data, id: Date.now() }]
          setTeam(updatedTeam)
          await saveTeamMembers(updatedTeam)
          break
        case "pageContent":
          const updatedPages = { ...pages, [id]: data.content }
          setPages(updatedPages)
          await savePageContent(updatedPages)
          break
        case "post":
          const updatedPosts = isEditing
            ? blogPosts.map((p) => (p.id === id ? data : p))
            : [...blogPosts, { ...data, id: Date.now() }]
          setBlogPosts(updatedPosts)
          break
        case "location":
          const updatedLocations = isEditing
            ? locations.map((l) => (l.id === id ? data : l))
            : [...locations, { ...data, id: Date.now() }]
          setLocations(updatedLocations)
          break
        case "user":
          const updatedUsers = isEditing
            ? users.map((u) => (u.id === id ? data : u))
            : [...users, { ...data, id: Date.now() }]
          setUsers(updatedUsers)
          break
      }
      closeModal()
    })
  }

  const handleSaveChatbot = () => {
    if (!chatbotSettings) return
    startTransition(async () => {
      await saveChatbotSettings(chatbotSettings)
      alert("Chatbot settings saved!")
    })
  }

  const handleDelete = (type: string, id: number) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return
    startTransition(async () => {
      switch (type) {
        case "member":
          const updatedTeam = team.filter((m) => m.id !== id)
          setTeam(updatedTeam)
          await saveTeamMembers(updatedTeam)
          break
        case "post":
          setBlogPosts(blogPosts.filter((p) => p.id !== id))
          break
        case "location":
          setLocations(locations.filter((l) => l.id !== id))
          break
        case "user":
          if (id === 1) {
            alert("Cannot delete the main admin user.")
            return
          }
          setUsers(users.filter((u) => u.id !== id))
          break
      }
    })
  }

  const handleToggleUserStatus = (id: number) => {
    if (id === 1) {
      alert("Cannot change status of the main admin user.")
      return
    }
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: user.status === "active" ? "inactive" : "active" } : user,
      ),
    )
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card className="shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl">Admin Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={loginForm.username}
                        onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      <Shield className="h-4 w-4 mr-2" /> Secure Login
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const availableTabs = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3, available: true },
    { id: "pages", label: "Pages", icon: LayoutTemplate, available: hasPermission("pages", "read") },
    { id: "management", label: "Management", icon: Users, available: hasPermission("management", "read") },
    { id: "blog", label: "Blog", icon: FileText, available: hasPermission("blog", "read") },
    { id: "faq", label: "FAQ", icon: HelpCircle, available: hasPermission("blog", "read") },
    { id: "locations", label: "Locations", icon: MapPin, available: hasPermission("locations", "read") },
    { id: "seo", label: "SEO", icon: Globe, available: hasPermission("blog", "read") },
    { id: "chatbot", label: "Chatbot", icon: MessageSquare, available: hasPermission("chatbot", "read") },
    { id: "users", label: "Users", icon: Users, available: canManageUsers() },
  ].filter((tab) => tab.available)

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-gray-600">Welcome, {currentUser?.name}</p>
                <Badge className={ROLE_LABELS[currentUser!.role].color}>
                  {React.createElement(ROLE_LABELS[currentUser!.role].icon, { className: "h-3 w-3 mr-1" })}
                  {ROLE_LABELS[currentUser!.role].label}
                </Badge>
                {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              </div>
            </div>
            <Button onClick={() => setIsAuthenticated(false)} variant="outline" className="bg-transparent">
              Logout
            </Button>
          </div>

          {isLoading || !chatbotSettings ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${availableTabs.length}, 1fr)` }}>
                {availableTabs.map((tab) => (
                  <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                    {React.createElement(tab.icon, { className: "h-4 w-4" })}
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="dashboard">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Editable Pages</CardTitle>
                      <LayoutTemplate className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{Object.keys(pages).length}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Management Team</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{team.length}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{blogPosts.length}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Locations</CardTitle>
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{locations.length}</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="pages" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Page Content</h2>
                </div>
                {Object.entries(pages).map(([pageKey, pageContent]) => {
                  const pageMeta = allPagesMeta.find((p) => p.path === pageKey)
                  return (
                    <Card key={pageKey}>
                      <CardContent className="p-6 flex items-center">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{pageMeta?.name || pageKey}</h3>
                          <p className="text-sm text-gray-500">Path: /{pageKey.replace(/-/g, "/")}</p>
                        </div>
                        <Button
                          onClick={() =>
                            openModal("pageContent", { path: pageKey, name: pageMeta?.name, content: pageContent })
                          }
                          size="sm"
                          variant="outline"
                        >
                          <Edit className="h-4 w-4 mr-2" /> Edit Content
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </TabsContent>

              <TabsContent value="management" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Management Team</h2>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a href="/admin/management" target="_blank" rel="noopener noreferrer">
                      <Plus className="h-4 w-4 mr-2" />
                      Open Management CMS
                    </a>
                  </Button>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <p className="text-gray-600 mb-4">
                    Manage your leadership team members with the dedicated Management Team CMS. Add, edit, and organize
                    team member profiles with photos, bios, credentials, and specialties.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-800">Team Profiles</h3>
                      <p className="text-sm text-blue-600">Complete member information</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-green-800">Photo Management</h3>
                      <p className="text-sm text-green-600">Upload and manage images</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-800">Display Order</h3>
                      <p className="text-sm text-purple-600">Control team member ordering</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="blog" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Blog Posts</h2>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a href="/admin/blog" target="_blank" rel="noopener noreferrer">
                      <Plus className="h-4 w-4 mr-2" />
                      Open Blog CMS
                    </a>
                  </Button>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <p className="text-gray-600 mb-4">
                    Create and manage blog posts with the dedicated Blog CMS. Write articles, add images, manage
                    categories and tags, and control publishing.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-800">Rich Content</h3>
                      <p className="text-sm text-blue-600">Full HTML editing support</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-green-800">SEO Features</h3>
                      <p className="text-sm text-green-600">Excerpts, tags, and metadata</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-800">Publishing Control</h3>
                      <p className="text-sm text-purple-600">Draft and publish workflow</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h3 className="font-semibold text-orange-800">Featured Posts</h3>
                      <p className="text-sm text-orange-600">Highlight important content</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">FAQ Management</h2>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a href="/admin/faq" target="_blank" rel="noopener noreferrer">
                      <Plus className="h-4 w-4 mr-2" />
                      Open FAQ CMS
                    </a>
                  </Button>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <p className="text-gray-600 mb-4">
                    Manage frequently asked questions displayed throughout your website. Organize FAQs by category,
                    control display order, and keep content up-to-date with the dedicated FAQ CMS.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-800">Categories</h3>
                      <p className="text-sm text-blue-600">Organize by topic areas</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-green-800">Display Control</h3>
                      <p className="text-sm text-green-600">Order and activate FAQs</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-800">Dynamic Content</h3>
                      <p className="text-sm text-purple-600">Real-time website updates</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="locations" className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">Locations Management</h2>
                    <p className="text-gray-600 mt-1">Manage all Autumn Behavioral Health locations</p>
                  </div>
                  <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                    <Link href="/admin/locations">
                      <MapPin className="h-4 w-4 mr-2" />
                      Manage Locations
                    </Link>
                  </Button>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Locations CMS</h3>
                      <p className="text-gray-600 mb-4">
                        Manage all location information including addresses, contact details, services, hours, and
                        images through our comprehensive CMS interface.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                        <div className="text-left">
                          <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                          <ul className="space-y-1">
                            <li>• Add/Edit/Delete locations</li>
                            <li>• Manage contact information</li>
                            <li>• Update services and hours</li>
                            <li>• Upload location images</li>
                          </ul>
                        </div>
                        <div className="text-left">
                          <h4 className="font-medium text-gray-900 mb-2">SEO Management:</h4>
                          <ul className="space-y-1">
                            <li>• Custom page titles</li>
                            <li>• Meta descriptions</li>
                            <li>• URL slug management</li>
                            <li>• Display order control</li>
                          </ul>
                        </div>
                      </div>
                      <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                        <Link href="/admin/locations">Open Locations CMS</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="seo" className="space-y-6">
                <div className="text-center py-8">
                  <Globe className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                  <h2 className="text-2xl font-bold mb-4">SEO Management</h2>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Manage SEO metadata for all pages across your website. Control titles, descriptions, keywords, Open
                    Graph tags, and structured data to improve search engine visibility.
                  </p>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/admin/seo">
                      <Globe className="h-4 w-4 mr-2" />
                      Manage SEO Settings
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              {hasPermission("chatbot", "read") && (
                <TabsContent value="chatbot">
                  <Card>
                    <CardHeader>
                      <CardTitle>Chatbot Configuration</CardTitle>
                      <CardDescription>Manage the appearance and behavior of the website's chatbot.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <Label htmlFor="isEnabled" className="text-base">
                            Enable Chatbot
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Turn the chatbot on or off for the entire site.
                          </p>
                        </div>
                        <Switch
                          id="isEnabled"
                          checked={chatbotSettings.isEnabled}
                          onCheckedChange={(checked) => setChatbotSettings({ ...chatbotSettings, isEnabled: checked })}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="botName">Bot Name</Label>
                          <Input
                            id="botName"
                            value={chatbotSettings.botName}
                            onChange={(e) => setChatbotSettings({ ...chatbotSettings, botName: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="apiUrl">API URL</Label>
                          <Input
                            id="apiUrl"
                            value={chatbotSettings.apiUrl}
                            onChange={(e) => setChatbotSettings({ ...chatbotSettings, apiUrl: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="welcomeMessage">Welcome Message</Label>
                        <Textarea
                          id="welcomeMessage"
                          placeholder="The first message the user sees."
                          rows={3}
                          value={chatbotSettings.welcomeMessage}
                          onChange={(e) => setChatbotSettings({ ...chatbotSettings, welcomeMessage: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="placeholder">Input Placeholder</Label>
                        <Input
                          id="placeholder"
                          placeholder="Text inside the chat input box."
                          value={chatbotSettings.placeholder}
                          onChange={(e) => setChatbotSettings({ ...chatbotSettings, placeholder: e.target.value })}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="primaryColor">Primary Color</Label>
                          <div className="relative flex items-center">
                            <Input
                              type="color"
                              value={chatbotSettings.primaryColor}
                              onChange={(e) => setChatbotSettings({ ...chatbotSettings, primaryColor: e.target.value })}
                              className="absolute left-1 top-1/2 -translate-y-1/2 h-8 w-10 p-1 bg-transparent border-none cursor-pointer"
                            />
                            <Input
                              id="primaryColor"
                              value={chatbotSettings.primaryColor}
                              onChange={(e) => setChatbotSettings({ ...chatbotSettings, primaryColor: e.target.value })}
                              className="pl-12"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="theme">Theme</Label>
                          <Select
                            value={chatbotSettings.theme}
                            onValueChange={(value: "blue" | "green" | "red" | "gray") =>
                              setChatbotSettings({ ...chatbotSettings, theme: value })
                            }
                          >
                            <SelectTrigger id="theme">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="blue">Blue</SelectItem>
                              <SelectItem value="green">Green</SelectItem>
                              <SelectItem value="red">Red</SelectItem>
                              <SelectItem value="gray">Gray</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position">Position</Label>
                          <Select
                            value={chatbotSettings.position}
                            onValueChange={(value: "bottom-right" | "bottom-left") =>
                              setChatbotSettings({ ...chatbotSettings, position: value })
                            }
                          >
                            <SelectTrigger id="position">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bottom-right">Bottom Right</SelectItem>
                              <SelectItem value="bottom-left">Bottom Left</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="width">Width (e.g., 350px)</Label>
                          <Input
                            id="width"
                            value={chatbotSettings.width}
                            onChange={(e) => setChatbotSettings({ ...chatbotSettings, width: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="height">Height (e.g., 500px)</Label>
                          <Input
                            id="height"
                            value={chatbotSettings.height}
                            onChange={(e) => setChatbotSettings({ ...chatbotSettings, height: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="autoOpen"
                            checked={chatbotSettings.autoOpen}
                            onCheckedChange={(checked) => setChatbotSettings({ ...chatbotSettings, autoOpen: checked })}
                          />
                          <Label htmlFor="autoOpen">Auto-open on page load</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="showBranding"
                            checked={chatbotSettings.showBranding}
                            onCheckedChange={(checked) =>
                              setChatbotSettings({ ...chatbotSettings, showBranding: checked })
                            }
                          />
                          <Label htmlFor="showBranding">Show 'Powered by' branding</Label>
                        </div>
                      </div>

                      <Button onClick={handleSaveChatbot} disabled={isPending}>
                        {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Save Chatbot Settings
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}

              {canManageUsers() && (
                <TabsContent value="users" className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">User Management</h2>
                    <Button onClick={() => openModal("user")} className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-2" /> Add User
                    </Button>
                  </div>
                  {users.map((user) => (
                    <Card key={user.id}>
                      <CardContent className="p-6 flex items-center">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">
                            {user.name} ({user.username})
                          </h3>
                          <p className="text-sm text-gray-500">{user.email}</p>
                          <Badge className={ROLE_LABELS[user.role].color}>{ROLE_LABELS[user.role].label}</Badge>
                          <Badge variant={user.status === "active" ? "default" : "destructive"} className="ml-2">
                            {user.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={() => openModal("user", user)} size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button onClick={() => handleToggleUserStatus(user.id)} size="sm" variant="outline">
                            <Lock className="h-4 w-4" />
                          </Button>
                          <Button onClick={() => handleDelete("user", user.id)} size="sm" variant="destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              )}
            </Tabs>
          )}
        </div>
      </section>
      <Footer />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {currentItem?.id || currentItem?.path ? "Edit" : "Add"}{" "}
              {modalType === "pageContent"
                ? currentItem?.name
                : modalType?.charAt(0).toUpperCase() + modalType?.slice(1)}
            </DialogTitle>
          </DialogHeader>
          <ModalForm
            type={modalType}
            item={currentItem}
            onSave={handleSave}
            onClose={closeModal}
            isPending={isPending}
          />
        </DialogContent>
      </Dialog>
    </main>
  )
}

// --- DYNAMIC FORM COMPONENT FOR MODAL ---
const ModalForm = ({
  type,
  item,
  onSave,
  onClose,
  isPending,
}: {
  type: string | null
  item: any
  onSave: Function
  onClose: Function
  isPending: boolean
}) => {
  const [formData, setFormData] = useState(item || {})
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [locationImagePreviews, setLocationImagePreviews] = useState<string[]>([])

  useEffect(() => {
    setFormData(item || {})
    setImagePreview(item?.image || null)
    setLocationImagePreviews(item?.images || [])
  }, [item])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setImagePreview(previewUrl)
      setFormData({ ...formData, image: previewUrl })
    }
  }

  const handleMultipleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImageUrls = Array.from(files).map((file) => URL.createObjectURL(file))
      const allImages = [...(formData.images || []), ...newImageUrls]
      setLocationImagePreviews(allImages)
      setFormData({ ...formData, images: allImages })
    }
  }

  const removeLocationImage = (indexToRemove: number) => {
    const urlToRemove = locationImagePreviews[indexToRemove]
    if (urlToRemove && urlToRemove.startsWith("blob:")) URL.revokeObjectURL(urlToRemove)
    const newImagePreviews = locationImagePreviews.filter((_, index) => index !== indexToRemove)
    setLocationImagePreviews(newImagePreviews)
    setFormData({ ...formData, images: newImagePreviews })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSpecialtiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, specialties: e.target.value.split(",").map((s) => s.trim()) })
  }

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, seo: { ...formData.seo, [name]: value } })
  }

  const handlePageContentChange = (path: string[], value: string) => {
    setFormData((prevData: any) => {
      const newData = { ...prevData }
      let current = newData.content
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]]
      }
      current[path[path.length - 1]] = value
      return newData
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(type, formData)
  }

  if (!type) return null

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4 max-h-[70vh] overflow-y-auto pr-4">
      {type === "user" && (
        <>
          <Label>
            Name <Input name="name" value={formData.name || ""} onChange={handleChange} required />
          </Label>
          <Label>
            Username <Input name="username" value={formData.username || ""} onChange={handleChange} required />
          </Label>
          <Label>
            Email <Input type="email" name="email" value={formData.email || ""} onChange={handleChange} required />
          </Label>
          <Label>
            Role
            <Select
              name="role"
              value={formData.role}
              onValueChange={(v) => setFormData({ ...formData, role: v })}
              required
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.values(ROLES).map((r) => (
                  <SelectItem key={r} value={r}>
                    {ROLE_LABELS[r].label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Label>
        </>
      )}
      {type === "member" && (
        <>
          <Label>
            Name <Input name="name" value={formData.name || ""} onChange={handleChange} required />
          </Label>
          <Label>
            Title <Input name="title" value={formData.title || ""} onChange={handleChange} required />
          </Label>
          <Label>
            Image URL <Input name="imageUrl" value={formData.imageUrl || ""} onChange={handleChange} />
          </Label>
          <Label>
            Bio <Textarea name="bio" value={formData.bio || ""} onChange={handleChange} rows={4} />
          </Label>
          <Label>
            Education <Input name="education" value={formData.education || ""} onChange={handleChange} />
          </Label>
          <Label>
            Specialties (comma-separated){" "}
            <Input
              name="specialties"
              value={formData.specialties?.join(", ") || ""}
              onChange={handleSpecialtiesChange}
            />
          </Label>
          <Label>
            Email <Input type="email" name="email" value={formData.email || ""} onChange={handleChange} required />
          </Label>
        </>
      )}
      {type === "pageContent" && (
        <ContentFormFields data={formData.content} onContentChange={handlePageContentChange} path={[]} />
      )}
      {type === "post" && (
        <>
          <Label>
            Title <Input name="title" value={formData.title || ""} onChange={handleChange} required />
          </Label>
          <Label>
            Blog Post Image
            <div className="flex items-center gap-4 mt-2">
              {imagePreview && (
                <img
                  src={imagePreview || "/placeholder.svg"}
                  alt="Preview"
                  className="w-full h-32 rounded-lg object-cover"
                />
              )}
              <Input id="image-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              <Button type="button" variant="outline" onClick={() => document.getElementById("image-upload")?.click()}>
                <Upload className="h-4 w-4 mr-2" /> Upload Image
              </Button>
            </div>
          </Label>
          <Label>
            Excerpt <Textarea name="excerpt" value={formData.excerpt || ""} onChange={handleChange} />
          </Label>
          <Label>
            Content <Textarea name="content" rows={8} value={formData.content || ""} onChange={handleChange} />
          </Label>
          <Label>
            Author <Input name="author" value={formData.author || ""} onChange={handleChange} />
          </Label>
          <Label>
            Category <Input name="category" value={formData.category || ""} onChange={handleChange} />
          </Label>
          <Label>
            Status
            <Select
              name="status"
              value={formData.status}
              onValueChange={(v) => setFormData({ ...formData, status: v })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </Label>
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Label>
                SEO Title <Input name="title" value={formData.seo?.title || ""} onChange={handleSeoChange} />
              </Label>
              <Label>
                SEO Description{" "}
                <Textarea name="description" value={formData.seo?.description || ""} onChange={handleSeoChange} />
              </Label>
            </CardContent>
          </Card>
        </>
      )}
      {type === "location" && (
        <>
          <Label>
            Name <Input name="name" value={formData.name || ""} onChange={handleChange} required />
          </Label>
          <Label>
            Address <Input name="address" value={formData.address || ""} onChange={handleChange} />
          </Label>
          <Label>
            Phone <Input name="phone" value={formData.phone || ""} onChange={handleChange} />
          </Label>
          <Label>
            Email <Input type="email" name="email" value={formData.email || ""} onChange={handleChange} />
          </Label>
          <Label>
            Hours <Input name="hours" value={formData.hours || ""} onChange={handleChange} />
          </Label>
          <Label>
            Images
            <div className="mt-2">
              <Input
                id="images-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleMultipleFilesChange}
                className="hidden"
              />
              <Button type="button" variant="outline" onClick={() => document.getElementById("images-upload")?.click()}>
                <Upload className="h-4 w-4 mr-2" /> Upload Images
              </Button>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {locationImagePreviews.map((url: string, index: number) => (
                  <div key={index} className="relative">
                    <img
                      src={url || "/placeholder.svg"}
                      alt={`Preview ${index}`}
                      className="w-full h-24 rounded-md object-cover"
                    />
                    <Button
                      type="button"
                      size="sm"
                      variant="destructive"
                      className="absolute top-1 right-1 h-6 w-6 p-0"
                      onClick={() => removeLocationImage(index)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Label>
        </>
      )}
      <DialogFooter>
        <Button type="button" variant="outline" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Changes
        </Button>
      </DialogFooter>
    </form>
  )
}

const ContentFormFields = ({
  data,
  onContentChange,
  path,
}: {
  data: any
  onContentChange: Function
  path: string[]
}) => {
  const formatLabel = (key: string) => key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())

  return (
    <div className="space-y-4">
      {Object.entries(data).map(([key, value]) => {
        const currentPath = [...path, key]
        if (typeof value === "string") {
          const isTextarea =
            value.length > 100 ||
            key.toLowerCase().includes("text") ||
            key.toLowerCase().includes("paragraph") ||
            key.toLowerCase().includes("subtitle")
          return (
            <Label key={currentPath.join(".")} className="block">
              <span className="font-medium text-gray-700">{formatLabel(key)}</span>
              {isTextarea ? (
                <Textarea
                  value={value}
                  onChange={(e) => onContentChange(currentPath, e.target.value)}
                  className="mt-1"
                  rows={4}
                />
              ) : (
                <Input value={value} onChange={(e) => onContentChange(currentPath, e.target.value)} className="mt-1" />
              )}
            </Label>
          )
        }
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          return (
            <fieldset key={currentPath.join(".")} className="border p-4 rounded-md">
              <legend className="text-lg font-semibold px-2">{formatLabel(key)}</legend>
              <ContentFormFields data={value} onContentChange={onContentChange} path={currentPath} />
            </fieldset>
          )
        }
        return null
      })}
    </div>
  )
}
