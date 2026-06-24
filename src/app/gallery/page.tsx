"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const categories = [
  "All",
  "School Campus",
  "Classrooms",
  "Events",
  "Sports Day",
  "Labs"
];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", category: "School Campus", alt: "School Building" },
  { id: 2, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", category: "Classrooms", alt: "Students in classroom" },
  { id: 3, src: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=800&auto=format&fit=crop", category: "Events", alt: "Annual Function" },
  { id: 4, src: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=800&auto=format&fit=crop", category: "Sports Day", alt: "Students playing sports" },
  { id: 5, src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop", category: "Labs", alt: "Science Lab" },
  { id: 6, src: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop", category: "Labs", alt: "Computer Lab" },
  { id: 7, src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop", category: "School Campus", alt: "School Library" },
  { id: 8, src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop", category: "Events", alt: "Cultural Activities" },
  { id: 9, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop", category: "School Campus", alt: "Campus view" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white/80 w-12 h-12 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium">{image.alt}</p>
                  <p className="text-primary-foreground text-xs">{image.category}</p>
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
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
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
