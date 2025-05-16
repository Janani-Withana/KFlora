"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Discover the Timeless Beauty of Premium Orchids
            </motion.h1>
            
            <motion.p variants={item} className="text-lg md:text-xl text-white/90 max-w-xl">
              Curated collections of rare and exotic orchids, delivered to your doorstep with expert care guides.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#4F7942] hover:bg-[#3D5D33] text-white">
                Shop Collection
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                Care Guides
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-9 border-2 border-white/60 rounded-full flex justify-center pt-1"
        >
          <motion.div 
            animate={{ height: [5, 8, 5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 bg-white/60 rounded-full"
          />
        </motion.div>
        <span className="text-white/70 text-xs mt-2">Scroll</span>
      </div>
    </section>
  );
}