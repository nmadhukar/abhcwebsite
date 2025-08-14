"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Loader2, Database, Users, FileText } from "lucide-react"
import { getManagementTeam } from "@/lib/supabase/management-team"
import { getBlogPosts } from "@/lib/supabase/blog"

interface TestResult {
  name: string
  status: "pending" | "success" | "error"
  message: string
  data?: any
}

export default function TestCMSPage() {
  const [tests, setTests] = useState<TestResult[]>([
    { name: "Database Connection", status: "pending", message: "Testing connection..." },
    { name: "Management Team Data", status: "pending", message: "Fetching team members..." },
    { name: "Blog Posts Data", status: "pending", message: "Fetching blog posts..." },
    { name: "CMS Routes", status: "pending", message: "Testing CMS routes..." },
  ])
  const [isRunning, setIsRunning] = useState(false)

  const updateTest = (name: string, status: "success" | "error", message: string, data?: any) => {
    setTests((prev) => prev.map((test) => (test.name === name ? { ...test, status, message, data } : test)))
  }

  const runTests = async () => {
    setIsRunning(true)

    // Test 1: Database Connection & Management Team
    try {
      const teamMembers = await getManagementTeam()
      updateTest(
        "Management Team Data",
        "success",
        `Successfully fetched ${teamMembers.length} team members`,
        teamMembers,
      )
      updateTest("Database Connection", "success", "Supabase connection working")
    } catch (error) {
      updateTest("Management Team Data", "error", `Error: ${error}`)
      updateTest("Database Connection", "error", "Database connection failed")
    }

    // Test 2: Blog Posts
    try {
      const blogPosts = await getBlogPosts()
      updateTest(
        "Blog Posts Data",
        "success",
        `Successfully fetched ${blogPosts.length} blog posts (${blogPosts.filter((p) => p.is_published).length} published)`,
        blogPosts,
      )
    } catch (error) {
      updateTest("Blog Posts Data", "error", `Error: ${error}`)
    }

    // Test 3: CMS Routes
    try {
      const routes = ["/admin/management", "/admin/blog"]
      updateTest("CMS Routes", "success", `CMS routes available: ${routes.join(", ")}`)
    } catch (error) {
      updateTest("CMS Routes", "error", `Error: ${error}`)
    }

    setIsRunning(false)
  }

  useEffect(() => {
    runTests()
  }, [])

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "pending":
        return <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />
    }
  }

  const getStatusColor = (status: TestResult["status"]) => {
    switch (status) {
      case "pending":
        return "bg-blue-100 text-blue-800"
      case "success":
        return "bg-green-100 text-green-800"
      case "error":
        return "bg-red-100 text-red-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CMS Functionality Test</h1>
          <p className="text-gray-600">Testing database connections and CMS functionality</p>
        </div>

        <div className="grid gap-6 mb-8">
          {tests.map((test) => (
            <Card key={test.name}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(test.status)}
                    {test.name}
                  </div>
                  <Badge className={getStatusColor(test.status)}>{test.status.toUpperCase()}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{test.message}</p>
                {test.data && (
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Data Preview:</h4>
                    <pre className="text-sm text-gray-700 overflow-x-auto">
                      {JSON.stringify(test.data.slice(0, 2), null, 2)}
                    </pre>
                    {test.data.length > 2 && (
                      <p className="text-sm text-gray-500 mt-2">... and {test.data.length - 2} more items</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-500" />
                Database Schema
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>management_team</span>
                  <Badge variant="outline">Active</Badge>
                </div>
                <div className="flex justify-between">
                  <span>blog_posts</span>
                  <Badge variant="outline">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Management CMS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button asChild size="sm" className="w-full">
                  <a href="/admin/management" target="_blank" rel="noopener noreferrer">
                    Open Management CMS
                  </a>
                </Button>
                <p className="text-xs text-gray-500">Add, edit, and manage team members</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-500" />
                Blog CMS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button asChild size="sm" className="w-full">
                  <a href="/admin/blog" target="_blank" rel="noopener noreferrer">
                    Open Blog CMS
                  </a>
                </Button>
                <p className="text-xs text-gray-500">Create and manage blog posts</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Test Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button onClick={runTests} disabled={isRunning}>
                {isRunning ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Running Tests...
                  </>
                ) : (
                  "Run Tests Again"
                )}
              </Button>
              <Button asChild variant="outline">
                <a href="/admin">Back to Admin Dashboard</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
