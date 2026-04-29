import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Music, Coffee, Laptop, Sun, Wifi, UtensilsCrossed, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Live Music",
    description:
      "Nikmati alunan musik live setiap malam. Dari jazz yang syahdu hingga akustik yang hangat, setiap kunjungan punya nuansanya sendiri.",
    color: "#c8822a",
    bg: "from-[#c8822a]/15 to-[#c8822a]/5",
    border: "border-[#c8822a]/25",
  },
  {
    icon: Coffee,
    title: "Premium Coffee & Tea",
    description:
      "Dari espresso single origin hingga pilihan teh premium dan dessert lezat — setiap tegukan adalah pengalaman tersendiri.",
    color: "#e4a84b",
    bg: "from-[#e4a84b]/15 to-[#e4a84b]/5",
    border: "border-[#e4a84b]/25",
  },
  {
    icon: Laptop,
    title: "Co-working Friendly",
    description:
      "Koneksi Wi-Fi kencang, stop kontak di setiap meja, dan suasana yang kondusif. Perfect buat WFC (Work From Cafe).",
    color: "#3d6b4f",
    bg: "from-[#3d6b4f]/15 to-[#3d6b4f]/5",
    border: "border-[#3d6b4f]/25",
  },
  {
    icon: Sun,
    title: "Area Outdoor",
    description:
      "Nikmati udara segar di area outdoor kami yang asri. Lampu string yang hangat menciptakan suasana malam yang sempurna.",
    color: "#f0c882",
    bg: "from-[#f0c882]/15 to-[#f0c882]/5",
    border: "border-[#f0c882]/25",
  },
  {
    icon: UtensilsCrossed,
    title: "Late-Night Dining",
    description:
      "Buka hingga larut malam dengan menu lengkap — fast food, dinner, dessert, dan hidangan larut malam tersedia untuk kamu.",
    color: "#c8822a",
    bg: "from-[#c8822a]/15 to-[#c8822a]/5",
    border: "border-[#c8822a]/25",
  },
  {
    icon: Users,
    title: "Group Friendly",
    description:
      "Tempat duduk lapang, cocok untuk nongkrong kelompok, arisan, atau gathering mahasiswa. Reservasi meja tersedia!",
    color: "#e4a84b",
    bg: "from-[#e4a84b]/15 to-[#e4a84b]/5",
    border: "border-[#e4a84b]/25",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description:
      "Internet cepat dan stabil tersedia di seluruh area kafe, memastikan kamu tetap terhubung tanpa gangguan.",
    color: "#3d6b4f",
    bg: "from-[#3d6b4f]/15 to-[#3d6b4f]/5",
    border: "border-[#3d6b4f]/25",
  },
  {
    icon: Leaf,
    title: "Fasilitas Bersih",
    description:
      "Toilet bersih, area meja selalu rapi, dan lingkungan yang nyaman menjadi standar kami untuk setiap pengunjung.",
    color: "#f0c882",
    bg: "from-[#f0c882]/15 to-[#f0c882]/5",
    border: "border-[#f0c882]/25",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  bg,
  border,
  index,
}: (typeof features)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative bg-gradient-to-br ${bg} border ${border} rounded-2xl p-6 hover:scale-[1.03] transition-all duration-400 cursor-default backdrop-blur-sm`}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${color}25, transparent 70%)` }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
          style={{ backgroundColor: `${color}20`, border: `1px solid ${color}40` }}
        >
          <Icon size={22} style={{ color }} />
        </div>

        <h3
          className="text-white font-semibold text-lg mb-2 group-hover:text-[#e4a84b] transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
        <p
          className="text-white/55 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative bg-[#1a0f05] py-24 px-4 sm:px-6 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c8822a]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#3d6b4f]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            Keunggulan Kami
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lebih dari Sekadar{" "}
            <span className="italic text-[#e4a84b]">Kafe</span>
          </h2>
          <p
            className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            RX Cafe and Eatery hadir dengan berbagai fasilitas yang membuatmu betah berlama-lama.
            Dari morning coffee hingga late-night hangout, semua ada di sini.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
