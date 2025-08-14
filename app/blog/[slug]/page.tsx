import Header from "@/components/header"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"
import type { Metadata, ResolvingMetadata } from "next"
import { getBlogPostBySlug } from "@/lib/supabase/blog"

type Props = {
  params: { slug: string }
}

// Generate metadata for the page based on the blog post's SEO fields
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug
  const post = await getBlogPostBySlug(slug)

  if (!post || !post.is_published) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url: `https://autumnbehavioralhealthcenter.com/blog/${slug}`,
      images: post.featured_image_url ? [post.featured_image_url] : [],
    },
    alternates: {
      canonical: `https://autumnbehavioralhealthcenter.com/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post || !post.is_published) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <article>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              {post.category && <p className="text-lg font-semibold text-blue-200 mb-2">{post.category}</p>}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="text-lg text-blue-100">
                <span>By {post.author_name}</span>
                {post.author_title && <span>, {post.author_title}</span>}
                {post.published_at && (
                  <>
                    {" | "}
                    <span>{new Date(post.published_at).toLocaleDateString()}</span>
                  </>
                )}
              </div>
              {post.excerpt && <p className="text-xl text-blue-100 mt-4 max-w-2xl mx-auto">{post.excerpt}</p>}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.featured_image_url && (
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <img
                  src={post.featured_image_url || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        )}

        {/* Post Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose lg:prose-xl max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {post.author_name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{post.author_name}</h4>
                    {post.author_title && <p className="text-gray-600">{post.author_title}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}
