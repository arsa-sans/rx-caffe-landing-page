import { motion } from "framer-motion";
import { CalendarCheck, BookOpen } from "lucide-react";

function AnimatedItem({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b2310]/50 via-transparent to-[#3b2310]/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <AnimatedItem delay={0.1}>
          <div
            className="inline-flex items-center gap-2 bg-[#c8822a]/20 border border-[#c8822a]/40 backdrop-blur-sm text-[#f0c882] text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-5 py-2 rounded-full mb-3 mt-20"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 bg-[#e4a84b] rounded-full animate-pulse" />
            Kemayoran, Jakarta Pusat
          </div>
        </AnimatedItem>

        {/* Logo + Main Title side by side */}
        <AnimatedItem delay={0.2}>
          <div className="flex items-center justify-center gap-5 sm:gap-8 mb-4">
            {/* Logo */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-[#e4a84b]/20 rounded-full blur-2xl scale-125 animate-pulse" />
              <img
                src="/images/logo.jpg"
                alt="RX Coffee and Eatery Logo"
                className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full object-contain bg-black border-2 border-[#e4a84b]/40 shadow-2xl shadow-[#c8822a]/30 p-1"
              />
            </div>
            {/* Title */}
            <h1
              className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight text-left"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              RX{" "}
              <span className="italic text-[#e4a84b]">Cafe</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white/90">
                and Eatery
              </span>
            </h1>
          </div>
        </AnimatedItem>

        {/* Divider */}
        <AnimatedItem delay={0.35}>
          <div className="flex items-center justify-center gap-4 my-1">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#e4a84b]/60" />
            <span className="text-[#e4a84b] text-lg">✦</span>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#e4a84b]/60" />
          </div>
        </AnimatedItem>

        {/* Tagline */}
        <AnimatedItem delay={0.45}>
          <p
            className="text-xl sm:text-2xl lg:text-3xl text-white/85 font-light tracking-wide mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nyaman, Santai,{" "}
            <span className="italic text-[#f0c882]">&amp; Trendi</span>
          </p>
        </AnimatedItem>

        <AnimatedItem delay={0.55}>
          <p
            className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Tempatmu untuk kerja bareng, nongkrong asik, menikmati kopi premium,
            dan alunan live music setiap malamnya.
          </p>
        </AnimatedItem>

        {/* CTA Buttons */}
        <AnimatedItem delay={0.65}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => handleScroll("#info")}
              className="group flex items-center gap-2.5 bg-[#c8822a] hover:bg-[#e4a84b] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-2xl shadow-[#c8822a]/30 hover:shadow-[#e4a84b]/40 hover:scale-105 text-base w-full sm:w-auto justify-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <CalendarCheck size={18} />
              Reservasi Meja
            </button>
            <button
              onClick={() => handleScroll("#menu")}
              className="group flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-[#e4a84b]/60 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm text-base w-full sm:w-auto justify-center hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <BookOpen size={18} />
              Lihat Menu
            </button>
          </div>
        </AnimatedItem>

        {/* Instagram Quick Link */}
        <AnimatedItem delay={0.75}>
          <a
            href="https://www.instagram.com/rxcafeandeatery?igsh=ZHBkdGg3N3NzMWR4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#e4a84b] text-sm transition-colors duration-300 group"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {/* Instagram SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            @rxcafeandeatery
          </a>
        </AnimatedItem>
      </div>

      {/* Bottom gradient bleed */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a0f05] to-transparent pointer-events-none" />
    </section>
  );
}
