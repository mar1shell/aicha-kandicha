"use client"

import { useState } from "react"
import PageHeader from "@/components/PageHeader"
import { interpretationData } from "@/lib/imageData"
import { ChevronDown } from "lucide-react"

export default function Interpretations() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null)
    } else {
      setExpandedId(id)
    }
  }

  return (
    <div className="min-h-screen bg-deep-black moroccan-pattern py-16">
      <div className="container-custom">
        <PageHeader
          title="Interprétations Culturelles"
          subtitle="Découvrez les différentes façons dont la légende d'Aïcha Kandicha a été interprétée à travers le temps"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {interpretationData.map((item) => (
            <div
              key={item.id}
              className={`card-dark transition-all duration-500 ${
                expandedId === item.id ? "border-antique-gold" : "border-antique-gold/30"
              }`}
            >
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(item.id)}>
                <h3 className="text-xl md:text-2xl font-cinzel text-antique-gold">{item.title}</h3>
                <ChevronDown
                  className={`text-antique-gold transition-transform duration-300 ${
                    expandedId === item.id ? "transform rotate-180" : ""
                  }`}
                  size={24}
                />
              </div>

              <div
                className={`mt-4 overflow-hidden transition-all duration-500 ${
                  expandedId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-l-2 border-antique-gold/50 pl-4 py-2">
                  <p className="font-raleway text-gray-200">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 card-dark">
          <h3 className="text-xl md:text-2xl font-cinzel text-antique-gold mb-4">Signification contemporaine</h3>
          <p className="font-raleway text-gray-200 mb-4">
            Aujourd'hui, la figure d'Aïcha Kandicha continue d'évoluer et de s'adapter aux contextes contemporains. Pour
            certains, elle représente un symbole de résistance culturelle face à la mondialisation et à
            l'homogénéisation des cultures. Pour d'autres, elle incarne les aspects refoulés de la psyché collective
            marocaine.
          </p>
          <p className="font-raleway text-gray-200 mb-4">
            Dans le domaine artistique, Aïcha Kandicha est devenue une source d'inspiration pour de nombreux créateurs
            marocains contemporains, qui réinterprètent son mythe à travers différents médiums : peinture, littérature,
            musique, cinéma. Ces œuvres contribuent à maintenir vivante cette figure légendaire tout en lui donnant de
            nouvelles significations.
          </p>
          <p className="font-raleway text-gray-200">
            Sur le plan psychologique, certains chercheurs voient dans le mythe d'Aïcha Kandicha un mécanisme culturel
            permettant d'expliquer et de donner sens à certains troubles mentaux. La "possession" par Aïcha Kandicha
            offrirait ainsi un cadre culturellement acceptable pour exprimer des souffrances psychiques qui, autrement,
            pourraient être stigmatisées.
          </p>
        </div>
      </div>
    </div>
  )
}
