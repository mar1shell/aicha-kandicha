import Link from "next/link"

const Footer = () => {
  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "La Légende", path: "/la-legende" },
    { name: "Interprétations", path: "/interpretations" },
    { name: "Théories", path: "/theories" },
    { name: "Galerie", path: "/galerie" },
    { name: "À Propos", path: "/a-propos" },
  ]

  return (
    <footer className="bg-deep-black border-t border-antique-gold/20 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-cinzel text-antique-gold mb-4">Aïcha Kandicha</h3>
            <p className="text-gray-300 font-raleway">
              Projet universitaire dédié à l'exploration de la légende marocaine d'Aïcha Kandicha.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-cinzel text-antique-gold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-antique-gold transition-colors duration-200 font-raleway"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-cinzel text-antique-gold mb-4">Contact</h3>
            <p className="text-gray-300 font-raleway">
              EL-HAMDAOUI MAROUANE
              <br />
              <a href="mailto:elhamdaouimar1@gmail.com">elhamdaouimar1@gmail.com</a>
              <br />
              +212638444007
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-antique-gold/10 text-center">
          <p className="text-gray-400 font-raleway text-sm">
            &copy; {new Date().getFullYear()} Projet Aïcha Kandicha. Tous droits réservés. ENSAM Casablanca.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
