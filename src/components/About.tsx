import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Users, Star } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    label: "Mahasiswa",
    desc: "Kerjain tugas sambil ngopi, atau istirahat sejenak dari kuliah.",
  },
  {
    icon: Briefcase,
    label: "WFC (Work From Cafe)",
    desc: "Produktif dengan suasana nyaman, Wi-Fi cepat, dan kopi yang selalu siap.",
  },
  {
    icon: Users,
    label: "Nongkrong Kelompok",
    desc: "Tempat yang pas untuk kumpul bareng teman, keluarga, atau komunitas.",
  },
  {
    icon: Star,
    label: "Solo Dining",
    desc: "Nyaman meski datang sendiri. Makan, nikmati musik, dan relaksasi.",
  },
];

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div
        className="text-3xl sm:text-4xl font-bold text-[#e4a84b] mb-1"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {number}
      </div>
      <div
        className="text-white/55 text-sm"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imgInView = useInView(imgRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative bg-[#120a03] py-24 px-4 sm:px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#c8822a]/6 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3d6b4f]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -60 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/60 aspect-[4/5]">
              <img
                src="/images/about-bg.jpg"
                alt="Suasana RX Cafe and Eatery"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#c8822a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star size={18} className="text-white fill-white" />
                  </div>
                  <div>
                    <div
                      className="text-white font-semibold text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Favorit Pengunjung
                    </div>
                    <div
                      className="text-white/60 text-xs"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Live music & kopi terbaik Jakarta Pusat
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative frame accent */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border-2 border-[#c8822a]/25 rounded-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border border-[#e4a84b]/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-block text-[#c8822a] text-xs tracking-[0.3em] uppercase font-medium mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Tentang Kami
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lebih dari Sekadar
              <br />
              <span className="italic text-[#e4a84b]">Tempat Minum Kopi</span>
            </h2>

            <p
              className="text-white/65 text-base sm:text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              RX Cafe and Eatery adalah oasis ketenangan di tengah hiruk-pikuk
              Jakarta. Kami hadir untuk siapa saja yang ingin merasakan momen
              istimewa — entah itu mengerjakan tugas, rapat santai, atau sekadar
              menikmati malam bersama orang terkasih.
            </p>

            <p
              className="text-white/65 text-base leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Dengan atmosfer yang hangat, live music yang mengalun setiap malam,
              dan pilihan menu yang beragam mulai dari kopi spesial hingga
              late-night bites, RX Cafe adalah tempat di mana setiap momen
              terasa sempurna.
            </p>

            {/* Who we serve */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {audiences.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#c8822a]/15 border border-[#c8822a]/25 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#c8822a]/25 transition-colors">
                    <item.icon size={16} className="text-[#e4a84b]" />
                  </div>
                  <div>
                    <div
                      className="text-white font-semibold text-sm mb-0.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-white/50 text-xs leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <StatItem number="24/7" label="Buka Setiap Hari" />
              <StatItem number="∞" label="Vibe & Suasana" />
              <StatItem number="⭐ 4.8" label="Rating Pelanggan" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
