import PageHeader from "@/components/PageHeader"
import { timelineData } from "@/lib/imageData"
import Image from "next/image"

export default function Theories() {
  return (
    <div className="min-h-screen bg-deep-black moroccan-pattern py-16">
      <div className="container-custom">
        <PageHeader
          title="Théories Historiques"
          subtitle="Explorez les différentes hypothèses sur les origines d'Aïcha Kandicha"
        />

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative flex justify-center mb-12">
            <Image
              src="/theorie.jpeg"
              alt="Illustration historique"
              width={800}
              height={400}
              className="rounded-lg border border-antique-gold/30"
            />
          </div>

          <div className="card-dark mb-8">
            <h3 className="text-xl md:text-2xl font-cinzel text-antique-gold mb-4">À la recherche des origines</h3>
            <p className="font-raleway text-gray-200">
              L'origine exacte du mythe d'Aïcha Kandicha reste entourée de mystère. Plusieurs théories ont été avancées
              par les historiens, les anthropologues et les folkloristes pour tenter d'expliquer la genèse de cette
              figure légendaire. Ces théories, loin de s'exclure mutuellement, peuvent se compléter pour offrir une
              vision plus riche et nuancée de ce personnage complexe du folklore marocain.
            </p>
          </div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="timeline-connector"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  {/* <div className="timeline-dot" style={{ top: "24px" }}></div> */}

                  <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}>
                    <div className="md:w-1/3 text-center">
                      <div className="card-dark inline-block">
                        <span className="text-antique-gold font-cinzel font-bold">{item.year}</span>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <div className="card-dark h-full">
                        <h3 className="text-xl font-cinzel text-antique-gold mb-3">{item.title}</h3>
                        <p className="font-raleway text-gray-200">{item.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-dark mt-16">
            <h3 className="text-xl md:text-2xl font-cinzel text-antique-gold mb-4">Conclusion</h3>
            <p className="font-raleway text-gray-200 mb-4">
              Ces différentes théories sur l'origine d'Aïcha Kandicha témoignent de la richesse et de la complexité de
              cette figure légendaire. Qu'elle soit une divinité préislamique transformée, une héroïne historique
              mythifiée, ou une création symbolique répondant à des besoins sociaux et psychologiques, Aïcha Kandicha
              occupe une place importante dans l'imaginaire collectif marocain.
            </p>
            <p className="font-raleway text-gray-200">
              La persistance de son mythe à travers les siècles, malgré les transformations sociales et culturelles du
              Maroc, montre la capacité des légendes à s'adapter et à continuer de résonner avec les préoccupations
              humaines fondamentales. Aïcha Kandicha, dans toutes ses incarnations et interprétations, reste un
              fascinant sujet d'étude pour comprendre la culture marocaine dans sa profondeur historique et sa
              diversité.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
