'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Mail } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-green-50 dark:bg-green-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-green-200 dark:border-green-800 shadow-lg">
            <CardContent className="p-8 sm:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6"
              >
                <Leaf className="h-8 w-8 text-green-600" />
              </motion.div>

              <h2 
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Stay Rooted with KFlora
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get exclusive plant care tips, seasonal guides, and early access 
                to new arrivals. Join our growing community of plant enthusiasts.
              </p>

              {isSubscribed ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-green-600 font-semibold text-lg"
                >
                  🌱 Thanks for subscribing! Welcome to the KFlora family.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="flex-1"
                    >
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-lg"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 px-8 py-3"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Subscribe
                      </Button>
                    </motion.div>
                  </div>
                </form>
              )}

              <p className="text-sm text-muted-foreground mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}