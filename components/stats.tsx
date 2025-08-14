import { Users, MapPin, Smile } from "lucide-react"

const stats = [
  { id: 1, name: "Patients Served Annually", value: "5,000+", icon: Users },
  { id: 2, name: "Locations Across Ohio", value: "12", icon: MapPin },
  { id: 3, name: "Years of Experience", value: "20+", icon: Smile },
]

export default function Stats() {
  return (
    <div className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
