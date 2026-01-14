import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Heart, Zap } from "lucide-react";

export default function ChiSiamo() {
  const values = [
    {
      icon: CheckCircle,
      title: "Qualità",
      description: "Selezioniamo solo prodotti di marca affidabili e certificati per garantire la massima sicurezza.",
    },
    {
      icon: Heart,
      title: "Dedizione",
      description: "Ascoltiamo attentamente le tue esigenze e forniamo consulenza personalizzata per ogni progetto.",
    },
    {
      icon: Zap,
      title: "Efficienza",
      description: "Rapidi nel trovare la soluzione giusta, efficienti nel servizio, sempre disponibili.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Chi Siamo
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Scopri la storia di Electro Center e i valori che guidano il nostro lavoro quotidiano.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 md:order-1 animate-slide-in-left">
                <img
                  src="/images/team-expertise.jpg"
                  alt="Team Electro Center"
                  className="rounded-xl shadow-lg w-full h-auto hover:shadow-2xl transition-shadow duration-500"
                />
              </div>

              {/* Text */}
              <div className="order-1 md:order-2 animate-slide-in-right">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  La Nostra Storia
                </h2>
                <div className="space-y-4 text-foreground">
                  <p className="text-lg">
                    Electro Center nasce dalla passione di Basilio Crisiglione per il settore delle forniture elettriche. Con oltre 20 anni di esperienza, abbiamo costruito una reputazione solida basata sulla qualità, l'affidabilità e la dedizione al cliente.
                  </p>
                  <p className="text-lg">
                    Il nostro negozio a Catania è diventato un punto di riferimento per professionisti, artigiani e privati che cercano materiali elettrici di qualità, utensili specializzati e una consulenza competente.
                  </p>
                  <p className="text-lg">
                    Ogni giorno lavoriamo per offrire non solo prodotti eccellenti, ma anche un servizio personalizzato che rispecchia i valori di trasparenza, cordialità e disponibilità che caratterizzano il nostro brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                I Nostri Valori
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Questi principi guidano ogni decisione e ogni interazione con i nostri clienti
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-all animate-fade-in-up"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 md:p-12 border border-border shadow-md animate-fade-in-scale">
              <h2 className="text-3xl font-bold text-primary mb-6">
                La Nostra Missione
              </h2>
              <p className="text-lg text-foreground mb-6">
                Fornire a professionisti, artigiani e privati una selezione completa di materiali elettrici, utensili e accessori di qualità, accompagnati da una consulenza professionale e da un servizio cordiale e disponibile.
              </p>
              <p className="text-lg text-foreground mb-6">
                Vogliamo essere il negozio di fiducia dove trovare non solo i prodotti giusti, ma anche i consigli esperti per realizzare ogni progetto con successo.
              </p>
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">Basilio Crisiglione</span><br />
                  Titolare, Electro Center B.C.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Visita il Nostro Negozio
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Siamo a Catania, pronti ad accoglierti e aiutarti a trovare esattamente quello che ti serve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a
                href="tel:095448928"
                className="px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Chiamaci: 095 448928
              </a>
              <a
                href="https://www.google.com/maps/place/Electro+Center+B.C.+Di+Basilio+Crisiglione/@37.5189518,15.0895216,20.75z"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Vedi su Google Maps
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Via Canfora, 113 • 95128 Catania CT<br />
              Aperto fino alle 20:00
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
