"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Brain,
  Clock,
  Shield,
  Users,
  Mail,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Loader2,
  Zap,
  Target,
  Smartphone,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Search,
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [heroForm, setHeroForm] = useState({
    phone: "",
    status: "idle", // idle, loading, success, error
    message: "",
  });
  const [ctaForm, setCtaForm] = useState({
    phone: "",
    status: "idle", // idle, loading, success, error
    message: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const validatePhone = (phone: string) => {
    // Nigerian phone number validation (basic)
    return /^(\+234|0)[789][01]\d{8}$/.test(phone.replace(/\s/g, ""));
  };

  const handleSubmit = async (formType: "hero" | "cta", phone: string) => {
    const setForm = formType === "hero" ? setHeroForm : setCtaForm;

    if (!phone.trim()) {
      setForm((prev) => ({
        ...prev,
        status: "error",
        message: "Please enter your phone number",
      }));
      return;
    }

    if (!validatePhone(phone)) {
      setForm((prev) => ({
        ...prev,
        status: "error",
        message: "Please enter a valid Nigerian phone number",
      }));
      return;
    }

    setForm((prev) => ({ ...prev, status: "loading", message: "" }));

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setForm((prev) => ({
        ...prev,
        status: "success",
        message:
          "Perfect! You'll be added to our WhatsApp list. We'll notify you when we launch!",
      }));
    } catch (error) {
      setForm((prev) => ({
        ...prev,
        status: "error",
        message: "Something went wrong. Please try again.",
      }));
    }
  };

  const testimonials = [
    {
      name: "Adebayo O.",
      location: "Lagos Mechanic",
      text: "This platform saved my business! I can find any Toyota part in minutes instead of driving around Lagos for hours.",
    },
    {
      name: "Fatima A.",
      location: "Abuja Driver",
      text: "Finally! A service that understands Nigerian cars. Found my Honda parts at the best price without stress.",
    },
    {
      name: "Chidi N.",
      location: "Port Harcourt",
      text: "Game changer! SMS works even when network is poor. This is exactly what Nigeria needed.",
    },
    {
      name: "Kemi S.",
      location: "Ibadan Car Owner",
      text: "No more wasting time at Computer Village! Got my Mercedes parts delivered to my doorstep.",
    },
    {
      name: "Ibrahim M.",
      location: "Kano Mechanic",
      text: "The AI understands local part names perfectly. Even works with Hausa descriptions!",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const renderFormState = (form: typeof heroForm, formType: "hero" | "cta") => {
    if (form.status === "success") {
      return (
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="font-serif font-bold text-lg text-white mb-2">
            You're In!
          </h3>
          <p className="text-white font-medium text-sm">{form.message}</p>
        </div>
      );
    }

    return (
      <>
        <div className="flex items-center justify-center mb-4">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
        </div>
        <h3 className="font-serif font-bold text-lg text-white mb-2">
          {formType === "hero" ? "Join the Revolution" : "Get Exclusive Access"}
        </h3>
        <p className="text-gray-300 mb-6 text-sm">
          {formType === "hero"
            ? "Be among the first to experience Nigeria's smartest auto parts platform via WhatsApp"
            : "Limited early access - Join our WhatsApp list now!"}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Input
              type="tel"
              placeholder="Enter your phone number (e.g., 08012345678)"
              value={form.phone}
              onChange={(e) => {
                const setForm = formType === "hero" ? setHeroForm : setCtaForm;
                setForm((prev) => ({
                  ...prev,
                  phone: e.target.value,
                  status: "idle",
                  message: "",
                }));
              }}
              className={`w-full px-4 py-3 text-sm border-2 rounded-lg transition-all duration-200 bg-gray-800/50 backdrop-blur text-white placeholder:text-gray-400 ${
                form.status === "error"
                  ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/30"
                  : "border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/30"
              }`}
              disabled={form.status === "loading"}
            />
          </div>
          <Button
            size="default"
            onClick={() => handleSubmit(formType, form.phone)}
            disabled={form.status === "loading"}
            className="px-6 py-3 text-sm font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-black border-0 whitespace-nowrap"
          >
            {form.status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                {formType === "hero" ? "Join WhatsApp" : "Get Access"}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>

        {form.status === "error" && (
          <div className="flex items-center gap-2 mt-3 text-red-400 bg-red-900/20 px-3 py-2 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            <span className="text-xs">{form.message}</span>
          </div>
        )}

        <p className="text-xs mt-4 flex items-center justify-center gap-2 text-gray-400">
          <Shield className="w-3 h-3" />
          No spam • WhatsApp updates • Nigerian-first platform
        </p>
      </>
    );
  };

  const products = [
    {
      id: 1,
      name: "Brake Pads",
      description: "Front & rear brake pads for all car models",
      price: "₦8,000 - ₦25,000",
      image: "/brake.jpeg",
      popular: true,
    },
    {
      id: 2,
      name: "Engine Oil",
      description: "Premium motor oil for all engine types",
      price: "₦3,500 - ₦12,000",
      image: "/engine-oil.jpeg",
    },
    {
      id: 3,
      name: "Air Filter",
      description: "Engine air filters for better performance",
      price: "₦2,000 - ₦8,000",
      image: "/airfilter.jpeg",
    },
    {
      id: 4,
      name: "Spark Plugs",
      description: "High-quality ignition spark plugs",
      price: "₦1,500 - ₦5,000",
      image: "/spark-plug-5EXKX88-600.jpg",
    },
    {
      id: 5,
      name: "Car Battery",
      description: "12V automotive batteries, all sizes",
      price: "₦15,000 - ₦45,000",
      image: "/car-battery-power (1).png",
      essential: true,
    },
    {
      id: 6,
      name: "Car Tires",
      description: "Premium tires for all vehicle types",
      price: "₦25,000 - ₦80,000",
      image: "/car-tires-wheels-rubber (1).png",
    },
    {
      id: 7,
      name: "Alternator",
      description: "Electrical charging system components",
      price: "₦20,000 - ₦60,000",
      image: "/car-alternator (1).png",
    },
    {
      id: 8,
      name: "Radiator",
      description: "Engine cooling system radiators",
      price: "₦18,000 - ₦55,000",
      image: "/car-radiator-cooling-system (1).png",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#E3E7EA] backdrop-blur-xl border-b border-gray-80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Auto Parts Direct Logo"
                className="h-10 w-[100px] object-cover"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("features")}
                className="text-[#3C464D] hover:text-secondary transition-colors text-sm font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-[#3C464D] hover:text-secondary transition-colors text-sm font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-[#3C464D] hover:text-secondary transition-colors text-sm font-medium"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-[#3C464D] hover:text-secondary transition-colors text-sm font-medium"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#3C464D] hover:text-secondary transition-colors text-sm font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={() => scrollToSection("waitlist")}
                className="px-4 py-2 text-sm font-bold rounded-lg bg-secondary hover:bg-secondary/90 text-black border-0 transition-all duration-300 hover:shadow-lg"
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#3C464D] hover:text-secondary transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-800 py-4">
              <nav className="flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-[#3C464D] hover:text-secondary transition-colors text-sm font-medium py-2"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-[#3C464D] hover:text-secondary transition-colors text-sm font-medium py-2"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-left text-[#3C464D] hover:text-secondary transition-colors text-sm font-medium py-2"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-[#3C464D] hover:text-secondary transition-colors text-sm font-medium py-2"
                >
                  Reviews
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-[#3C464D] hover:text-secondary transition-colors text-sm font-medium py-2"
                >
                  Contact
                </button>
                <Button
                  onClick={() => scrollToSection("waitlist")}
                  className="mt-2 w-full text-sm font-bold rounded-lg bg-secondary hover:bg-secondary/90 text-black border-0"
                >
                  Join Waitlist
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="px-4 py-12 pt-20 max-w-7xl mx-auto text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-gray-900 to-gray-900"></div>
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 text-white font-semibold text-xs">
            <Zap className="w-3 h-3" />
            LAUNCHING SOON IN NIGERIA
          </div>

          <h1 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
            Get Auto Parts in{" "}
            <span className="text-secondary">Minutes, Not Hours</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nigeria's first AI-powered SMS platform for instant auto parts
            sourcing.
            <span className="text-secondary font-semibold">
              {" "}
              No more endless searching!
            </span>
          </p>

          <div id="waitlist" className="pt-6 max-w-xl mx-auto">
            <div className="bg-gray-800/80 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700 p-6">
              {renderFormState(heroForm, "hero")}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
          <img
            src="/nigerian-mechanic-engine.png"
            alt="Nigerian mechanic working on car engine"
            className="rounded-lg shadow-xl mx-auto border border-gray-700 max-w-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-white mb-4">
              Why Nigerian Car Owners{" "}
              <span className="text-secondary">Choose Us</span>
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Built specifically for Nigeria's unique automotive market and
              challenges
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="font-serif font-bold text-lg text-white">
                  SMS-First Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300 leading-relaxed text-sm">
                  Works on any phone, anywhere in Nigeria. No internet? No
                  problem. Just send an SMS and get results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="font-serif font-bold text-lg text-white">
                  AI-Powered Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300 leading-relaxed text-sm">
                  Smart AI understands Nigerian car models and local part names.
                  Get exactly what you need, fast.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group sm:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="font-serif font-bold text-lg text-white">
                  Verified Nigerian Vendors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300 leading-relaxed text-sm">
                  Access trusted vendors across Lagos, Abuja, Port Harcourt, and
                  beyond. Quality guaranteed.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-white mb-4">
              Get Parts in{" "}
              <span className="text-secondary">3 Simple Steps</span>
            </h2>
            <p className="text-base text-gray-300">
              Revolutionary simplicity for Nigerian car owners
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-black text-white">1</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white mb-3">
                Send SMS
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Text us your part description or send a photo. Works 24/7 from
                anywhere in Nigeria.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-black text-white">2</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white mb-3">
                AI Magic
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our AI instantly searches Jiji, Jumia, and local vendors. No
                manual searching needed.
              </p>
            </div>

            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-black text-white">3</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white mb-3">
                Get Results
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Receive vendor responses with prices and locations directly to
                your phone. Choose and buy!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="px-4 py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-white mb-4">
              Popular <span className="text-secondary">Auto Parts</span>
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto mb-6">
              Find the most requested auto parts by Nigerian car owners. Get
              instant quotes from verified vendors.
            </p>

            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search auto parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-900/80 border-gray-600 text-white placeholder:text-gray-400 focus:border-secondary focus:ring-2 focus:ring-secondary/30 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-gray-900/80 border-2 border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden h-[400px]"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.popular && (
                    <div className="absolute top-1 right-1 bg-secondary text-black text-xs font-bold px-1.5 py-0.5 rounded text-[10px]">
                      Popular
                    </div>
                  )}
                  {product.essential && (
                    <div className="absolute top-1 right-1 bg-secondary text-black text-xs font-bold px-1.5 py-0.5 rounded text-[10px]">
                      Essential
                    </div>
                  )}
                </div>
                <CardContent className="p-3">
                  <h3 className="font-serif font-bold text-sm text-white mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    <span className="text-secondary font-bold text-xs">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-secondary hover:bg-secondary/90 text-black text-xs h-7 px-2"
                    >
                      Find Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400 text-sm mb-4">
                No parts found matching "{searchQuery}". Try a different search
                term.
              </p>
            </div>
          )}

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-4">
              Can't find what you're looking for? Our AI can help you find any
              auto part!
            </p>
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-black font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Join Waitlist to Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-white mb-4">
              Nigerian Car Owners{" "}
              <span className="text-secondary">Love Us</span>
            </h2>
            <p className="text-base text-gray-300">
              Join thousands who've revolutionized their auto parts shopping
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div
              className="overflow-hidden rounded-xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-gray-900/80 border border-gray-700 hover:border-secondary/30 transition-all duration-300 mx-auto max-w-2xl">
                      <CardContent className="pt-6 pb-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-gray-300 italic leading-relaxed text-base mb-6">
                            "{testimonial.text}"
                          </p>
                          <div>
                            <h4 className="font-bold text-white text-lg">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-secondary">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-secondary scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 rounded-full px-4 py-2 text-white font-bold text-xs mb-4">
            <Clock className="w-3 h-3" />
            LIMITED EARLY ACCESS
          </div>

          <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-white mb-4 leading-tight">
            Don't Get Left Behind!
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be among the first 1,000 Nigerian car owners to experience the
            future of auto parts shopping.
            <span className="block mt-2 text-white font-bold text-sm">
              Early access starts soon!
            </span>
          </p>

          <div className="max-w-xl mx-auto mb-8">
            <div className="bg-black/30 backdrop-blur-xl rounded-xl border border-white/20 p-6 shadow-2xl">
              {renderFormState(ctaForm, "cta")}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">Launching Q1 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">Nigerian-Built</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="font-semibold">SMS + AI Powered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-4 py-8 bg-[#E3E7EA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Auto Parts Direct Logo"
                  className="h-10 w-[100px] object-cover"
                />
              </div>
              <p className="text-[#3C464D]  text-sm leading-relaxed mt-3">
                Nigeria's first AI-powered platform for instant auto parts
                sourcing. Connecting car owners with verified vendors across the
                country.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-bold text-base text-[#3C464D]  mb-3">
                Contact Us
              </h4>

              <ul className="space-y-2">
                {/* Email */}
                <li>
                  <a
                    href="mailto:hello@autopartsdirect.ng"
                    className="group flex items-center gap-2 text-[#3C464D]  hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40 rounded"
                    aria-label="Send an email to hello@autopartsdirect.ng"
                  >
                    <span className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center transition-all group-hover:bg-gray-700">
                      <Mail className="w-3.5 h-3.5 text-secondary" />
                    </span>
                    <span className="text-xs text-[#3C464D]">
                      autopartsdirect4@gmail.com{" "}
                    </span>
                  </a>
                </li>

                {/* Phone */}
                <li>
                  <a
                    href="tel:+2348012345678"
                    className="group flex items-center gap-2 text-[#3C464D]  hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40 rounded"
                    aria-label="Call +234 801 234 5678"
                  >
                    <span className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center transition-all">
                      <Smartphone className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span className="text-xs">+234 801 234 5678</span>
                  </a>
                </li>

                {/* Location */}
                <li className="flex items-center gap-2 text-[#3C464D] ">
                  <span className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center">
                    {/* MapPin reads clearer than Target for location */}
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-xs">Lagos, Nigeria</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-serif font-bold text-base text-[#3C464D] mb-3">
                Follow Us
              </h4>
              <div className="space-y-2">
                <a
                  href="https://www.facebook.com/share/1BPmqNzynH/"
                  className="flex items-center gap-2 text-[#3C464D]  hover:text-secondary transition-colors group"
                >
                  <div className="w-[30px] h-[30px] bg-gray-800 rounded-full flex items-center justify-center transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook-icon lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>{" "}
                  </div>
                  <span className="text-xs">autopartsdirect</span>
                </a>
                <a
                  href="https://www.instagram.com/auto.partdirect?igsh=OGU5MmFsYnZ5aXo2"
                  className="flex items-center gap-2 text-[#3C464D] hover:text-secondary transition-colors group"
                >
                  <div className="w-[30px] h-[30px] bg-gray-800 rounded-full flex items-center justify-center  transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <span className="text-xs">auto.partdirect</span>
                </a>
                <a
                  href="https://www.tiktok.com/@auto_partsdirect2?is_from_webapp=1&sender_device=pc"
                  className="flex items-center gap-2 text-[#3C464D] hover:text-secondary transition-colors group"
                >
                  <div className="w-[30px] h-[30px] bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-all">
                    <img
                      src="/tiktok.png"
                      alt=""
                      className="w-[20px] h-[20px] "
                    />
                  </div>
                  <span className="text-xs">auto_partsdirect2</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#3C464D]  text-xs text-center sm:text-left">
              © 2025 Autoparts Direct.
            </p>
            <div className="flex items-center gap-3 text-[#3C464D]  text-xs">
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
