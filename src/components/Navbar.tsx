import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Fasilitas", href: "#features" },
  { label: "Tentang", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Info", href: "#info" },
  { label: "Kontak", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1a0f05]/95 backdrop-blur-md shadow-2xl shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-2 group"
          >
            <img
              src="/images/logo.jpg"
              alt="RX Logo"
              className="w-9 h-9 rounded-full object-contain bg-black shadow-lg border border-[#e4a84b]/30 p-0.5"
            />
            <span
              className="font-playfair text-white font-bold text-lg tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              RX Cafe
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-white/80 hover:text-[#e4a84b] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#e4a84b] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#info"
            onClick={(e) => { e.preventDefault(); handleNavClick("#info"); }}
            className="hidden md:inline-flex items-center gap-2 bg-[#c8822a] hover:bg-[#e4a84b] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#c8822a]/40 hover:scale-105"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reservasi Meja
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#1a0f05]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-4 text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-2 mb-6">
              <img
                src="/images/logo.jpg"
                alt="RX Logo"
                className="w-10 h-10 rounded-full object-contain bg-black border border-[#e4a84b]/30 p-0.5"
              />
              <span
                className="font-playfair text-white font-bold text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                RX Cafe and Eatery
              </span>
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-white/80 hover:text-[#e4a84b] text-2xl font-medium tracking-wide transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#info"
              onClick={(e) => { e.preventDefault(); handleNavClick("#info"); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 bg-[#c8822a] hover:bg-[#e4a84b] text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-xl"
            >
              Reservasi Meja
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
