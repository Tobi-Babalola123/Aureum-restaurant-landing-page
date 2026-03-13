"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"
import {
  Lightbulb,
  Target,
  TrendingUp,
  Layers,
  Megaphone,
  Globe,
  Users,
  Palette,
  Award,
  BarChart3,
  Briefcase,
  HeadphonesIcon,
  BookOpen,
  MessageCircle,
  ChevronDown,
  Play,
  ArrowRight,
  Menu,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="text-xl font-bold tracking-tight">
                AUREUM<span className="text-amber-600">.</span>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Menu
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Gallery
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Events
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden sm:block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                (555) 123-4567
              </button>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white transition-all hover:scale-105">
                Reserve a Table
              </Button>
              <button className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-36 text-center">
        <AnimatedSection animation="fade-down" duration={600}>
          <p className="text-amber-600 font-medium mb-4 tracking-wide uppercase text-sm">
            Fine Dining Experience
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100} duration={800}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance leading-tight">
            An Unforgettable
            <br />
            Dining Experience
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200} duration={800}>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Award-winning culinary excellence paired with impeccable service in an elegant atmosphere. Discover contemporary cuisine crafted from the finest locally-sourced ingredients by our acclaimed chef.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="zoom-in" delay={300} duration={600}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              Reserve a Table
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-gray-300 bg-transparent transition-all hover:scale-105 hover:bg-gray-50"
            >
              <Play className="mr-2 w-5 h-5" />
              View Menu
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={500} duration={800}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <span className="font-medium uppercase tracking-wider">Featured in</span>
            {[
              { name: "Michelin", image: "/michelin-guide-logo.jpg" },
              { name: "Zagat", image: "/zagat-guide-logo.jpg" },
              { name: "Robb Report", image: "/robb-report-logo.jpg" },
              { name: "OpenTable", image: "/opentable-logo.jpg" },
            ].map((logo, i) => (
              <img
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                className="h-6 grayscale opacity-60 hover:opacity-100 transition-opacity"
                style={{ animationDelay: `${600 + i * 100}ms` }}
              />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Hero Image Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatedSection animation="zoom-in" duration={1000}>
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src="/restaurant-hero.jpg"
              alt="Fine dining restaurant interior"
              className="w-full h-auto rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </AnimatedSection>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Seasonal Menus",
              desc: "Innovative dishes crafted with fresh, locally-sourced ingredients that change with the seasons",
              color: "bg-amber-100 text-amber-600",
            },
            {
              icon: Palette,
              title: "Culinary Excellence",
              desc: "Chef-driven cuisine featuring contemporary techniques and refined presentations",
              color: "bg-gray-100 text-gray-700",
            },
            {
              icon: TrendingUp,
              title: "Exceptional Service",
              desc: "Attentive, knowledgeable staff dedicated to creating memorable dining moments",
              color: "bg-slate-100 text-slate-700",
            },
          ].map((card, i) => (
            <AnimatedSection key={card.title} animation="fade-up" delay={i * 150} duration={600}>
              <Card className="p-8 text-center border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${card.color} mb-4 transition-transform duration-500 group-hover:scale-110`}
                >
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Partner Logos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-y border-gray-200">
        <AnimatedSection animation="fade-up">
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider">Awards & Recognition</p>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {[
              { name: "Michelin Star", src: "/michelin-star-award.jpg" },
              { name: "James Beard", src: "/james-beard-award.jpg" },
              { name: "Zagat Rated", src: "/zagat-award.jpg" },
              { name: "OpenTable", src: "/opentable-award.jpg" },
              { name: "Robb Report", src: "/robb-report-award.jpg" },
              { name: "Eater Award", src: "/eater-award.jpg" },
            ].map((award, i) => (
              <img
                key={award.name}
                src={award.src}
                alt={award.name}
                className="h-8 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Strategic Branding Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection animation="fade-right" duration={800}>
              <p className="text-amber-600 font-medium mb-2 uppercase tracking-wider text-sm">Chef's Vision</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
                Culinary passion meets contemporary artistry
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our executive chef brings together decades of international experience, a deep respect for ingredients, and an innovative spirit that reimagines classic techniques. Each dish tells a story of dedication to flavor, presentation, and the dining experience.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white transition-all hover:scale-105">
                Meet Our Chef
              </Button>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { title: "Fresh Ingredients", desc: "Local sourcing daily" },
                  { title: "Innovation", desc: "Creative technique" },
                  { title: "Precision", desc: "Impeccable execution" },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${300 + i * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection animation="fade-left" duration={1000}>
            <div className="relative group">
              <img
                src="/chef-cooking.jpg"
                alt="Chef at work"
                className="w-full h-auto rounded-xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500 rounded-lg -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Creative Services */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right" duration={1000} className="order-2 md:order-1">
              <div className="relative group">
                <img
                  src="/dining-room.jpg"
                  alt="Restaurant interior"
                  className="w-full h-auto rounded-xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-900 rounded-lg -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
              </div>
            </AnimatedSection>
            <div className="order-1 md:order-2">
              <AnimatedSection animation="fade-left" duration={800}>
                <p className="text-amber-600 font-medium mb-2 uppercase tracking-wider text-sm">Dining Experience</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
                  An atmosphere of refined elegance
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Step into a carefully curated space designed for intimate gatherings and celebrations. Our elegant dining room combines modern sophistication with warm hospitality, creating the perfect setting for unforgettable meals and moments.
                </p>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white transition-all hover:scale-105">
                  Explore the Space
                </Button>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="grid grid-cols-3 gap-6 mt-12">
                  {[
                    { title: "Elegant Design", desc: "Refined aesthetics" },
                    { title: "Intimate Setting", desc: "Perfect for any occasion" },
                    { title: "Private Rooms", desc: "Available for events" },
                  ].map((item) => (
                    <div key={item.title}>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection animation="fade-right" duration={800}>
              <p className="text-amber-600 font-medium mb-2 uppercase tracking-wider text-sm">Signature Dishes</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
                Culinary masterpieces that define us
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our signature dishes represent the pinnacle of our culinary philosophy—bold flavors, impeccable technique, and thoughtful plating. From sea to table, each ingredient is selected with intention and prepared with precision.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white transition-all hover:scale-105">
                View Full Menu
              </Button>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { title: "Appetizers", desc: "Refined starters" },
                  { title: "Main Course", desc: "Signature selections" },
                  { title: "Desserts", desc: "Sweet finales" },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection animation="fade-left" duration={1000}>
            <div className="relative group">
              <img
                src="/plated-food.jpg"
                alt="Signature dishes"
                className="w-full h-auto rounded-xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-100 rounded-full -z-10 transition-transform duration-500 group-hover:scale-110" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Production */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right" duration={1000} className="order-2 md:order-1">
              <div className="relative group">
                <img
                  src="/wine-cellar.jpg"
                  alt="Wine and beverage selection"
                  className="w-full h-auto rounded-xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500 rounded-full -z-10 transition-transform duration-500 group-hover:scale-125" />
              </div>
            </AnimatedSection>
            <div className="order-1 md:order-2">
              <AnimatedSection animation="fade-left" duration={800}>
                <p className="text-amber-600 font-medium mb-2 uppercase tracking-wider text-sm">Wine & Beverages</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">Curated selections for every palate</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our sommelier has expertly curated a distinctive wine list featuring exclusive selections from renowned vineyards worldwide. Each pairing is thoughtfully chosen to complement our seasonal cuisine.
                </p>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white transition-all hover:scale-105">
                  View Wine List
                </Button>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="grid grid-cols-3 gap-6 mt-12">
                  {[
                    { title: "Wine Selection", desc: "Curated international" },
                    { title: "Craft Cocktails", desc: "House specialties" },
                    { title: "Sommelier Pairings", desc: "Expert recommendations" },
                  ].map((item) => (
                    <div key={item.title}>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Celebrated for culinary excellence
              <br />
              and hospitality
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A destination restaurant dedicated to creating extraordinary dining moments and lasting memories.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-wrap items-center justify-center gap-12 mt-12">
          {[
            { end: 4, suffix: ".5", label: "Star Rating" },
            { end: 250, suffix: "+", label: "Reservations/Month" },
            { end: 18, suffix: "+", label: "Years Excellence" },
            { end: 98, suffix: "%", label: "Guest Satisfaction" },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} animation="zoom-in" delay={i * 100}>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-900">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2000} />
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Gallery</h2>
              <p className="text-gray-400 text-lg">Culinary artistry and ambiance</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/appetizer.jpg", alt: "Appetizer" },
              { src: "/dining-room.jpg", alt: "Dining Room" },
              { src: "/chef-cooking.jpg", alt: "Chef" },
              { src: "/dessert.jpg", alt: "Dessert" },
              { src: "/table-setting.jpg", alt: "Table Setting" },
              { src: "/main-course.jpg", alt: "Main Course" },
              { src: "/seafood.jpg", alt: "Seafood" },
              { src: "/event-space.jpg", alt: "Event Space" },
              { src: "/plated-salad.jpg", alt: "Salad" },
              { src: "/cocktail.jpg", alt: "Cocktail" },
              { src: "/kitchen-prep.jpg", alt: "Kitchen" },
              { src: "/outdoor-patio.jpg", alt: "Patio" },
              { src: "/wine-glass.jpg", alt: "Wine" },
              { src: "/pastry-dessert.jpg", alt: "Pastry" },
              { src: "/plated-food.jpg", alt: "Plated Food" },
              { src: "/restaurant-hero.jpg", alt: "Restaurant" },
            ].map((item, i) => (
              <AnimatedSection key={i} animation="zoom-in" delay={(i % 4) * 100} threshold={0.05}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-800 group cursor-pointer relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View More
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dine With Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Aureum</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We create memorable dining experiences through exceptional cuisine, attentive service, and elegant ambiance.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Chef-Driven Menu",
              desc: "Innovative seasonal dishes created by our award-winning executive chef",
            },
            {
              icon: Award,
              title: "Premium Ingredients",
              desc: "Sourced from trusted local suppliers for uncompromising quality",
            },
            {
              icon: BarChart3,
              title: "Impeccable Service",
              desc: "Attentive, knowledgeable staff dedicated to your satisfaction",
            },
            {
              icon: Users,
              title: "Elegant Atmosphere",
              desc: "Refined dining space designed for intimate and special occasions",
            },
            { icon: Globe, title: "Curated Wine List", desc: "Exceptional selections from renowned vineyards worldwide" },
            { icon: Layers, title: "Private Dining", desc: "Exclusive spaces available for celebrations and events" },
            {
              icon: Megaphone,
              title: "Reservations Priority",
              desc: "Seamless booking process with dedicated reservation support",
            },
            {
              icon: Briefcase,
              title: "Catering Services",
              desc: "Custom menus available for corporate and private events",
            },
            {
              icon: TrendingUp,
              title: "Loyalty Program",
              desc: "Exclusive benefits and offers for our valued guests",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} animation="fade-up" delay={(i % 3) * 100}>
              <Card className="p-6 border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <item.icon className="w-10 h-10 text-amber-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="zoom-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Book Your Table Today</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Reserve your seat for an extraordinary culinary experience. Our team looks forward to welcoming you.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 transition-all hover:scale-105 hover:shadow-lg">
              Make a Reservation
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Visit Us<br />
              Location & Hours
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Location",
              desc: "123 Culinary Lane, Downtown District, City 10001",
            },
            {
              icon: MessageCircle,
              title: "Hours",
              desc: "Tue-Thu: 5pm-11pm | Fri-Sat: 5pm-12am | Sun: 5pm-10pm | Closed Mondays",
            },
            {
              icon: HeadphonesIcon,
              title: "Contact",
              desc: "Phone: (555) 123-4567 | Email: reservations@aureum.com",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} animation="fade-up" delay={i * 150}>
              <Card className="p-8 text-center border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <item.icon className="w-12 h-12 text-amber-600 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              "How do I make a reservation?",
              "Do you accommodate dietary restrictions?",
              "What is your dress code?",
              "Do you offer private dining for events?",
              "Can I bring my own wine?",
              "What is your cancellation policy?",
            ].map((question, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-center justify-between hover:border-amber-300 hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <span className="font-medium text-gray-900">{question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-amber-600 group-hover:rotate-180" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-900 py-24 text-white overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection animation="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience Culinary Excellence</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join us for an unforgettable evening of refined cuisine, exceptional service, and elegant ambiance.
            </p>
            <Button
              size="lg"
              className="bg-amber-600 text-white hover:bg-amber-700 px-8 py-6 text-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Reserve Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-white text-xl font-bold mb-4">
                  AUREUM<span className="text-amber-600">.</span>
                </div>
                <p className="text-sm">Fine dining restaurant celebrating culinary excellence and hospitality.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Dining</h4>
                <ul className="space-y-2 text-sm">
                  {["Menu", "Reservations", "Special Events", "Gallery"].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Information</h4>
                <ul className="space-y-2 text-sm">
                  {["About Us", "Our Chef", "Wine List", "Contact"].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  {["Phone: (555) 123-4567", "reservations@aureum.com", "123 Culinary Lane", "Downtown District"].map((item) => (
                    <li key={item} className="hover:text-white transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2026 Aureum Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
