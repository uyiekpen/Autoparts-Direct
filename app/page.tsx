"use client";

import { useState } from "react";
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
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [heroForm, setHeroForm] = useState({
    email: "",
    status: "idle", // idle, loading, success, error
    message: "",
  });

  const [ctaForm, setCtaForm] = useState({
    email: "",
    status: "idle", // idle, loading, success, error
    message: "",
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (formType: "hero" | "cta", email: string) => {
    const setForm = formType === "hero" ? setHeroForm : setCtaForm;

    if (!email.trim()) {
      setForm((prev) => ({
        ...prev,
        status: "error",
        message: "Please enter your email address",
      }));
      return;
    }

    if (!validateEmail(email)) {
      setForm((prev) => ({
        ...prev,
        status: "error",
        message: "Please enter a valid email address",
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
          "Thanks! You're on the waitlist. We'll notify you when we launch!",
      }));
    } catch (error) {
      setForm((prev) => ({
        ...prev,
        status: "error",
        message: "Something went wrong. Please try again.",
      }));
    }
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
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="font-serif font-bold text-xl text-white mb-2">
            You're In!
          </h3>
          <p className="text-yellow-300 font-medium">{form.message}</p>
        </div>
      );
    }

    return (
      <>
        <div className="flex items-center justify-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
            <Mail className="w-7 h-7 text-white" />
          </div>
        </div>
        <h3 className="font-serif font-bold text-2xl text-white mb-3">
          {formType === "hero" ? "Join the Revolution" : "Get Exclusive Access"}
        </h3>
        <p className="text-gray-300 mb-8 text-lg">
          {formType === "hero"
            ? "Be among the first to experience Nigeria's smartest auto parts platform"
            : "Limited early access - Join the waitlist now!"}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={(e) => {
                const setForm = formType === "hero" ? setHeroForm : setCtaForm;
                setForm((prev) => ({
                  ...prev,
                  email: e.target.value,
                  status: "idle",
                  message: "",
                }));
              }}
              className={`w-full px-6 py-4 text-lg border-2 rounded-xl transition-all duration-200 bg-gray-800/50 backdrop-blur text-white placeholder:text-gray-400 ${
                form.status === "error"
                  ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/30"
                  : "border-gray-600 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30"
              }`}
              disabled={form.status === "loading"}
            />
          </div>
          <Button
            size="lg"
            onClick={() => handleSubmit(formType, form.email)}
            disabled={form.status === "loading"}
            className="px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white border-0 whitespace-nowrap"
          >
            {form.status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                {formType === "hero" ? "Join Now" : "Get Access"}
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
        </div>

        {form.status === "error" && (
          <div className="flex items-center gap-2 mt-4 text-red-400 bg-red-900/20 px-4 py-2 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{form.message}</span>
          </div>
        )}

        <p className="text-sm mt-6 flex items-center justify-center gap-2 text-gray-400">
          <Shield className="w-4 h-4" />
          No spam • Instant updates • Nigerian-first platform
        </p>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="font-serif font-bold text-xl sm:text-2xl">
                <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                  Autoparts Direct
                </span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={() => scrollToSection("waitlist")}
                className="px-6 py-2 font-bold rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white border-0 transition-all duration-300 hover:shadow-lg"
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-800 py-4">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2"
                >
                  Reviews
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2"
                >
                  Contact
                </button>
                <Button
                  onClick={() => scrollToSection("waitlist")}
                  className="mt-2 w-full font-bold rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white border-0"
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
        className="px-4 py-12 sm:py-16 md:py-24 pt-24 sm:pt-28 max-w-7xl mx-auto text-center relative overflow-hidden"
      >
        {/* Hero Section */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-gray-900 to-yellow-900/20"></div>
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-yellow-500/20 border border-red-500/30 rounded-full px-6 py-2 text-yellow-400 font-semibold text-sm sm:text-base">
            <Zap className="w-4 h-4" />
            LAUNCHING SOON IN NIGERIA
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            Get Auto Parts in{" "}
            <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              Minutes, Not Hours
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Nigeria's first AI-powered SMS platform for instant auto parts
            sourcing.
            <span className="text-yellow-400 font-semibold">
              {" "}
              No more endless searching!
            </span>
          </p>

          <div id="waitlist" className="pt-8 max-w-2xl mx-auto">
            <div className="bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 p-6 sm:p-8">
              {renderFormState(heroForm, "hero")}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 sm:mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
          <img
            src="/nigerian-mechanic-engine.png"
            alt="Nigerian mechanic working on car engine"
            className="rounded-xl shadow-2xl mx-auto border border-gray-700"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-12 sm:py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Why Nigerian Car Owners{" "}
              <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Built specifically for Nigeria's unique automotive market and
              challenges
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-white">
                  SMS-First Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300 leading-relaxed text-base">
                  Works on any phone, anywhere in Nigeria. No internet? No
                  problem. Just send an SMS and get results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-white">
                  AI-Powered Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300 leading-relaxed text-base">
                  Smart AI understands Nigerian car models and local part names.
                  Get exactly what you need, fast.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 group sm:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif font-bold text-xl text-white">
                  Verified Nigerian Vendors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300 leading-relaxed text-base">
                  Access trusted vendors across Lagos, Abuja, Port Harcourt, and
                  beyond. Quality guaranteed.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 py-12 sm:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Get Parts in{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                3 Simple Steps
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Revolutionary simplicity for Nigerian car owners
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl font-black text-white">
                  1
                </span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-4">
                Send SMS
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Text us your part description or send a photo. Works 24/7 from
                anywhere in Nigeria.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl font-black text-white">
                  2
                </span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-4">
                AI Magic
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Our AI instantly searches Jiji, Jumia, and local vendors. No
                manual searching needed.
              </p>
            </div>

            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl sm:text-3xl font-black text-white">
                  3
                </span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-4">
                Get Results
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Receive vendor responses with prices and locations directly to
                your phone. Choose and buy!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 py-12 sm:py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Nigerian Car Owners{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                Love Us
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Join thousands who've revolutionized their auto parts shopping
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gray-900/80 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-white">Adebayo O.</h4>
                    <p className="text-sm text-yellow-400">Lagos Mechanic</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "This platform saved my business! I can find any Toyota part
                  in minutes instead of driving around Lagos for hours."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-white">Fatima A.</h4>
                    <p className="text-sm text-yellow-400">Abuja Driver</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "Finally! A service that understands Nigerian cars. Found my
                  Honda parts at the best price without stress."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-white">Chidi N.</h4>
                    <p className="text-sm text-yellow-400">Port Harcourt</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "Game changer! SMS works even when network is poor. This is
                  exactly what Nigeria needed."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 sm:py-16 bg-gradient-to-r from-red-600 via-red-700 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 rounded-full px-6 py-2 text-white font-bold text-sm sm:text-base mb-6">
            <Clock className="w-4 h-4" />
            LIMITED EARLY ACCESS
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Don't Get Left Behind!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Be among the first 1,000 Nigerian car owners to experience the
            future of auto parts shopping.
            <span className="block mt-2 text-yellow-200 font-bold">
              Early access starts soon!
            </span>
          </p>

          <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 p-6 sm:p-10 shadow-2xl">
              {renderFormState(ctaForm, "cta")}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/80 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Launching Q1 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Nigerian-Built</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">SMS + AI Powered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-4 py-8 sm:py-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4">
                <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                  Autoparts Direct
                </span>
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                Nigeria's first AI-powered SMS platform for instant auto parts
                sourcing. Connecting car owners with verified vendors across the
                country.
              </p>
              <div className="flex items-center gap-2 text-yellow-400 text-sm">
                <Shield className="w-4 h-4" />
                <span className="font-semibold">
                  Built by Nigerians, for Nigerians 🇳🇬
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-bold text-lg text-white mb-4">
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors">
                  <Mail className="w-4 h-4 text-red-400" />
                  <a
                    href="mailto:hello@autopartsdirect.ng"
                    className="text-sm sm:text-base"
                  >
                    hello@autopartsdirect.ng
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors">
                  <Smartphone className="w-4 h-4 text-red-400" />
                  <a href="tel:+2348012345678" className="text-sm sm:text-base">
                    +234 801 234 5678
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Target className="w-4 h-4 text-red-400" />
                  <span className="text-sm sm:text-base">Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-serif font-bold text-lg text-white mb-4">
                Follow Us
              </h4>
              <div className="space-y-3">
                <a
                  href="https://twitter.com/autopartsdirect"
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-yellow-500 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base">@autopartsdirect</span>
                </a>
                <a
                  href="https://instagram.com/autopartsdirect"
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-yellow-500 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base">@autopartsdirect</span>
                </a>
                <a
                  href="https://linkedin.com/company/autopartsdirect"
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-yellow-500 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base">AutopartsDirect</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
              © 2024 Autoparts Direct. Revolutionizing auto parts access across
              Nigeria.
            </p>
            <div className="flex items-center gap-4 text-gray-500 text-xs sm:text-sm">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
