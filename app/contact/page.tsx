"use client"

import type React from "react"

import { useState } from "react"
import PageHeader from "@/components/PageHeader"
import { Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-deep-black moroccan-pattern py-16">
      <div className="container-custom">
        <PageHeader
          title="Contactez-nous"
          subtitle="Partagez vos histoires, posez vos questions ou proposez une collaboration"
        />

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="card-dark text-center py-12">
              <div className="w-16 h-16 bg-antique-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={32} className="text-antique-gold" />
              </div>
              <h3 className="text-2xl font-cinzel text-antique-gold mb-4">Message envoyé avec succès!</h3>
              <p className="text-gray-200 font-raleway mb-6">
                Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
              </p>
              <button onClick={() => setIsSubmitted(false)} className="btn-secondary">
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-dark">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-antique-gold font-raleway mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-night-gray border border-antique-gold/30 rounded-md px-4 py-2 text-white focus:border-antique-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-antique-gold font-raleway mb-2">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-night-gray border border-antique-gold/30 rounded-md px-4 py-2 text-white focus:border-antique-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-antique-gold font-raleway mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-night-gray border border-antique-gold/30 rounded-md px-4 py-2 text-white focus:border-antique-gold focus:outline-none"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="temoignage">Témoignage ou histoire personnelle</option>
                  <option value="question">Question sur la légende</option>
                  <option value="collaboration">Proposition de collaboration</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-antique-gold font-raleway mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-night-gray border border-antique-gold/30 rounded-md px-4 py-2 text-white focus:border-antique-gold focus:outline-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary inline-flex items-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Envoi en cours</span>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <span className="mr-2">Envoyer le message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-dark">
              <h3 className="text-xl font-cinzel text-antique-gold mb-4">Adresse</h3>
              <p className="text-gray-200 font-raleway">
                ENSAM Casablanca
                <br />
                150 Boulevard du Nil
                <br />
                Casablanca, Maroc
              </p>
            </div>
            <div className="card-dark">
              <h3 className="text-xl font-cinzel text-antique-gold mb-4">Contact direct</h3>
              <p className="text-gray-200 font-raleway mb-2">
                <strong className="text-antique-gold">Email:</strong> elhamdaouimar1@gmail.com
              </p>
              <p className="text-gray-200 font-raleway">
                <strong className="text-antique-gold">Téléphone:</strong> +212 638 44 40 07
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
