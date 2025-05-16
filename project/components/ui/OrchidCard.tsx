"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Orchid } from "@/lib/data";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface OrchidCardProps {
  orchid: Orchid;
}

export function OrchidCard({ orchid }: OrchidCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 group h-full",
        isHovered ? "shadow-lg transform -translate-y-1" : "shadow-md"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0 relative aspect-square">
        <div className="absolute top-3 right-3 z-10">
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart 
              className={cn(
                "h-4 w-4 transition-colors", 
                isFavorite ? "fill-destructive text-destructive" : "text-muted-foreground"
              )} 
            />
          </Button>
        </div>
        {(orchid.featured || orchid.new) && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant={orchid.new ? "destructive" : "secondary"} className="capitalize">
              {orchid.new ? "New" : "Featured"}
            </Badge>
          </div>
        )}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={orchid.imageUrl}
            alt={orchid.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-cover transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="space-y-1">
            <h3 className="font-medium text-lg">{orchid.name}</h3>
            <p className="text-xs text-muted-foreground italic">{orchid.scientificName}</p>
          </div>
          <div>
            <span className="font-semibold text-lg">${orchid.price.toFixed(2)}</span>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center">
              <Badge variant="outline" className="mr-2">
                {orchid.difficulty}
              </Badge>
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}