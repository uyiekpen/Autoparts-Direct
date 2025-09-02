"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Lock,
  Check,
  Truck,
  Shield,
  Award,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import AuthModal from "@/components/layout/auth-modal";
import { useAuth } from "@/hooks/use-auth";
import { Header } from "@/components/layout/header";
import { getProductById } from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number.parseInt(params.id as string);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, loading, isAuthenticated } = useAuth();

  const product = getProductById(productId);

  const handleJoinWaitlist = () => {
    setShowAuthModal(true);
  };

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setShowAuthModal(true);
    }
  }, [loading, isAuthenticated]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header onJoinWaitlist={handleJoinWaitlist} />

        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="mb-8">
            <Link href="/products">
              <Button
                variant="secondary"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>

          <div className="max-w-md mx-auto text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Get Access
            </h1>
            <p className="text-muted-foreground mb-6">
              Join our exclusive platform to view detailed product information
              and make purchases.
            </p>
            <Button
              onClick={() => setShowAuthModal(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Join Access
            </Button>
          </div>
        </main>

        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onJoinWaitlist={handleJoinWaitlist} />

      {/* Breadcrumb */}
      <div className="bg-card pt-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/products">
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Products
                </Button>
              </Link>
              {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <span>/</span>
                <Link href="/products" className="hover:text-primary">
                  Products
                </Link>
                <span>/</span>
                <span className="text-foreground">{product.name}</span>
              </div> */}
            </div>
            {/* <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.name}!
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
                className="border-border text-muted-foreground hover:text-foreground"
              >
                Sign Out
              </Button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted border border-border">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="outline"
                  className="border-border text-muted-foreground"
                >
                  {product.category}
                </Badge>
                {product.popular && (
                  <Badge className="bg-secondary text-secondary-foreground">
                    Popular
                  </Badge>
                )}
                {product.essential && (
                  <Badge className="bg-accent text-accent-foreground">
                    Essential
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge
                    variant="secondary"
                    className="bg-muted text-muted-foreground"
                  >
                    Out of Stock
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-secondary fill-current"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="text-muted-foreground mb-4 text-lg">
                {product.description}
              </p>
              <div className="text-3xl font-bold text-primary mb-6">
                {product.price}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
              <div className="text-center">
                <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Warranty</p>
              </div>
              <div className="text-center">
                <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Quality Assured</p>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-foreground">
                  Quantity:
                </label>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-muted text-muted-foreground hover:text-foreground"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-border text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-muted text-muted-foreground hover:text-foreground"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border text-muted-foreground hover:text-foreground bg-transparent"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border text-muted-foreground hover:text-foreground bg-transparent"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-foreground">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Description */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4 text-foreground">
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.fullDescription}
                </p>

                <div className="mt-6">
                  <h4 className="font-medium text-foreground mb-2">
                    Compatible With:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.compatibility.map((item, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-border text-muted-foreground"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4 text-foreground">
                  Specifications
                </h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-border"
                      >
                        <span className="font-medium text-muted-foreground">
                          {key}:
                        </span>
                        <span className="text-foreground">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
