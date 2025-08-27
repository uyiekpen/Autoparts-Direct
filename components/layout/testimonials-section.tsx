"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      location: "Lagos",
      text: "I found my Toyota Camry brake pads in just 2 minutes! The SMS system is so convenient, and the vendor was verified and professional.",
      rating: 5,
      image: "/nigerian-man-smiling.png",
    },
    {
      name: "Fatima Abdullahi",
      location: "Abuja",
      text: "Auto Parts Direct saved me so much time. Instead of driving around Abuja looking for parts, I just sent one SMS and got 3 quotes!",
      rating: 5,
      image: "/nigerian-woman-smiling.png",
    },
    {
      name: "Chinedu Okoro",
      location: "Port Harcourt",
      text: "The AI matching is incredible. It knew exactly what alternator I needed for my Honda Accord 2015. Highly recommend!",
      rating: 5,
      image: "/nigerian-man-smiling.png",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Join thousands of satisfied car owners across Nigeria</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-6">
                <Button variant="ghost" size="icon" onClick={prevTestimonial} className="h-12 w-12">
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <div className="flex-1 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-lg text-gray-900">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-600">{testimonials[currentTestimonial].location}</div>
                    </div>
                  </div>
                </div>

                <Button variant="ghost" size="icon" onClick={nextTestimonial} className="h-12 w-12">
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-gray-800" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
