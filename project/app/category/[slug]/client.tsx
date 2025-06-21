'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Grid, List, SortAsc, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PlantCard from '@/components/product/plant-card';
import { Plant, Category } from '@/types';

interface CategoryClientProps {
  category: Category;
  categoryPlants: Plant[];
}

export default function CategoryClient({ category, categoryPlants }: CategoryClientProps) {
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const maxPrice = Math.max(...categoryPlants.map(plant => plant.price));

  // Get unique subcategories from plants
  const availableSubcategories = useMemo(() => {
    const subcats = categoryPlants
      .filter(plant => plant.subcategory)
      .map(plant => plant.subcategory!)
      .filter((value, index, self) => self.indexOf(value) === index);
    
    return category.subcategories?.filter(sub => subcats.includes(sub.id)) || [];
  }, [categoryPlants, category.subcategories]);

  const filteredAndSortedPlants = useMemo(() => {
    let filtered = categoryPlants.filter(plant => {
      const priceInRange = plant.price >= priceRange[0] && plant.price <= priceRange[1];
      const difficultyMatch = selectedDifficulties.length === 0 || selectedDifficulties.includes(plant.difficulty);
      const availabilityMatch = selectedAvailability.length === 0 || selectedAvailability.includes(plant.availability);
      const subcategoryMatch = selectedSubcategories.length === 0 || 
        (plant.subcategory && selectedSubcategories.includes(plant.subcategory)) ||
        (!plant.subcategory && selectedSubcategories.length === 0);

      return priceInRange && difficultyMatch && availabilityMatch && subcategoryMatch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.reviewCount - a.reviewCount;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [categoryPlants, sortBy, priceRange, selectedDifficulties, selectedAvailability, selectedSubcategories]);

  // Group plants by subcategory for display
  const plantsBySubcategory = useMemo(() => {
    const grouped: { [key: string]: Plant[] } = {};
    
    filteredAndSortedPlants.forEach(plant => {
      const subcategoryKey = plant.subcategory || 'general';
      if (!grouped[subcategoryKey]) {
        grouped[subcategoryKey] = [];
      }
      grouped[subcategoryKey].push(plant);
    });

    return grouped;
  }, [filteredAndSortedPlants]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const getSubcategoryName = (subcategoryId: string) => {
    if (subcategoryId === 'general') return 'General';
    return availableSubcategories.find(sub => sub.id === subcategoryId)?.name || subcategoryId;
  };

  const clearAllFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedDifficulties([]);
    setSelectedAvailability([]);
    setSelectedSubcategories([]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {category.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              {category.description}
            </p>
            <p className="text-green-600 font-semibold">
              {categoryPlants.length} plants available
            </p>
            
            {/* Subcategory Quick Links */}
            {availableSubcategories.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 flex flex-wrap justify-center gap-3"
              >
                <Button
                  variant={selectedSubcategories.length === 0 ? "default" : "outline"}
                  onClick={() => setSelectedSubcategories([])}
                  className="rounded-full"
                >
                  All {category.name}
                </Button>
                {availableSubcategories.map((subcategory) => (
                  <Button
                    key={subcategory.id}
                    variant={selectedSubcategories.includes(subcategory.id) ? "default" : "outline"}
                    onClick={() => {
                      if (selectedSubcategories.includes(subcategory.id)) {
                        setSelectedSubcategories(selectedSubcategories.filter(id => id !== subcategory.id));
                      } else {
                        setSelectedSubcategories([subcategory.id]);
                      }
                    }}
                    className="rounded-full"
                  >
                    {subcategory.name}
                    <Badge variant="secondary" className="ml-2">
                      {categoryPlants.filter(p => p.subcategory === subcategory.id).length}
                    </Badge>
                  </Button>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Subcategories Filter */}
                {availableSubcategories.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Subcategories</h4>
                    <div className="space-y-2">
                      {availableSubcategories.map((subcategory) => (
                        <div key={subcategory.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={subcategory.id}
                            checked={selectedSubcategories.includes(subcategory.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedSubcategories([...selectedSubcategories, subcategory.id]);
                              } else {
                                setSelectedSubcategories(selectedSubcategories.filter(id => id !== subcategory.id));
                              }
                            }}
                          />
                          <label htmlFor={subcategory.id} className="text-sm flex-1">
                            {subcategory.name}
                          </label>
                          <Badge variant="outline" className="text-xs">
                            {categoryPlants.filter(p => p.subcategory === subcategory.id).length}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Range */}
                <div>
                  <h4 className="font-semibold mb-3">Price Range</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={maxPrice}
                    step={5}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <h4 className="font-semibold mb-3">Care Difficulty</h4>
                  <div className="space-y-2">
                    {['easy', 'medium', 'hard'].map((difficulty) => (
                      <div key={difficulty} className="flex items-center space-x-2">
                        <Checkbox
                          id={difficulty}
                          checked={selectedDifficulties.includes(difficulty)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedDifficulties([...selectedDifficulties, difficulty]);
                            } else {
                              setSelectedDifficulties(selectedDifficulties.filter(d => d !== difficulty));
                            }
                          }}
                        />
                        <label htmlFor={difficulty} className="text-sm capitalize">
                          {difficulty}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h4 className="font-semibold mb-3">Availability</h4>
                  <div className="space-y-2">
                    {[
                      { value: 'in-stock', label: 'In Stock' },
                      { value: 'limited', label: 'Limited' },
                      { value: 'out-of-stock', label: 'Out of Stock' }
                    ].map((availability) => (
                      <div key={availability.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={availability.value}
                          checked={selectedAvailability.includes(availability.value)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedAvailability([...selectedAvailability, availability.value]);
                            } else {
                              setSelectedAvailability(selectedAvailability.filter(a => a !== availability.value));
                            }
                          }}
                        />
                        <label htmlFor={availability.value} className="text-sm">
                          {availability.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={clearAllFilters}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>

                <p className="text-muted-foreground">
                  Showing {filteredAndSortedPlants.length} of {categoryPlants.length} plants
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SortAsc className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Plants Display - Grouped by Subcategory */}
            <AnimatePresence>
              {Object.keys(plantsBySubcategory).length > 0 ? (
                <div className="space-y-12">
                  {Object.entries(plantsBySubcategory).map(([subcategoryId, plants]) => (
                    <motion.div
                      key={subcategoryId}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Subcategory Header */}
                      {availableSubcategories.length > 0 && selectedSubcategories.length === 0 && (
                        <div className="mb-6">
                          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {getSubcategoryName(subcategoryId)}
                          </h2>
                          <div className="h-1 w-20 bg-green-600 rounded-full"></div>
                        </div>
                      )}

                      {/* Plants Grid */}
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
                      >
                        {plants.map((plant) => (
                          <motion.div key={plant.id} variants={itemVariants}>
                            <PlantCard plant={plant} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg mb-4">
                    No plants found matching your criteria.
                  </p>
                  <Button
                    variant="outline"
                    onClick={clearAllFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}