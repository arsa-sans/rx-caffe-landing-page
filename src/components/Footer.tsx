import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Coffee, ExternalLink, CreditCard, Smartphone, Car } from "lucide-react";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const footerLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Fasilitas", href: "#features" },
  { label: "Menu", href: "#menu" },
  { label: "Info & Reservasi", href: "#info" },
];

const paymentMethods = [
  { icon: CreditCard, label: "Debit Card" },
  { icon: Smartphone, label: "NFC / Tap" },
  { icon: Car, label: "Parking" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-[#0d0702] pt-20 pb-8 px-4 sm:px-6 overflow-hidden">
      {/* Top gradient from section above */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8822a]/30 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-[#c8822a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#c8822a] flex items-center justify-center shadow-lg">
                <Coffee size={18} className="text-white" />
              </div>
              <div>
                <div
                  className="text-white font-bold text-lg leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  RX Cafe
                </div>
                <div
                  className="text-white/40 text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  and Eatery
                </div>
              </div>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Nyaman, santai, dan trendi. Tempat terbaik untuk ngopi, WFC, dan nongkrong di Jakarta Pusat.
            </p>

            {/* Social */}
            <a
              href="https://www.instagram.com/rxcafeandeatery?igsh=ZHBkdGg3N3NzMWR4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <InstagramIcon />
              @rxcafeandeatery
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold text-sm tracking-widest uppercase mb-5 text-[#c8822a]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Navigasi
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/50 hover:text-[#e4a84b] text-sm transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#e4a84b] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4
              className="text-white font-semibold text-sm tracking-widest uppercase mb-5 text-[#c8822a]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Lokasi
            </h4>
            <div className="flex gap-3 mb-5">
              <MapPin size={16} className="text-[#c8822a] flex-shrink-0 mt-0.5" />
              <address
                className="text-white/55 text-sm not-italic leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Jl. Letjen Suprapto No.74,
                <br />
                RT.16/RW.5, Cemp. Baru,
                <br />
                Kec. Kemayoran, Kota Jakarta Pusat,
                <br />
                DKI Jakarta 10640
              </address>
            </div>
            <a
              href="https://maps.google.com/?q=Jl.+Letjen+Suprapto+No.74,+Kemayoran,+Jakarta+Pusat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#c8822a] hover:text-[#e4a84b] text-xs font-medium transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <ExternalLink size={12} />
              Buka di Google Maps
            </a>
          </div>

          {/* Payment & Amenities */}
          <div>
            <h4
              className="text-white font-semibold text-sm tracking-widest uppercase mb-5 text-[#c8822a]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Fasilitas
            </h4>
            <div className="space-y-3">
              {paymentMethods.map((pm) => (
                <div
                  key={pm.label}
                  className="flex items-center gap-2.5 text-white/55 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <pm.icon size={13} className="text-[#e4a84b]" />
                  </div>
                  {pm.label}
                </div>
              ))}
            </div>

            <div
              className="mt-6 pt-5 border-t border-white/8"
            >
              <p
                className="text-white/35 text-xs leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                ✅ Reservasi tersedia
                <br />
                🎵 Live music setiap malam
                <br />
                🌿 Area outdoor nyaman
              </p>
            </div>
          </div>
        </motion.div>

        {/* Map embed placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden border border-white/10 mb-12 h-56 sm:h-72"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9!2d106.8574!3d-6.1651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e5e5e5e5e5%3A0x0!2sJl.+Letjen+Suprapto+No.74%2C+Kemayoran%2C+Jakarta+Pusat!5e0!3m2!1sid!2sid!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi RX Cafe and Eatery"
            className="grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
          />
          {/* Map overlay */}
          <div className="absolute inset-0 bg-[#c8822a]/10 pointer-events-none" />

          {/* Map CTA */}
          <div className="absolute bottom-4 left-4">
            <a
              href="https://maps.google.com/?q=Jl.+Letjen+Suprapto+No.74,+Kemayoran,+Jakarta+Pusat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#c8822a] hover:bg-[#e4a84b] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <MapPin size={12} />
              Navigasi ke Sini
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            className="text-white/30 text-xs text-center sm:text-left"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} RX Cafe and Eatery. Semua hak dilindungi.
          </p>
          <p
            className="text-white/30 text-xs text-center sm:text-right"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Jl. Letjen Suprapto No.74, Kemayoran, Jakarta Pusat 10640
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
