import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pagina Non Trovata
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Scusa, la pagina che stai cercando non esiste. Torna alla home e continua a esplorare i nostri servizi.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Torna alla Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
