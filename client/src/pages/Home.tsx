import { Star, Zap, Package, Users, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { useState, useEffect } from "react";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";

export default function Home() {
  const [currentTestimonialBlock, setCurrentTestimonialBlock] = useState(0);
  const { reviews, loading } = useGoogleReviews();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const reviewsPerBlock = 4;

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay || reviews.length === 0) return;

    const timer = setInterval(() => {
      const totalBlocks = Math.ceil(reviews.length / reviewsPerBlock);
      setCurrentTestimonialBlock((prev) => (prev + 1) % totalBlocks);
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoPlay, reviews.length]);

  const nextBlock = () => {
    const totalBlocks = Math.ceil(reviews.length / reviewsPerBlock);
    setCurrentTestimonialBlock((prev) => (prev + 1) % totalBlocks);
    setIsAutoPlay(false);
  };

  const prevBlock = () => {
    const totalBlocks = Math.ceil(reviews.length / reviewsPerBlock);
    setCurrentTestimonialBlock((prev) => (prev - 1 + totalBlocks) % totalBlocks);
    setIsAutoPlay(false);
  };

  const getVisibleReviews = () => {
    const start = currentTestimonialBlock * reviewsPerBlock;
    return reviews.slice(start, start + reviewsPerBlock);
  };

  const services = [
    {
      icon: Zap,
      title: "Materiali Elettrici",
      description: "Ampia selezione di cavi, connettori, interruttori e componenti elettrici professionali.",
      image: "/images/service-materials.jpg",
    },
    {
      icon: Package,
      title: "Utensili e Accessori",
      description: "Attrezzi specializzati, cacciaviti, pinze e accessori per ogni tipo di lavoro.",
      image: "/images/service-tools.jpg",
    },
    {
      icon: Shield,
      title: "Qualità Garantita",
      description: "Prodotti di marca affidabili con garanzia e certificazioni di sicurezza.",
      image: "/images/service-quality.jpg",
    },
    {
      icon: Users,
      title: "Consulenza Professionale",
      description: "Esperienza e disponibilità per trovare la soluzione giusta per ogni esigenza.",
      image: "/images/service-consultation.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen md:h-[600px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/hero-electrical-store.jpg)",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40 transition-all duration-700 hover:bg-black/35"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Forniture Elettriche di Qualità
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 opacity-95 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Scopri la nostra ampia selezione di materiali, utensili e accessori professionali per artigiani e privati a Catania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <a
                  href="tel:095448928"
                  className="px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                >
                  Chiamaci Ora
                </a>
                <a
                  href="https://wa.me/39095448928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300 text-center border border-white/30 backdrop-blur-sm"
                >
                  Scrivi su WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                I Nostri Servizi
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tutto ciò che serve per i tuoi progetti elettrici, con qualità e professionalità
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="card-lift bg-white rounded-xl overflow-hidden border border-border hover:border-secondary hover:shadow-lg transition-all duration-300"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Service Image */}
                    <div className="h-40 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in-scale" style={{ animationDelay: "0s" }}>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  4.7
                </div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-secondary text-secondary"
                      style={{
                        animation: `fadeInScale 0.5s ease-out ${i * 0.1}s both`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-sm opacity-90">Su 33 Recensioni</p>
              </div>
              <div className="animate-fade-in-scale" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  20+
                </div>
                <p className="text-sm opacity-90">Anni di Esperienza</p>
              </div>
              <div className="animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  1000+
                </div>
                <p className="text-sm opacity-90">Prodotti Disponibili</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Cosa Dicono i Nostri Clienti
              </h2>
              <p className="text-lg text-muted-foreground">
                Leggi le recensioni verificate da Google Maps
              </p>
            </div>

            {/* Testimonial Carousel */}
            {loading ? (
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="skeleton h-64 rounded-xl"></div>
                  ))}
                </div>
              </div>
            ) : reviews.length > 0 ? (
              <div className="w-full">
                {/* Google Reviews Header */}
                <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up">
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span className="font-bold text-blue-600">Google</span>
                    <span className="text-yellow-500 font-bold">★ 4.7</span>
                  </div>
                </div>

                {/* Reviews Grid - 4 per blocco */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-fade-in-up">
                  {getVisibleReviews().map((review) => (
                    <ReviewCard key={review.id} review={review} isActive={true} />
                  ))}
                </div>

                {/* Carousel Controls */}
                <div className="flex flex-col gap-6">
                  {/* Navigation Buttons */}
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={prevBlock}
                      className="p-3 rounded-full bg-secondary text-primary hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                      title="Blocco precedente"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex items-center gap-2">
                      {[...Array(Math.ceil(reviews.length / reviewsPerBlock))].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setCurrentTestimonialBlock(i);
                            setIsAutoPlay(false);
                          }}
                          className={`transition-all duration-300 rounded-full ${
                            i === currentTestimonialBlock
                              ? "bg-secondary w-8 h-3"
                              : "bg-muted w-3 h-3 hover:bg-secondary/50"
                          }`}
                          title={`Vai a blocco ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextBlock}
                      className="p-3 rounded-full bg-secondary text-primary hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                      title="Prossimo blocco"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Counter */}
                  <div className="text-center text-sm text-muted-foreground">
                    Blocco {currentTestimonialBlock + 1} di {Math.ceil(reviews.length / reviewsPerBlock)} • {getVisibleReviews().length} recensioni visibili
                  </div>

                  {/* Scroll Hint */}
                  <div className="text-center text-xs text-muted-foreground">
                    Scorri per leggere altre recensioni 5 e 4 stelle verificate da Google
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Hai Bisogno di Aiuto?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Il nostro team è pronto a consigliarti e trovare la soluzione perfetta per le tue esigenze.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:095448928"
                className="px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Chiamaci: 095 448928
              </a>
              <a
                href="https://wa.me/39095448928"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
