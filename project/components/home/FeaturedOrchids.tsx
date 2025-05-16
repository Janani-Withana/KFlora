"use client";

import { Orchid } from "@/lib/data";
import { OrchidCard } from "@/components/ui/OrchidCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface FeaturedOrchidsProps {
  orchids: Orchid[];
}

export function FeaturedOrchids({ orchids }: FeaturedOrchidsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Filter for featured orchids
  const featuredOrchids = orchids.filter(orchid => orchid.featured);

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#4F7942] text-sm tracking-wider uppercase font-medium">Our Collection</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">Featured Orchids</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and rare orchid varieties, each selected for their stunning blooms and ease of care.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {featuredOrchids.map((orchid) => (
            <motion.div key={orchid.id} variants={item}>
              <OrchidCard orchid={orchid} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button size="lg" className="group">
            View All Orchids
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}