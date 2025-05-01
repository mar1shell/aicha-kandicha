import PageHeader from "@/components/PageHeader"
import Image from "next/image"

export default function LaLegende() {
  return (
    <div className="min-h-screen bg-deep-black moroccan-pattern py-16">
      <div className="container-custom">
        <PageHeader
          title="La Légende d'Aïcha Kandicha"
          subtitle="Plongez dans l'histoire fascinante de cette figure mythique du folklore marocain"
        />

        <div className="max-w-4xl mx-auto bg-night-gray/80 rounded-lg border border-antique-gold/30 p-6 md:p-8 shadow-lg">
          <div className="prose prose-invert max-w-none">
            <div className="mb-12 relative">
              <Image
                src="/navigation-card-1.jpeg"
                alt="Illustration d'Aïcha Kandicha"
                width={1000}
                height={500}
                className="rounded-md w-full h-auto object-cover mb-6"
              />
              <div className="border-l-4 border-antique-gold pl-4 py-2 my-6">
                <p className="text-lg text-gray-300 italic font-raleway">
                  "Elle apparaît la nuit, près des sources d'eau, belle et séduisante, mais ses pieds de chèvre
                  trahissent sa véritable nature..."
                </p>
              </div>
            </div>

            <section className="mb-12 animate-fade-in">
              <h2 className="text-2xl font-cinzel text-antique-gold mb-4">Les origines du mythe</h2>
              <p className="mb-4 font-raleway text-gray-200">
                Aïcha Kandicha, également connue sous le nom de "Lalla Aïcha" dans certaines régions du Maroc, est l'une
                des figures les plus emblématiques du folklore marocain. Son mythe remonte à plusieurs siècles et s'est
                transmis oralement de génération en génération.
              </p>
              <p className="mb-4 font-raleway text-gray-200">
                Selon la tradition orale, Aïcha Kandicha serait une jinniya (esprit féminin) qui hante les points d'eau
                - rivières, sources et puits - particulièrement à la tombée de la nuit. Elle est décrite comme une femme
                d'une beauté envoûtante, capable de séduire les hommes pour ensuite les rendre fous ou les tuer.
              </p>
              <p className="font-raleway text-gray-200">
                L'une des caractéristiques distinctives d'Aïcha Kandicha est qu'elle possède des pieds de chèvre ou,
                selon certaines versions, des jambes de chameau, qu'elle tente de dissimuler sous de longues robes. Ce
                détail physique est souvent ce qui permet à ses victimes potentielles de l'identifier, bien qu'il soit
                généralement trop tard.
              </p>
            </section>

            <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-cinzel text-antique-gold mb-4">Le pouvoir de séduction</h2>
              <p className="mb-4 font-raleway text-gray-200">
                La légende raconte qu'Aïcha Kandicha apparaît généralement aux hommes solitaires, particulièrement ceux
                qui se trouvent près des cours d'eau à la tombée de la nuit. Elle se présente sous l'apparence d'une
                femme d'une beauté extraordinaire, vêtue de vêtements somptueux et parée de bijoux étincelants.
              </p>
              <p className="mb-4 font-raleway text-gray-200">
                Sa beauté et son charme sont si puissants qu'ils hypnotisent littéralement ses victimes, les rendant
                incapables de résister à son attraction. Les hommes qui la rencontrent sont comme ensorcelés, perdant
                toute volonté propre et tout sens de la réalité.
              </p>
              <p className="font-raleway text-gray-200">
                Une fois qu'elle a séduit un homme, Aïcha Kandicha peut le rendre fou, le faire disparaître, ou même le
                tuer. Dans certaines versions du mythe, elle emmène ses victimes sous l'eau, dans son royaume
                souterrain, d'où ils ne reviennent jamais. Dans d'autres récits, les hommes qui ont rencontré Aïcha
                Kandicha reviennent chez eux, mais sont à jamais marqués par cette expérience, incapables de désirer
                d'autres femmes et souffrant de troubles mentaux.
              </p>
            </section>

            <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-2xl font-cinzel text-antique-gold mb-4">Protection et rituels</h2>
              <p className="mb-4 font-raleway text-gray-200">
                Face à la menace que représente Aïcha Kandicha, la tradition marocaine a développé divers moyens de
                protection. Le plus courant consiste à éviter de se trouver seul près des points d'eau à la tombée de la
                nuit, particulièrement le mercredi, jour où elle serait la plus active.
              </p>
              <p className="mb-4 font-raleway text-gray-200">
                D'autres protections incluent le port d'amulettes, la récitation de versets du Coran, ou l'utilisation
                de sel et de fer, éléments réputés pour repousser les jnoun. Dans certaines régions, on conseille
                également de porter des vêtements à l'envers, ce qui aurait le pouvoir de confondre les esprits malins.
              </p>
              <p className="font-raleway text-gray-200">
                Pour ceux qui seraient déjà victimes d'Aïcha Kandicha, des rituels de guérison existent, souvent
                pratiqués par des guérisseurs traditionnels ou des fqihs (érudits religieux). Ces rituels peuvent
                inclure des cérémonies de transe, comme celles pratiquées dans la tradition Gnawa, où l'on tente
                d'apaiser l'esprit d'Aïcha Kandicha par la musique et la danse.
              </p>
            </section>

            <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-2xl font-cinzel text-antique-gold mb-4">Variations régionales</h2>
              <p className="mb-4 font-raleway text-gray-200">
                Le mythe d'Aïcha Kandicha présente de nombreuses variations selon les régions du Maroc. Dans le nord du
                pays, elle est souvent associée à la couleur rouge et serait particulièrement active près des rivières.
                Dans d'autres régions, elle est liée à la couleur noire et hanterait plutôt les puits et les sources.
              </p>
              <p className="mb-4 font-raleway text-gray-200">
                Son apparence physique varie également : si les pieds de chèvre sont la caractéristique la plus
                communément citée, certaines traditions lui attribuent des jambes de chameau, des sabots de mule, ou
                même des pieds palmés comme ceux d'un canard.
              </p>
              <p className="font-raleway text-gray-200">
                Dans certaines versions du mythe, Aïcha Kandicha n'est pas seule mais fait partie d'un groupe de
                jinniyat (esprits féminins) qui inclurait également Lalla Mira (associée au jaune) et Lalla Malika
                (associée au violet). Ces entités sont parfois invoquées lors de cérémonies de transe, où chacune est
                associée à une couleur, un parfum et un type de musique spécifiques.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <h2 className="text-2xl font-cinzel text-antique-gold mb-4">Héritage culturel</h2>
              <p className="mb-4 font-raleway text-gray-200">
                Au-delà de son aspect surnaturel, le mythe d'Aïcha Kandicha constitue un élément important du patrimoine
                culturel marocain. Il a inspiré de nombreuses œuvres artistiques, littéraires et musicales, et continue
                d'exercer une fascination sur les nouvelles générations.
              </p>
              <p className="mb-4 font-raleway text-gray-200">
                Pour les anthropologues et les historiens, l'étude de cette figure légendaire offre un éclairage
                précieux sur les croyances, les peurs et les structures sociales de la société marocaine traditionnelle.
                Le mythe d'Aïcha Kandicha peut être interprété comme une métaphore des dangers de la séduction, une mise
                en garde contre la transgression des normes sociales, ou encore une personnification des forces
                naturelles imprévisibles.
              </p>
              <p className="font-raleway text-gray-200">
                Aujourd'hui, bien que la croyance en Aïcha Kandicha ait diminué avec l'urbanisation et la modernisation
                du Maroc, son mythe reste vivace dans la mémoire collective et continue d'être transmis, témoignant de
                la richesse et de la persistance du patrimoine immatériel marocain.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
