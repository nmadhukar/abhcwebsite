import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, User, Clock, BookOpen, TrendingUp } from "lucide-react"
import { getBlogPosts } from "@/lib/supabase/blog"

export const metadata: Metadata = {
  title: "Blog | Autumn Behavioral Health Center",
  description:
    "Read articles and insights on mental health, addiction recovery, and wellness from the experts at Autumn Behavioral Health Center.",
}

export default async function BlogPage() {
  let blogPosts = []
  try {
    blogPosts = await getBlogPosts(true) // Only published posts
  } catch (error) {
    console.error("Failed to fetch blog posts:", error)
    blogPosts = []
  }

  return (
    <>
      <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-healthcare-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5"></div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-700 border border-blue-200 mb-8">
              <BookOpen className="h-4 w-4" />
              Expert Insights & Resources
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8">
              Health & Wellness
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Evidence-based guidance on mental health, addiction recovery, and wellness from our team of behavioral
              health professionals.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-gray-700">Evidence-Based Content</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-700">Expert Authors</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-medium text-gray-700">Recovery Resources</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {blogPosts.filter((post) => post.is_featured).length > 0 && (
            <div className="mb-24">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700 mb-6">
                  <TrendingUp className="h-4 w-4" />
                  Featured Articles
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">Must-Read Articles</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our most impactful content to support your journey toward better mental health and recovery.
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-8"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {blogPosts
                  .filter((post) => post.is_featured)
                  .slice(0, 2)
                  .map((post) => (
                    <Card
                      key={post.id}
                      className="group flex flex-col overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-2"
                    >
                      <CardHeader className="p-0 relative overflow-hidden">
                        <img
                          src={
                            post.featured_image_url ||
                            "/placeholder.svg?height=400&width=800&query=healthcare+wellness+professional"
                          }
                          alt={post.title}
                          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        {post.category && (
                          <div className="absolute top-6 left-6">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/95 text-gray-800 backdrop-blur-sm shadow-lg">
                              {post.category}
                            </span>
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="p-10 flex-grow">
                        <div className="flex items-center gap-8 text-sm text-gray-500 mb-6">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span className="font-semibold">{post.author_name}</span>
                          </div>
                          {post.published_at && (
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(post.published_at).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>5 min read</span>
                          </div>
                        </div>
                        <CardTitle className="text-3xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </CardTitle>
                        <p className="text-gray-600 text-lg leading-relaxed">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="p-10 pt-0 flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {post.tags?.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-3 group/link text-lg"
                        >
                          Read Article
                          <ArrowRight className="h-5 w-5 group-hover/link:translate-x-2 transition-transform duration-300" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          )}

          {blogPosts.filter((post) => !post.is_featured).length > 0 && (
            <div>
              <div className="text-center mb-20">
                <h2 className="text-5xl font-bold text-gray-900 mb-6">Latest Articles</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Stay informed with our latest insights on mental health, addiction recovery, and wellness.
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mt-8"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => !post.is_featured)
                  .map((post) => (
                    <Card
                      key={post.id}
                      className="group flex flex-col overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white h-full hover:-translate-y-1"
                    >
                      <CardHeader className="p-0 relative overflow-hidden">
                        <img
                          src={
                            post.featured_image_url ||
                            "/placeholder.svg?height=250&width=400&query=mental+health+wellness+professional" ||
                            "/placeholder.svg"
                          }
                          alt={post.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        {post.category && (
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-white/95 text-gray-800 backdrop-blur-sm">
                              {post.category}
                            </span>
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="p-8 flex-grow">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span className="font-medium">{post.author_name}</span>
                          </div>
                          {post.published_at && (
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(post.published_at).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>3 min</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <p className="text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="p-8 pt-0 flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {post.tags?.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2 group/link"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          )}

          {blogPosts.length === 0 && (
            <div className="text-center py-32">
              <div className="max-w-2xl mx-auto">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 via-blue-50 to-green-100 rounded-full flex items-center justify-center mx-auto mb-12 shadow-lg">
                  <BookOpen className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Expert Content Coming Soon</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  Our team of behavioral health professionals is crafting valuable insights on mental health, addiction
                  recovery, and wellness to support your journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Notified
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
