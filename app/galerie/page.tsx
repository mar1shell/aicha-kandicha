"use client"

import { useState } from "react"
import PageHeader from "@/components/PageHeader"
import { galleryImages } from "@/lib/imageData"
import Image from "next/image"
import { X } from "lucide-react"
import VideoPlayer from "@/components/VideoPlayer"

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="min-h-screen bg-deep-black moroccan-pattern py-16">
      <div className="container-custom">
        <PageHeader
          title="Galerie"
          subtitle="Explorez notre collection d'images artistiques représentant Aïcha Kandicha"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item cursor-pointer" onClick={() => openModal(image.id)}>
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent opacity-60 transition-opacity duration-300 hover:opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-cinzel text-antique-gold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold font-cinzel text-antique-gold mb-6 text-center">Notre documentaire</h2>
          <VideoPlayer videoId="ZKN_HQH0YSk" title="Documentaire sur Aïcha Kandicha" />
          <div className="mt-4 text-center">
            <p className="text-gray-300 font-raleway italic">
              Documentaire réalisé dans le cadre du projet universitaire d'Arts et Patrimoine - ENSAM Casablanca
            </p>
          </div>
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-deep-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-antique-gold"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>

              {galleryImages.find((img) => img.id === selectedImage) && (
                <div className="bg-night-gray border border-antique-gold rounded-lg overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={`/placeholder.svg?height=720&width=1280`}
                      alt={galleryImages.find((img) => img.id === selectedImage)?.alt || ""}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-cinzel text-antique-gold mb-2">
                      {galleryImages.find((img) => img.id === selectedImage)?.title}
                    </h3>
                    <p className="text-gray-300 font-raleway">
                      {galleryImages.find((img) => img.id === selectedImage)?.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
