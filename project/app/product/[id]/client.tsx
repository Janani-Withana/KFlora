'use client';

import { useState, useMemo } from 'react';
import { useCart } from '@/lib/cart';
import { Plant, Category } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Star, Heart, Share2, Check, AlertCircle, Sun, Droplets, Plus, Minus, ChevronRight, ShoppingCart, Leaf
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PlantCard from '@/components/product/plant-card';
import { plants } from '@/lib/data';

interface ProductClientProps {
  plant: Plant;
  category?: Category;
}

export default function ProductClient({ plant, category }: ProductClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();

  const relatedPlants = useMemo(() => {
    return plants
      .filter(p => p.category === plant.category && p.id !== plant.id)
      .slice(0, 4);
  }, [plant]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(plant);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: plant.name,
          text: plant.description,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

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

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            {category && (
              <>
                <Link href={`/category/${category.slug}`} className="hover:text-foreground">
                  {category.name}
                </Link>
                <ChevronRight className="h-4 w-4" />
              </>
            )}
            <span className="text-foreground font-medium">{plant.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src={plant.images[selectedImageIndex]}
                alt={plant.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {plant.originalPrice && (
                  <Badge variant="destructive" className="bg-red-500">Sale</Badge>
                )}
                {plant.isEcoFriendly && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Leaf className="h-3 w-3 mr-1" />
                    Eco-Friendly
                  </Badge>
                )}
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full bg-white/90 hover:bg-white"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className={`rounded-full bg-white/90 hover:bg-white ${isWishlisted ? 'text-red-500' : ''}`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {plant.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {plant.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${selectedImageIndex === i ? 'ring-2 ring-green-600' : 'ring-1 ring-border'}`}
                  >
                    <Image src={img} alt={`${plant.name} ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Details */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold">{plant.name}</h1>
            {plant.scientificName && (
              <p className="text-lg text-muted-foreground italic">{plant.scientificName}</p>
            )}

            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(plant.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
              <span className="text-sm text-muted-foreground">
                {plant.rating} ({plant.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-green-600">${plant.price}</span>
              {plant.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">${plant.originalPrice}</span>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    Save ${plant.originalPrice - plant.price}
                  </Badge>
                </>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center space-x-2">
              {plant.availability === 'in-stock' && (
                <>
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-green-600 font-medium">In Stock</span>
                </>
              )}
              {plant.availability === 'limited' && (
                <>
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-yellow-600 font-medium">Limited Stock</span>
                </>
              )}
              {plant.availability === 'out-of-stock' && (
                <>
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span className="text-red-600 font-medium">Out of Stock</span>
                </>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button variant="ghost" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={plant.availability === 'out-of-stock'}
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ${(plant.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="mt-10">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="care">Care</TabsTrigger>
                <TabsTrigger value="specs">Specs</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <Card><CardContent className="p-4 text-muted-foreground">{plant.description}</CardContent></Card>
              </TabsContent>
              <TabsContent value="care" className="mt-4">
                <Card><CardContent className="p-4">{plant.careInstructions}</CardContent></Card>
              </TabsContent>
              <TabsContent value="specs" className="mt-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between"><span className="text-muted-foreground">Size</span><span>{plant.size}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Difficulty</span><span className="capitalize">{plant.difficulty}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Eco-Friendly</span><span>{plant.isEcoFriendly ? 'Yes' : 'No'}</span></div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Related Products */}
            {relatedPlants.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {relatedPlants.map(p => (
                    <PlantCard key={p.id} plant={p} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
