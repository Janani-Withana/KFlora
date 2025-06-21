'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Grid, ArrowRight } from 'lucide-react';
import { categories } from '@/lib/data';
import { CategoryOrchids, } from '@/assets';

export default function CategoriesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [viewMode, setViewMode] = useState<'featured' | 'all'>('featured');
  
  const categoriesPerPage = 6;
  const totalPages = Math.ceil(categories.length / categoriesPerPage);
  
  // Featured categories (first 3)
  const featuredCategories = categories.slice(0, 3);
  
  // Current page categories for pagination
  const currentCategories = categories.slice(
    currentPage * categoriesPerPage,
    (currentPage + 1) * categoriesPerPage
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="categories" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Plant Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our diverse collection of plants, each carefully selected 
            for their beauty and quality.
          </p>

          {/* View Mode Toggle */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button
              variant={viewMode === 'featured' ? 'default' : 'outline'}
              onClick={() => setViewMode('featured')}
              className="rounded-full"
            >
              Featured Categories
            </Button>
            <Button
              variant={viewMode === 'all' ? 'default' : 'outline'}
              onClick={() => setViewMode('all')}
              className="rounded-full"
            >
              <Grid className="h-4 w-4 mr-2" />
              All Categories
            </Button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === 'featured' ? (
            // Featured Categories View
            <motion.div
              key="featured"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-8"
            >
              {/* Hero Featured Category */}
              <motion.div variants={itemVariants}>
                <Link href={`/category/${featuredCategories[0]?.slug}`}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 relative">
                    <div className="relative h-80 lg:h-96 overflow-hidden">
                      <Image
                        src={featuredCategories[0]?.image}
                        alt={featuredCategories[0]?.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                      <div className="absolute inset-0 flex items-center">
                        <div className="p-8 lg:p-12 text-white max-w-2xl">
                          <Badge className="mb-4 bg-green-600 hover:bg-green-700">
                            Featured Category
                          </Badge>
                          <h3 className="text-3xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {featuredCategories[0]?.name}
                          </h3>
                          <p className="text-lg lg:text-xl text-gray-200 mb-6">
                            {featuredCategories[0]?.description}
                          </p>
                          <div className="flex items-center text-green-400 font-semibold">
                            <span>{featuredCategories[0]?.plantCount} plants available</span>
                            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>

              {/* Secondary Featured Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredCategories.slice(1, 3).map((category, index) => (
                  <motion.div key={category.id} variants={itemVariants}>
                    <Link href={`/category/${category.slug}`}>
                      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white text-xl font-bold mb-1">
                              {category.name}
                            </h3>
                            <p className="text-gray-200 text-sm mb-2">
                              {category.description}
                            </p>
                            <p className="text-green-400 text-sm font-medium">
                              {category.plantCount} plants available
                            </p>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Quick Access to All Categories */}
              <motion.div variants={itemVariants} className="text-center pt-8">
                <Button
                  onClick={() => setViewMode('all')}
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  Explore All {categories.length} Categories
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            // All Categories View with Pagination
            <motion.div
              key="all"
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-8"
            >
              {/* Categories Grid with Pagination */}
              <div className="relative">
                <AnimatePresence mode="wait" custom={1}>
                  <motion.div
                    key={currentPage}
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {currentCategories.map((category, index) => (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link href={`/category/${category.slug}`}>
                          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-3 left-3 right-3">
                                <h3 className="text-white text-lg font-bold mb-1">
                                  {category.name}
                                </h3>
                                <p className="text-gray-200 text-xs mb-1 line-clamp-2">
                                  {category.description}
                                </p>
                                <p className="text-green-400 text-xs font-medium">
                                  {category.plantCount} plants
                                </p>
                              </div>
                            </div>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentPage 
                            ? 'bg-green-600 scale-125' 
                            : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextPage}
                    disabled={currentPage === totalPages - 1}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* Page Info */}
              <div className="text-center text-muted-foreground text-sm">
                Showing {currentPage * categoriesPerPage + 1} - {Math.min((currentPage + 1) * categoriesPerPage, categories.length)} of {categories.length} categories
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}