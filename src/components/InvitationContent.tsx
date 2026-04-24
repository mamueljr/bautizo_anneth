import React from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Calendar, MessageCircle, Church, PartyPopper } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.section 
    {...fadeIn}
    className={`py-12 px-6 max-w-lg mx-auto text-center ${className}`}
  >
    {children}
  </motion.section>
);

const Divider = () => (
  <div className="flex items-center justify-center space-x-2 my-8 opacity-40">
    <div className="h-[1px] w-12 bg-brand-gold" />
    <div className="w-1.5 h-1.5 rotate-45 border border-brand-gold" />
    <div className="h-[1px] w-12 bg-brand-gold" />
  </div>
);

export default function InvitationContent() {
  const WHATSAPP_NUMBER = "526145604085"; // Placeholder, can be changed
  const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Confirmo mi asistencia al bautizo de Anneth. ¡Muchas gracias!");

  const openInMaps = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, "_blank");
  };

  return (
    <main className="bg-brand-beige min-h-screen text-brand-dark pb-20">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Artistic Background Image - Anneth's foot */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/anneth1.jpg" 
            alt="Detalle de Anneth" 
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-beige via-transparent to-brand-beige" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-brand-gold italic font-serif text-lg md:text-xl mb-6 max-w-sm mx-auto"
          >
            "Damos gracias a Dios por la vida de nuestra hija Anneth"
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
             <h2 className="text-sm tracking-[0.3em] uppercase text-stone-500 mb-4">Invitación de Bautizo</h2>
             <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-b from-brand-dark to-brand-gold bg-clip-text text-transparent py-2">
               Anneth
             </h1>
             <p className="text-2xl md:text-3xl font-serif italic text-brand-gold">Rojas Hernández</p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        >
          <div className="w-[1px] h-16 bg-brand-gold mx-auto" />
        </motion.div>
      </section>

      {/* Parents & Godmother */}
      <Section className="sm:py-20">
        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-sans">Sus Padres</h3>
            <p className="text-xl md:text-2xl font-serif">Emmanuel Rojas</p>
            <p className="text-xl md:text-2xl font-serif">Lucero Hernández</p>
          </div>
          
          <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto" />

          <div>
             <h3 className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-sans">Acompañada por su madrina</h3>
             <p className="text-xl md:text-2xl font-serif">Diana Teresa Hernández</p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Event Details - Ceremony */}
      <Section>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-sm ring-1 ring-brand-gold/5">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-brand-beige rounded-full">
              <Church className="w-6 h-6 text-brand-gold" />
            </div>
          </div>
          
          <h2 className="text-3xl mb-4">La Ceremonia</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 text-stone-600">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>Sábado, 9 de Mayo de 2026</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-stone-600">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>11:00 AM</span>
            </div>
            <div className="flex items-start justify-center space-x-3 text-stone-600 max-w-xs mx-auto">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-brand-gold" />
              <span className="text-sm">Parroquia Señor de la Misericordia</span>
            </div>
            <p className="text-xs text-stone-400 italic">
              Calle San Miguel el Grande No. 3401, Col. Ignacio Allende, Chihuahua
            </p>
          </div>

          <button 
            onClick={() => openInMaps(28.69596578360774, -106.13259033518027)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-dark text-white rounded-full text-sm tracking-widest hover:bg-black transition-colors"
          >
            <span>CÓMO LLEGAR</span>
          </button>
        </div>
      </Section>

      {/* Parroquia Image */}
      <motion.div 
        {...fadeIn}
        className="max-w-xl mx-auto px-6 mb-12"
      >
        <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <img 
            src="/images/parroquia.jpg" 
            alt="Parroquia Señor de la Misericordia" 
            className="w-full h-full object-cover"
            onError={(e) => {
               (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1548625345-4204859a117b?q=80&w=2072&auto=format&fit=crop";
            }}
          />
        </div>
      </motion.div>

      {/* Event Details - Reception */}
      <Section>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-sm ring-1 ring-brand-gold/5">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-brand-beige rounded-full">
              <PartyPopper className="w-6 h-6 text-brand-gold" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl mb-4 leading-tight">Después del bautizo, te invitamos a compartir una comida familiar</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 text-stone-600">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>3:00 PM</span>
            </div>
            <div className="flex items-start justify-center space-x-3 text-stone-600 max-w-xs mx-auto">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-brand-gold" />
              <span className="text-sm">Granja Panchita</span>
            </div>
            <p className="text-xs text-stone-400 italic">
              C. 87 10003, Aeropuerto, Chihuahua, Chihuahua
            </p>
          </div>

          <button 
            onClick={() => openInMaps(28.65237501932628, -105.998217648044)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-dark text-white rounded-full text-sm tracking-widest hover:bg-black transition-colors"
          >
            <span>CÓMO LLEGAR</span>
          </button>
        </div>
      </Section>

      {/* Granja Image */}
      <motion.div 
        {...fadeIn}
        className="max-w-xl mx-auto px-6 mb-12"
      >
        <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <img 
            src="/images/granja.jpg" 
            alt="Granja Panchita" 
            className="w-full h-full object-cover"
            onError={(e) => {
               (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop";
            }}
          />
        </div>
      </motion.div>

      <Divider />

      {/* Confirmation */}
      <Section className="py-20">
        <h2 className="text-3xl mb-4">Confirmación</h2>
        <p className="text-stone-500 mb-10 max-w-xs mx-auto italic">
          Tu presencia nos llenaría de alegría. Por favor, confírmanos antes del 1 de mayo.
        </p>
        
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 px-10 py-5 bg-brand-gold text-white rounded-full text-lg font-serif tracking-widest hover:bg-brand-gold-light shadow-xl shadow-brand-gold/20 transform transition active:scale-95"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span>CONFIRMAR ASISTENCIA</span>
        </a>
      </Section>

      {/* Footer */}
      <footer className="text-center px-6 py-16 space-y-4 border-t border-brand-gold/10">
        <p className="font-serif italic text-xl text-brand-gold">Con cariño, la familia Rojas Hernández</p>
        <p className="text-stone-400 text-sm max-w-xs mx-auto">
          Esperamos contar con tu presencia en este día tan especial
        </p>
        <div className="pt-10 flex flex-col items-center opacity-30">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mb-1" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mb-1" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
        </div>
      </footer>
    </main>
  );
}
