import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CreditCard, Car, CalendarCheck, Phone, Clock, MapPin, Smartphone, CheckCircle2 } from "lucide-react";

const infoCards = [
  {
    icon: CreditCard,
    title: "Metode Pembayaran",
    color: "#c8822a",
    items: [
      { icon: CreditCard, text: "Kartu Debit / ATM" },
      { icon: Smartphone, text: "NFC / Tap to Pay" },
      { icon: CheckCircle2, text: "Cashless Friendly" },
    ],
    note: "Pembayaran elektronik tersedia untuk kemudahan bertransaksi",
  },
  {
    icon: Car,
    title: "Parkir",
    color: "#3d6b4f",
    items: [
      { icon: Car, text: "Parkir luas tersedia" },
      { icon: CheckCircle2, text: "Motor & Mobil" },
      { icon: MapPin, text: "Parkir berbayar" },
    ],
    note: "Area parkir yang luas memastikan kamu tidak perlu khawatir",
  },
  {
    icon: CalendarCheck,
    title: "Reservasi",
    color: "#e4a84b",
    items: [
      { icon: CalendarCheck, text: "Reservasi meja tersedia" },
      { icon: Phone, text: "Hubungi via DM Instagram" },
      { icon: CheckCircle2, text: "Cocok untuk kelompok" },
    ],
    note: "Reservasi lebih awal untuk memastikan tempat favoritmu",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    color: "#f0c882",
    items: [
      { icon: Clock, text: "Buka setiap hari" },
      { icon: CheckCircle2, text: "Siang hingga larut malam" },
      { icon: CheckCircle2, text: "Live music di malam hari" },
    ],
    note: "Cek Instagram untuk update jam operasional terbaru",
  },
];

function InfoCard({
  icon: Icon,
  title,
  color,
  items,
  note,
  index,
}: (typeof infoCards)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 45 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-[#1a0f05] border border-white/8 rounded-2xl p-6 hover:border-white/20 transition-all duration-400 overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at top left, ${color}15, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
          style={{ backgroundColor: `${color}20`, border: `1px solid ${color}35` }}
        >
          <Icon size={22} style={{ color }} />
        </div>

        <h3
          className="text-white font-bold text-lg mb-4 group-hover:text-[#e4a84b] transition-colors"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>

        <ul className="space-y-3 mb-4">
          {items.map((item) => (
            <li
              key={item.text}
              className="flex items-center gap-2.5 text-white/65 text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <item.icon size={14} style={{ color, flexShrink: 0 }} />
              {item.text}
            </li>
          ))}
        </ul>

        <p
          className="text-white/35 text-xs leading-relaxed pt-4 border-t border-white/8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {note}
        </p>
      </div>
    </motion.div>
  );
}

export default function Info() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="info" className="relative bg-[#120a03] py-24 px-4 sm:px-6 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#c8822a]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-[#c8822a] text-xs tracking-[0.3em] uppercase font-medium mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Informasi Pengunjung
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Semua yang Kamu Perlu{" "}
            <span className="italic text-[#e4a84b]">Tahu</span>
          </h2>
          <p
            className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Informasi lengkap sebelum berkunjung ke RX Cafe and Eatery agar
            pengalamanmu semakin nyaman dan menyenangkan.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {infoCards.map((card, i) => (
            <InfoCard key={card.title} {...card} index={i} />
          ))}
        </div>

        {/* Reservasi CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#c8822a] via-[#a66820] to-[#5c3d1e]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#e4a84b]/20 to-transparent" />

          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-black/20 blur-xl" />

          <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-white font-bold text-2xl sm:text-3xl mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Siap untuk Berkunjung?
              </h3>
              <p
                className="text-white/75 text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Reservasi meja sekarang dan pastikan tempatmu sudah tersedia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://www.instagram.com/rxcafeandeatery?igsh=ZHBkdGg3N3NzMWR4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-[#c8822a] font-semibold px-6 py-3 rounded-full hover:bg-[#fdf6ec] transition-all duration-300 hover:scale-105 shadow-xl text-sm whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <CalendarCheck size={16} />
                Reservasi via Instagram
              </a>
              <a
                href="https://maps.app.goo.gl/examplemap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <MapPin size={16} />
                Lihat di Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
