import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coffee, Utensils, IceCream, Sandwich, Leaf, Flame } from "lucide-react";

type MenuItem = { name: string; price: string };

type Category = {
  icon: typeof Coffee;
  title: string;
  subtitle: string;
  image: string | null;
  color: string;
  gradient: string;
  bg: string;
  items: MenuItem[];
};

const beverageCategories: Category[] = [
  {
    icon: Coffee,
    title: "Manual Brew",
    subtitle: "Seduhan Manual",
    image: "/images/menu/espresso.png",
    color: "#c8822a",
    gradient: "from-[#c8822a] to-[#e4a84b]",
    bg: "from-[#c8822a]/10 to-transparent",
    items: [
      { name: "V60", price: "18K" },
      { name: "French Press", price: "20K" },
      { name: "Tubruk", price: "8K" },
    ],
  },
  {
    icon: Coffee,
    title: "Espresso Based",
    subtitle: "Hot & Iced",
    image: "/images/menu/cappuccino.png",
    color: "#a66820",
    gradient: "from-[#a66820] to-[#c8822a]",
    bg: "from-[#a66820]/10 to-transparent",
    items: [
      { name: "Espresso", price: "12K" },
      { name: "Americano (H/I)", price: "15K / 18K" },
      { name: "Cafe Latte (H/I)", price: "20K / 22K" },
      { name: "Cappuccino (H/I)", price: "20K / 22K" },
      { name: "Mochaccino (H/I)", price: "22K / 25K" },
      { name: "Caramel Latte (H/I)", price: "25K / 28K" },
      { name: "Hazelnut Latte (H/I)", price: "25K / 28K" },
    ],
  },
  {
    icon: IceCream,
    title: "Non Coffee",
    subtitle: "Tanpa Kopi",
    image: "/images/menu/caramel-latte.png",
    color: "#8b4585",
    gradient: "from-[#8b4585] to-[#c86ba8]",
    bg: "from-[#8b4585]/10 to-transparent",
    items: [
      { name: "Chocolate (H/I)", price: "18K / 20K" },
      { name: "Matcha Latte (H/I)", price: "20K / 22K" },
      { name: "Red Velvet (H/I)", price: "20K / 22K" },
      { name: "Taro (H/I)", price: "18K / 20K" },
      { name: "Cookies & Cream", price: "22K" },
    ],
  },
  {
    icon: Leaf,
    title: "Teh & Lainnya",
    subtitle: "Tea & Others",
    image: "/images/menu/teh-tarik.png",
    color: "#3d6b4f",
    gradient: "from-[#3d6b4f] to-[#5a9e70]",
    bg: "from-[#3d6b4f]/10 to-transparent",
    items: [
      { name: "Original Tea (H/I)", price: "8K / 10K" },
      { name: "Lemon Tea (H/I)", price: "10K / 12K" },
      { name: "Lychee Tea", price: "15K" },
      { name: "Peach Tea", price: "15K" },
      { name: "Air Mineral", price: "5K" },
      { name: "Soda Gembira", price: "12K" },
    ],
  },
];

const foodCategories: Category[] = [
  {
    icon: Sandwich,
    title: "Snack",
    subtitle: "Camilan",
    image: "/images/menu/snack.png",
    color: "#e4a84b",
    gradient: "from-[#e4a84b] to-[#f0c882]",
    bg: "from-[#e4a84b]/10 to-transparent",
    items: [
      { name: "French Fries", price: "15K" },
      { name: "Chicken Wings", price: "18K" },
      { name: "Cireng", price: "10K" },
      { name: "Roti Bakar", price: "12K" },
      { name: "Pisang Bakar", price: "12K" },
      { name: "Dimsum", price: "15K" },
    ],
  },
  {
    icon: Utensils,
    title: "Nasi & Mie",
    subtitle: "Rice & Noodle",
    image: "/images/menu/nasi-mie.png",
    color: "#c8822a",
    gradient: "from-[#c8822a] to-[#a66820]",
    bg: "from-[#c8822a]/10 to-transparent",
    items: [
      { name: "Nasi Goreng", price: "20K" },
      { name: "Nasi Goreng Seafood", price: "25K" },
      { name: "Nasi Goreng Kampung", price: "20K" },
      { name: "Mie Goreng", price: "18K" },
      { name: "Indomie Goreng / Kuah", price: "12K" },
      { name: "Indomie Telur", price: "15K" },
    ],
  },
  {
    icon: Flame,
    title: "Main Course",
    subtitle: "Hidangan Utama",
    image: "/images/menu/main-course.png",
    color: "#8b3a3a",
    gradient: "from-[#8b3a3a] to-[#c85a5a]",
    bg: "from-[#8b3a3a]/10 to-transparent",
    items: [
      { name: "Chicken Steak", price: "25K" },
      { name: "Chicken Katsu", price: "22K" },
      { name: "Beef Steak", price: "35K" },
    ],
  },
];

function CategoryCard({
  cat,
  index,
}: {
  cat: Category;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = cat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative bg-gradient-to-br ${cat.bg} border border-white/8 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-400`}
    >
      {/* Category Image or Gradient Header */}
      {cat.image ? (
        <div className="relative h-36 overflow-hidden">
          <img
            src={cat.image}
            alt={cat.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f05] via-[#1a0f05]/60 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
            >
              <Icon size={16} className="text-white" />
            </div>
            <div>
              <h3
                className="text-white font-bold text-sm"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {cat.title}
              </h3>
              <p
                className="text-white/50 text-xs"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {cat.subtitle}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="relative h-28 overflow-hidden flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${cat.color}25, transparent 60%)`,
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute -right-6 -top-6 w-32 h-32 rounded-full"
              style={{ background: `radial-gradient(circle, ${cat.color}40, transparent 70%)` }}
            />
          </div>
          <div className="relative flex items-center gap-3 px-5">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
            >
              <Icon size={22} className="text-white" />
            </div>
            <div>
              <h3
                className="text-white font-bold text-base"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {cat.title}
              </h3>
              <p
                className="text-white/40 text-xs"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {cat.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${cat.color}12, transparent 60%)`,
        }}
      />

      {/* Items with prices */}
      <div className="relative z-10 p-5 pt-4">
        <div
          className="h-px mb-4 rounded-full"
          style={{ background: `linear-gradient(to right, ${cat.color}40, transparent)` }}
        />
        <ul className="space-y-2">
          {cat.items.map((item) => (
            <li
              key={item.name}
              className="flex items-baseline justify-between gap-2 text-sm group-hover:text-white/80 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="flex items-center gap-2 text-white/60 min-w-0">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="truncate">{item.name}</span>
              </span>
              <span className="flex-shrink-0 border-b border-dotted border-white/15 flex-1 mx-1 mb-1" />
              <span
                className="font-semibold text-xs tracking-wide flex-shrink-0"
                style={{ color: cat.color }}
              >
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<"beverage" | "food">("beverage");

  const currentCategories =
    activeTab === "beverage" ? beverageCategories : foodCategories;

  return (
    <section id="menu" className="relative bg-[#1a0f05] py-24 px-4 sm:px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#c8822a]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#3d6b4f]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-[#c8822a] text-xs tracking-[0.3em] uppercase font-medium mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Menu & Harga
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Apa yang Kami{" "}
            <span className="italic text-[#e4a84b]">Sajikan</span>
          </h2>
          <p
            className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Dari sarapan hingga larut malam — menu kami dirancang untuk menemani
            setiap momen istimewamu bersama orang-orang terkasih.
          </p>
        </motion.div>

        {/* Beverage / Food Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1">
            <button
              onClick={() => setActiveTab("beverage")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "beverage"
                  ? "bg-[#c8822a] text-white shadow-lg shadow-[#c8822a]/30"
                  : "text-white/50 hover:text-white/80"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Coffee size={16} />
              Beverage
            </button>
            <button
              onClick={() => setActiveTab("food")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "food"
                  ? "bg-[#c8822a] text-white shadow-lg shadow-[#c8822a]/30"
                  : "text-white/50 hover:text-white/80"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Utensils size={16} />
              Food
            </button>
          </div>
        </motion.div>

        {/* Service badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { label: "🍽️ Dine-in", desc: "Makan di Tempat" },
            { label: "🛍️ Takeaway", desc: "Bawa Pulang" },
            { label: "📲 Order di Meja", desc: "Pesan Langsung" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 hover:border-[#c8822a]/40 hover:bg-[#c8822a]/10 transition-all duration-300"
            >
              <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                {s.label}
              </span>
              <span className="text-white/40 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                · {s.desc}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Categories grid */}
        <div
          className={`grid gap-5 ${
            activeTab === "beverage"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {currentCategories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>

        {/* Price note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12"
        >
          <p
            className="text-white/40 text-sm mb-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            H = Hot · I = Iced · Harga dalam Rupiah (x1.000)
          </p>
          <p
            className="text-white/30 text-xs mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Menu & harga dapat berubah sewaktu-waktu
          </p>
          <a
            href="https://www.instagram.com/rxcafeandeatery?igsh=ZHBkdGg3N3NzMWR4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#c8822a] hover:text-[#e4a84b] text-sm font-medium transition-colors duration-300 border-b border-[#c8822a]/40 hover:border-[#e4a84b] pb-0.5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Cek update menu terbaru di Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
