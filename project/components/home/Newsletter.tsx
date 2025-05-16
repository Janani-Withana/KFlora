"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-[#4F7942] text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Mail className="h-12 w-12 mx-auto mb-2 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-semibold">Get Orchid Care Tips & Exclusive Offers</h2>
          <p className="text-white/90 md:text-lg">
            Subscribe to our newsletter and receive seasonal care guides, early access to new arrivals, and special promotions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
            />
            <Button className="bg-white text-[#4F7942] hover:bg-white/90 hover:text-[#4F7942]">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-white/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}