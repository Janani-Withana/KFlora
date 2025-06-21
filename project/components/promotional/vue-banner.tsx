'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VuePromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentOffer, setCurrentOffer] = useState(0);
  
  const offers = [
    {
      title: "🌸 Spring Sale",
      description: "30% off all flowering plants",
      code: "SPRING30",
      bgColor: "from-pink-500 to-rose-500"
    },
    {
      title: "🌿 New Plant Parent",
      description: "Free care guide with first purchase",
      code: "NEWBIE",
      bgColor: "from-green-500 to-emerald-500"
    },
    {
      title: "🎁 Bundle Deal",
      description: "Buy 3 plants, get 1 free",
      code: "BUNDLE",
      bgColor: "from-purple-500 to-indigo-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [offers.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="fixed top-16 left-0 right-0 z-40"
      >
        <div className={`bg-gradient-to-r ${offers[currentOffer].bgColor} text-white py-3 px-4 shadow-lg`}>
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <Gift className="h-5 w-5 animate-bounce" />
              <div className="flex-1">
                <motion.div
                  key={currentOffer}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center space-x-4"
                >
                  <span className="font-semibold">{offers[currentOffer].title}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{offers[currentOffer].description}</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-xs font-mono">
                    {offers[currentOffer].code}
                  </span>
                </motion.div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 hidden sm:inline-flex"
              >
                Shop Now
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}