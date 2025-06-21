'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Heart, Shield, Award, Users, Sprout } from 'lucide-react';
import { teamMembers } from '@/lib/data';

export default function AboutPage() {
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

  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We grow our plants using eco-friendly methods and sustainable practices that protect our environment.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for plants drives everything we do, from cultivation to customer care.'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Every plant is carefully selected and inspected to ensure it meets our high standards.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our business, from plants to service.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '500+', label: 'Plant Varieties' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Growing Dreams, One Plant at a Time
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              KFlora was born from a simple belief: everyone deserves to experience 
              the joy and tranquility that plants bring to our lives.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Our Story */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 
                className="text-3xl sm:text-4xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Founded in 2009 by botanist Katherine Flora, KFlora began as a small greenhouse 
                  operation with a big vision: to make beautiful, healthy plants accessible to 
                  everyone, regardless of their gardening experience.
                </p>
                <p>
                  What started with a collection of 20 orchids has grown into a thriving business 
                  that serves plant lovers across the country. We specialize in indoor plants that 
                  not only beautify your space but also purify the air and enhance your well-being.
                </p>
                <p>
                  Today, we're proud to be a certified B-Corporation, committed to using business 
                  as a force for good. Every purchase supports sustainable farming practices and 
                  local communities.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="KFlora greenhouse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-background p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Sprout className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-bold text-2xl">15+</p>
                    <p className="text-sm text-muted-foreground">Years Growing</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Stats */}
          <motion.section variants={itemVariants}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-3xl font-bold text-green-600 mb-2">
                        {stat.number}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Values */}
          <motion.section variants={itemVariants} className="text-center">
            <h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way we 
              serve our customers and community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                        <value.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team */}
          <motion.section variants={itemVariants} className="text-center">
            <h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              The passionate plant experts behind KFlora, dedicated to helping 
              you grow your green thumb.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-64">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                      <Badge variant="outline" className="mb-3">
                        {member.role}
                      </Badge>
                      <p className="text-muted-foreground text-sm mb-4">
                        {member.bio}
                      </p>
                      <div className="flex justify-center space-x-2">
                        {member.social.linkedin && (
                          <a 
                            href={member.social.linkedin}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Users className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a 
                            href={member.social.instagram}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Heart className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mission Statement */}
          <motion.section variants={itemVariants} className="text-center bg-green-50 dark:bg-green-950/20 rounded-2xl p-12">
            <div className="max-w-3xl mx-auto">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h2 
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To inspire and empower people to bring nature into their lives through 
                beautiful, healthy plants while promoting environmental sustainability 
                and supporting local communities. We believe that every home can be a 
                sanctuary, and every person can be a successful plant parent.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}