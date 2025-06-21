'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { contactInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                KFlora
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Bringing nature&apos;s beauty to your home with carefully curated plants
              and expert care guidance.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href={contactInfo.social.facebook}>
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href={contactInfo.social.instagram}>
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href={contactInfo.social.twitter}>
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/category/orchids"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Indoor Orchids
              </Link>
              <Link
                href="/category/roses"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Roses
              </Link>
              <Link
                href="/category/hoya-tiyara"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Hoya Tiyara
              </Link>
              <Link
                href="/category/anthuriums"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Anthuriums
              </Link>
              <Link
                href="/category/ornamental"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Ornamental Plants
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe to get plant care tips and exclusive offers.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 KFlora. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
            Made with 🌱 for plant lovers
          </p>
        </div>
      </div>
    </footer>
  );
}