import Image from "next/image"
import Link from "next/link"
import VideoPlayer from "@/components/VideoPlayer"
import NavigationCard from "@/components/NavigationCard"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-img.jpeg"
            alt="Paysage nocturne marocain"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/60 to-deep-black"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cinzel text-antique-gold mb-6 animate-fade-in text-shadow-gold">
            Aïcha Kandicha
          </h1>
          <h2
            className="text-2xl md:text-3xl font-cinzel text-white mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Légendes du Maroc
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg text-gray-300 mb-8 font-raleway animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Plongez dans le mystère d'une des figures les plus énigmatiques du folklore marocain
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link href="/la-legende" className="btn-primary">
              Découvrir la légende
            </Link>
            <Link href="/galerie" className="btn-secondary">
              Explorer la galerie
            </Link>
          </div>
        </div>
      </section>

      {/* À propos du projet */}
      <section className="py-16 bg-night-gray moroccan-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-cinzel text-antique-gold mb-6">À propos du projet</h2>
            <p className="text-gray-300 mb-8 font-raleway">
              Ce site web est le fruit d'un projet universitaire de l'ENSAM Casablanca visant à explorer et préserver le
              patrimoine culturel marocain. Notre équipe a choisi de se concentrer sur la figure légendaire d'Aïcha
              Kandicha, personnage fascinant du folklore marocain, afin de documenter et partager cette richesse
              culturelle.
            </p>
          </div>
        </div>
      </section>

      {/* Vidéo Section */}
      <section className="py-16 bg-deep-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-cinzel text-antique-gold mb-10 text-center">Notre documentaire</h2>
          <div className="max-w-4xl mx-auto">
            <VideoPlayer videoId="ZKN_HQH0YSk" title="Documentaire sur Aïcha Kandicha" />
            <div className="mt-6 text-center">
              <p className="text-gray-300 font-raleway italic">
                Documentaire réalisé dans le cadre du projet universitaire ENSAM Casablanca
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 bg-gradient-to-b from-night-gray to-deep-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-cinzel text-antique-gold mb-10 text-center">Explorer le mythe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NavigationCard
              title="La Légende"
              description="Découvrez le récit complet de la légende d'Aïcha Kandicha et son évolution à travers les siècles."
              href="/la-legende"
              imageSrc="/navigation-card-1.jpeg"
            />
            <NavigationCard
              title="Interprétations"
              description="Explorez les différentes interprétations culturelles et symboliques de cette figure légendaire."
              href="/interpretations"
              imageSrc="/navigation-card-2.jpeg"
            />
            <NavigationCard
              title="Théories historiques"
              description="Plongez dans les théories sur les origines historiques d'Aïcha Kandicha et son contexte."
              href="/theories"
              imageSrc="/navigation-card-3.jpeg"
            />
            <NavigationCard
              title="Galerie"
              description="Parcourez notre collection d'images artistiques représentant Aïcha Kandicha."
              href="/galerie"
              imageSrc="/navigation-card-4.jpeg"
            />
            <NavigationCard
              title="À propos"
              description="En savoir plus sur notre équipe et le contexte universitaire de ce projet."
              href="/a-propos"
              imageSrc="/navigation-card-5.png"
            />
            <div className="card-dark flex flex-col justify-center items-center text-center h-full">
              <h3 className="text-xl font-cinzel text-antique-gold mb-4">Partagez votre expérience</h3>
              <p className="text-gray-300 font-raleway text-sm mb-6">
                Avez-vous des histoires ou des témoignages liés à la légende d'Aïcha Kandicha? Partagez-les avec nous.
              </p>
              <Link href="/contact" className="btn-secondary">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
