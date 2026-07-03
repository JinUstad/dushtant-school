"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const categories = [
  "All",
  "School Campus",
  "Classrooms",
];

const galleryImages = [
  { id: 1, src: "/1.jpeg", category: "School Campus", alt: "School Building" },
  { id: 2, src: "/2.jpg", category: "Classrooms", alt: "Students in classroom" },
  { id: 3, src: "/3.jpg", category: "Events", alt: "Annual Function" },
  { id: 5, src: "/5.jpg", category: "Labs", alt: "Science Lab" },
  { id: 6, src: "/6.jpg", category: "Labs", alt: "Computer Lab" },
  { id: 7, src: "/7.jpg", category: "School Campus", alt: "School Library" },
  { id: 8, src: "/8.jpg", category: "Events", alt: "Cultural Activities" },
  { id: 9, src: "/9.jpg", category: "School Campus", alt: "Campus view" },
  { id: 10, src: "/10.jpg", category: "Classrooms", alt: "Students focused in class" },
  { id: 11, src: "/11.jpg", category: "Events", alt: "Auditorium event" },
  { id: 12, src: "/12.jpg", category: "Sports Day", alt: "Track and field" },
  { id: 13, src: "/13.jpg", category: "Labs", alt: "Physics Lab" },
  { id: 14, src: "/14.jpg", category: "School Campus", alt: "Play area" },
  { id: 15, src: "/15.jpg", category: "School Campus", alt: "Play area" },
  { id: 16, src: "/16.jpg", category: "School Campus", alt: "Play area" },

];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 pb-20">
      {/* Page Header */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto">
              Glimpses of vibrant life and learning at Dr.Ambedkar Modern Public School.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filters */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white/80 w-12 h-12 transform scale-50 lg:group-hover:scale-100 transition-transform duration-300 hidden lg:block" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No images found for this category.
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 bg-black/50 rounded-full z-10"
              onClick={handlePrev}
            >
              <ChevronLeft size={36} />
            </button>

            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 bg-black/50 rounded-full z-10"
              onClick={handleNext}
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              key={selectedIndex}
              className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedIndex].src}
                alt={filteredImages[selectedIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
