import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Informazioni */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Electro Center</h3>
            <p className="text-sm opacity-90 mb-4">
              Negozio di forniture elettriche con ampia scelta di materiali, utensili e accessori per professionisti e privati.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/39095448928"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center hover:shadow-lg transition-all"
                title="WhatsApp"
              >
                <span className="text-sm font-bold">W</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Electro+Center+B.C.+Di+Basilio+Crisiglione/@37.5189518,15.0895216,20.75z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center hover:shadow-lg transition-all"
                title="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Orari */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Orari</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Aperto</p>
                  <p className="opacity-90">Chiude alle ore 20</p>
                </div>
              </div>
              <p className="text-xs opacity-75 mt-4">
                Contattaci per orari speciali o appuntamenti
              </p>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Contatti</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="opacity-90">Via Canfora, 113<br />95128 Catania CT</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:095448928" className="hover:text-secondary transition-colors">
                  095 448928
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@electrocenter.it" className="hover:text-secondary transition-colors">
                  info@electrocenter.it
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>&copy; 2026 Electro Center B.C. Di Basilio Crisiglione. Tutti i diritti riservati.</p>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-secondary transition-colors">
                Privacy
              </Link>
              <Link href="/" className="hover:text-secondary transition-colors">
                Termini
              </Link>
              <Link href="/chi-siamo" className="hover:text-secondary transition-colors">
                Chi Siamo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
