"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="py-24 bg-[#F7F9F7]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div 
            className="relative h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="https://images.pexels.com/photos/1416861/pexels-photo-1416861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Orchid nursery"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-4xl font-bold text-[#4F7942] mb-2">15+</p>
              <p className="text-muted-foreground">Years of experience cultivating rare orchid varieties</p>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <span className="text-[#4F7942] text-sm tracking-wider uppercase font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4">
                Passionate About Cultivating Beauty Since 2010
              </h2>
            </div>
            
            <p className="text-muted-foreground">
              What began as a small family greenhouse has blossomed into one of the country's premier orchid nurseries. 
              We specialize in rare and exotic orchid varieties, each cultivated with meticulous care and expertise.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">Expert Cultivation</h3>
                <p className="text-muted-foreground text-sm">
                  All our orchids are greenhouse-grown under optimal conditions by experienced horticulturists.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">Sustainable Practices</h3>
                <p className="text-muted-foreground text-sm">
                  We use organic growing methods and eco-friendly packaging to minimize environmental impact.
                </p>
              </div>
            </div>
            
            <Button className="mt-8">Learn More About Us</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}