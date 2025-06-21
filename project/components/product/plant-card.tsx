'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Heart, ShoppingCart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plant } from '@/types';
import { useCart } from '@/lib/cart';

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(plant);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
        <Link href={`/product/${plant.id}`}>
          <div className="relative">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={plant.images[0]}
                alt={plant.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {plant.originalPrice && (
                  <Badge variant="destructive" className="bg-red-500">
                    Sale
                  </Badge>
                )}
                {plant.isEcoFriendly && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Leaf className="h-3 w-3 mr-1" />
                    Eco
                  </Badge>
                )}
              </div>

              {/* Wishlist Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart className="h-4 w-4" />
              </motion.button>

              {/* Quick Add to Cart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="sm"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Quick Add
                </Button>
              </motion.div>
            </div>

            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg group-hover:text-green-600 transition-colors line-clamp-1">
                  {plant.name}
                </h3>
                
                {plant.scientificName && (
                  <p className="text-sm text-muted-foreground italic">
                    {plant.scientificName}
                  </p>
                )}

                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(plant.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({plant.reviewCount})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-green-600">
                      ${plant.price}
                    </span>
                    {plant.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${plant.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <Badge 
                    variant={plant.availability === 'in-stock' ? 'default' : 'secondary'}
                    className={
                      plant.availability === 'in-stock' 
                        ? 'bg-green-100 text-green-800'
                        : plant.availability === 'limited'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }
                  >
                    {plant.availability === 'in-stock' ? 'In Stock' : 
                     plant.availability === 'limited' ? 'Limited' : 'Out of Stock'}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-1 mt-2">
                  {plant.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
}