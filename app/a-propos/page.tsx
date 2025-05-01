import PageHeader from "@/components/PageHeader"
import Image from "next/image"
import Link from "next/link"

export default function APropos() {
  const teamMembers = [
    {
      id: 1,
      name: "Mekyassi Malak",
      role: "Rédactrice principale & Responsable de la recherche",
      bio: "- Rédaction du script narratif de la vidéo. <br />- Recherche approfondie sur la légende d’Aïsha Kandisha (origine, interprétations, représentations culturelles). <br />- Contribution à la structuration du site et choix du contenu textuel",
      image: "/malak.jpg",
    },
    {
      id: 2,
      name: "EL-HAMDAOUI MAROUANE",
      role: "Développeur principal & Narrateur",
      bio: "- Conception et développement du site web. <br />- Enregistrement de la voix-off pour la vidéo. <br />- Coordination générale du projet ",
      image: "/marouane.png",
    },
    {
      id: 3,
      name: "Chahine Ikram",
      role: "Designer visuelle & Chargée des médias",
      bio: "- Sélection et organisation des images et clips à utiliser pour la vidéo. <br />- Intégration du visuel sur le site. <br />- Relecture et feedback sur le contenu final de la vidéo et du site",
      image: "/ikram.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-deep-black moroccan-pattern py-16">
      <div className="container-custom">
        <PageHeader
          title="À Propos du Projet"
          subtitle="Découvrez l'équipe et le contexte de ce projet universitaire"
        />

        <div className="max-w-4xl mx-auto">
          <div className="card-dark mb-12">
            <h2 className="text-2xl font-cinzel text-antique-gold mb-4">Notre mission</h2>
            <p className="font-raleway text-gray-200 mb-4">
              Ce projet est né de notre passion commune pour le patrimoine culturel marocain et de notre désir de
              préserver et de partager les richesses du folklore national. En tant qu'étudiants de l'ENSAM Casablanca,
              nous avons choisi de nous concentrer sur la figure légendaire d'Aïcha Kandicha, un personnage fascinant
              qui continue d'habiter l'imaginaire collectif marocain.
            </p>
            <p className="font-raleway text-gray-200 mb-4">
              Notre objectif est double : d'une part, documenter et analyser cette légende dans toute sa complexité et
              ses variations régionales ; d'autre part, la rendre accessible à un public plus large, notamment aux
              jeunes générations qui pourraient être moins familières avec ces récits traditionnels.
            </p>
            <p className="font-raleway text-gray-200">
              À travers ce site web et notre documentaire, nous espérons contribuer à la préservation de ce patrimoine
              immatériel tout en proposant une réflexion sur sa signification contemporaine et son importance
              culturelle.
            </p>
          </div>

          <h2 className="text-2xl font-cinzel text-antique-gold mb-6 text-center">Notre équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="card-dark text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-2 border-antique-gold/50">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-cinzel text-antique-gold mb-1">{member.name}</h3>
                <p className="text-sm text-antique-gold/80 mb-3 font-raleway">{member.role}</p>
                <p className="text-gray-300 text-sm font-raleway" dangerouslySetInnerHTML={{__html:member.bio}}></p>
              </div>
            ))}
          </div>

          <div className="card-dark">
            <h2 className="text-2xl font-cinzel text-antique-gold mb-4">Contexte universitaire</h2>
            <p className="font-raleway text-gray-200 mb-4">
              Ce projet a été réalisé dans le cadre du cours "Patrimoine culturel et technologies numériques" de l'École
              Nationale Supérieure d'Arts et Métiers (ENSAM) de Casablanca. Il s'inscrit dans une initiative plus large
              visant à encourager les étudiants à explorer et à valoriser le patrimoine culturel marocain à travers les
              outils numériques.
            </p>
            <p className="font-raleway text-gray-200 mb-4">
              Nous tenons à remercier nos professeurs pour leur soutien et leurs conseils tout au long de ce projet,
              ainsi que toutes les personnes qui ont accepté de partager leurs connaissances et leurs témoignages sur la
              légende d'Aïcha Kandicha.
            </p>
            <p className="font-raleway text-gray-200">
              Si vous souhaitez en savoir plus sur notre démarche ou si vous avez des questions concernant ce projet,
              n'hésitez pas à nous contacter via la page dédiée.
            </p>

            <div className="mt-6 text-center">
              <Link href="/contact" className="btn-secondary">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
