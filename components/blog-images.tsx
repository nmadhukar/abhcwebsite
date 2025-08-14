import Image from "next/image"

export function BlogImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  // Generate appropriate placeholder images for blog posts
  const getPlaceholderUrl = (src: string) => {
    if (src.includes("recovery-journey")) {
      return "/recovery-sunrise-path.png"
    }
    if (src.includes("mental-health-recovery")) {
      return "/colorful-brain-connections.png"
    }
    if (src.includes("family-support")) {
      return "/diverse-family-unity.png"
    }
    if (src.includes("overcoming-stigma")) {
      return "/overcoming-stigma.png"
    }
    if (src.includes("science-of-addiction")) {
      return "/brain-scan-addiction.png"
    }
    return "/healthcare-consultation.png"
  }

  return (
    <Image
      src={getPlaceholderUrl(src) || "/placeholder.svg"}
      alt={alt}
      width={600}
      height={400}
      className={className}
    />
  )
}
