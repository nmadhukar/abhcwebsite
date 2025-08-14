import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah J.",
    text: "Autumn Behavioral Health gave me the tools to reclaim my life. The therapists are compassionate and truly listen. I'm so grateful for their support.",
  },
  {
    name: "Mark T.",
    text: "Finding care for our son was overwhelming, but the team here made it so easy. They've helped our whole family heal. We can't thank them enough.",
  },
  {
    name: "Emily R.",
    text: "I finally feel understood. The combination of therapy and medication management has made a world of difference for my anxiety.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blue sm:text-4xl">Stories of Hope & Healing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow">
              <div className="flex text-yellow-400 mb-4">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <p className="mt-4 font-semibold text-brand-blue">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
