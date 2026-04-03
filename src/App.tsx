/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  MapPin,
  Clock,
  Menu as MenuIcon,
  X,
  Globe,
  Utensils,
  ShieldCheck,
  IndianRupee,
  ChevronRight,
  Instagram,
  Facebook,
  MessageCircle,
  Maximize2
} from 'lucide-react';
import { translations, Language, MenuItem } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('mr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const t = translations[lang];

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openDirections = () => {
    const url = "https://maps.app.goo.gl/JCwEk1Q3asCmoqo18";
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-saffron selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 px-4 py-3 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo('home')}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-saffron shadow-[0_0_15px_rgba(255,153,51,0.5)]">
              <img src="/logo.png" alt="Jai Bhavani Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-extrabold font-display tracking-tight text-gold">
              {t.hero.title}
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className={`text-sm font-medium transition-colors hover:text-saffron ${activeSection === key ? 'text-saffron' : 'text-white/70'}`}
              >
                {label}
              </button>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/10">
              {(['mr', 'hi', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === l ? 'bg-saffron text-black' : 'text-white/50 hover:text-white'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
              {(['mr', 'hi', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${lang === l ? 'bg-saffron text-black' : 'text-white/50'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="text-2xl font-bold text-left border-b border-white/10 pb-4"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-red-950/80 to-black z-10" />
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 0.2 }}
            transition={{ duration: 2 }}
            src="/images/special_poster.png"
            alt="Dhaba Background"
            className="w-full h-full object-cover blur-2xl grayscale-[50%] brightness-50"
          />
          {/* Particles/Glow effect */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-saffron/20 blur-[200px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-deep-red/10 blur-[150px] rounded-full animate-pulse delay-1000" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-saffron font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
              {t.hero.tagline}
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-display mb-8 text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
              {t.hero.title}
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('menu')}
                className="w-full sm:w-auto px-8 py-4 bg-saffron text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,153,51,0.4)] hover:shadow-[0_0_30px_rgba(255,153,51,0.6)] transition-all flex items-center justify-center gap-2"
              >
                <Utensils size={20} />
                {t.hero.cta_menu}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openDirections}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <MapPin size={20} />
                {t.hero.cta_directions}
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Poster Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative group w-full"
          >
            <div className="absolute inset-0 bg-saffron/20 blur-[100px] rounded-full group-hover:bg-saffron/30 transition-all" />
            <img
              src="/images/special_poster.png"
              alt="Special Chicken Thali"
              className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transform hover:scale-[1.02] transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
          onClick={() => scrollTo('highlights')}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-saffron rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-20 bg-black px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Utensils className="text-saffron" size={32} />, title: t.highlights.taste, desc: t.about.quote },
            { icon: <ShieldCheck className="text-saffron" size={32} />, title: t.highlights.hygiene, desc: "FSSAI Certified & Clean" },
            { icon: <IndianRupee className="text-saffron" size={32} />, title: t.highlights.affordable, desc: "Best value for money" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-saffron/30 transition-all group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2 font-display">{item.title}</h3>
              <p className="text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-zinc-950 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold font-display mb-4">{t.menu.title}</h2>
            <div className="w-24 h-1 bg-saffron mx-auto rounded-full" />
          </div>

          <div className="space-y-16">
            {/* Thali Specials (Featured) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {t.menu.categories.nonveg_thali.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl overflow-hidden group border border-saffron/30 bg-zinc-900 flex flex-col md:flex-row h-full min-h-[300px]"
                >
                  <div className="w-full md:w-1/2 overflow-hidden h-64 md:h-auto">
                    <img
                      src={idx === 0 ? "/images/mutton_thali.png" : "/images/special_poster.png"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <span className="bg-deep-red text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-widest">
                      {t.menu.todays_special}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 font-display text-saffron">{item.name}</h3>
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">{item.desc}</p>
                    <p className="text-gold text-3xl font-bold">₹{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: t.menu.veg_title, items: t.menu.categories.veg },
                { title: t.menu.nonveg_title, items: t.menu.categories.nonveg },
                { title: t.menu.starters_title, items: t.menu.categories.starters },
                { title: t.menu.rice_title, items: t.menu.categories.rice },
                { title: t.menu.breads_title, items: t.menu.categories.breads }
              ].map((category, catIdx) => (
                <div key={catIdx} className="space-y-6">
                  <h3 className="text-2xl font-bold font-display text-saffron border-l-4 border-saffron pl-4">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIdx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex justify-between items-start p-4 glass-card rounded-2xl border border-white/5 hover:border-saffron/20 transition-all group gap-4"
                      >
                        <div className="flex-1">
                          <h4 className="text-lg font-bold group-hover:text-saffron transition-colors">{item.name}</h4>
                          <p className="text-xs text-white/50">{item.desc}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-gold font-bold">₹{item.price}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-saffron rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-saffron rounded-br-3xl" />
            <img
              src="/images/banner.png"
              alt="Tradition"
              className="rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold font-display mb-6">{t.about.title}</h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              {t.about.story}
            </p>
            <div className="p-6 bg-saffron/10 border-l-4 border-saffron rounded-r-2xl italic text-xl text-saffron font-display">
              "{t.about.quote}"
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-zinc-950 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold font-display mb-4">{t.nav.gallery}</h2>
            <div className="w-24 h-1 bg-saffron mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/paneer_tikka.png', alt: 'Paneer Tikka' },
              { src: '/images/butter_chicken.png', alt: 'Butter Chicken' },
              { src: '/images/veg_thali_premium.png', alt: 'Premium Veg Thali' },
              { src: '/images/fish_fry.png', alt: 'Premium Fish Fry' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group border border-white/10"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-saffron text-black flex items-center justify-center">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold font-display mb-8">{t.contact.title}</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Address</h4>
                    <p className="text-white/60">{t.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Phone</h4>
                    <a href={`tel:${t.contact.phone}`} className="text-white/60 hover:text-saffron transition-colors">
                      {t.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Timing</h4>
                    <p className="text-white/60">{t.contact.timing}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a 
                  href="https://www.instagram.com/hotel_jaybhavani_pingali_bk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-saffron hover:text-black transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-saffron hover:text-black transition-all">
                  <Facebook size={20} />
                </a>
                <a href="tel:7219638983" className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-saffron hover:text-black transition-all">
                  <Phone size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-3xl overflow-hidden glass-card border border-white/10"
            >
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center p-8 text-center">
                <MapPin size={48} className="text-saffron mb-4 animate-bounce" />
                <p className="text-white/50 mb-6">Dhaiwadi, Satara, Maharashtra 415508</p>
                <button onClick={openDirections} className="px-8 py-3 bg-saffron text-black font-bold rounded-full">
                  {t.contact.get_directions}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-white/5 px-4 pb-32 md:pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-display text-gold mb-2">{t.hero.title}</h3>
            <p className="text-white/40 text-sm">{t.footer.tagline}</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/40 text-sm">© 2026 {t.hero.title}. {t.footer.rights}.</p>
            <p className="text-white/20 text-[10px] mt-1 uppercase tracking-widest">Designed for Strength & Taste</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="tel:7219638983"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-saffron text-black rounded-full flex items-center justify-center shadow-lg shadow-saffron/30 md:bottom-8"
      >
        <Phone size={28} />
      </motion.a>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-card border-t border-white/10 flex justify-around items-center py-3 px-4">
        <a href={`tel:${t.contact.phone}`} className="flex flex-col items-center gap-1 text-white/70 hover:text-saffron">
          <Phone size={20} />
          <span className="text-[10px] font-bold uppercase">{t.sticky.call}</span>
        </a>
        <button onClick={openDirections} className="flex flex-col items-center gap-1 text-white/70 hover:text-saffron">
          <MapPin size={20} />
          <span className="text-[10px] font-bold uppercase">{t.sticky.directions}</span>
        </button>
        <a href="tel:7219638983" className="flex flex-col items-center gap-1 text-white/70 hover:text-saffron">
          <Phone size={20} />
          <span className="text-[10px] font-bold uppercase">{t.sticky.call}</span>
        </a>
        <button onClick={() => scrollTo('menu')} className="flex flex-col items-center gap-1 text-white/70 hover:text-saffron">
          <MenuIcon size={20} />
          <span className="text-[10px] font-bold uppercase">{t.nav.menu}</span>
        </button>
      </div>
    </div>
  );
}
