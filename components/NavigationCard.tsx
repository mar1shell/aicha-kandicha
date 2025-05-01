import Link from "next/link"
import Image from "next/image"

interface NavigationCardProps {
  title: string
  description: string
  href: string
  imageSrc: string
}

const NavigationCard = ({ title, description, href, imageSrc }: NavigationCardProps) => {
  return (
    <Link href={href} className="block group">
      <div className="card-dark h-full overflow-hidden">
        <div className="relative h-48 mb-4 overflow-hidden rounded">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent opacity-70"></div>
        </div>
        <h3 className="text-xl font-cinzel text-antique-gold mb-2 group-hover:text-shadow-gold transition-all">
          {title}
        </h3>
        <p className="text-gray-300 font-raleway text-sm">{description}</p>
      </div>
    </Link>
  )
}

export default NavigationCard
