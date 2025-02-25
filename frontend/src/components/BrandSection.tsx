import { motion } from "framer-motion";

const brands = [
  "/public/brands/01.png",
  "/public/brands/03.png",
  "/public/brands/02.png",
  "/public/brands/04.svg",
  "/public/brands/05.svg",
  "/public/brands/06.svg",
  "/public/brands/07.svg",
  "/public/brands/08.svg",
  "/public/brands/09.svg",
];

function BrandSection() {
  return (
    <section className="py-24 px-6 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl mb-4">
          Trusted by <span className="italic-text">leading</span> companies
        </h2>
        <motion.div 
          className="brand-grid mt-12 flex gap-8 flex-nowrap whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          style={{ display: "flex" }}
        >
          {brands.concat(brands).map((brand, index) => (
            <motion.img
              key={index}
              src={brand}
              alt="Brand"
              className="opacity-50 hover:opacity-100 transition-opacity mx-4 h-28 w-28 object-contain cursor-pointer"
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BrandSection;