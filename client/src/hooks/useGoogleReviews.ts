import { useState, useEffect } from "react";

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  time: string;
  profilePhotoUrl?: string;
}

/**
 * Hook per recuperare le recensioni da Google Maps
 * Filtra solo le recensioni con 4 e 5 stelle
 * Nota: In produzione, questo dovrebbe essere gestito da un backend
 * per evitare problemi CORS e per sicurezza
 */
export function useGoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulazione di dati da Google Maps
    // In produzione, questi dati verrebbero da un backend API
    const mockReviews: GoogleReview[] = [
      {
        id: "1",
        author: "Gianbruno Rizzo",
        rating: 5,
        text: "Entrare in questa ferramenta è sempre una garanzia di qualità e affidabilità. Il negozio è fornito di tutto: materiali elettrici, utensili, colori, viti, bulloni e accessori di ogni genere... insomma, tutto ciò che serve per la fai da te.",
        time: "4 mesi fa",
        profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      },
      {
        id: "2",
        author: "Salvatore Peluso",
        rating: 5,
        text: "Negozio piccolino, ma con infinito assortimento prodotti di qualità con prezzi competitivi. Nei titolari Basilio e Daniela trovi massima disponibilità e cordialità.",
        time: "4 mesi fa",
        profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      },
      {
        id: "3",
        author: "Michele",
        rating: 5,
        text: "Gentile, professionale e disponibile. Ampia scelta di prodotti.",
        time: "5 mesi fa",
        profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      },
      {
        id: "4",
        author: "Alessandro Liccardi",
        rating: 5,
        text: "Super fornito, persona cordialissima, disponibile a darti la soluzione giusta per qualsiasi problema, andando anche contro i suoi interessi, mai vista una cosa simile. Di solito un venditore cerca sempre di vendere cose che non servono. Lo consiglio vivamente!",
        time: "2 anni fa",
        profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      },
      {
        id: "5",
        author: "Vittorio Abramo",
        rating: 5,
        text: "Avevo bisogno di un ricambio introvabile. Lo ho contattato e mi ha aiutato subito anche non essendo andato in negozio, sono qui a lasciare la recensione. È stato eccezionale, mi ha suggerito una soluzione giusta per qualsiasi problema.",
        time: "4 anni fa",
        profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      },
    ];

    // Simula un piccolo delay di caricamento
    const timer = setTimeout(() => {
      setReviews(mockReviews);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { reviews, loading, error };
}
