"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, Search, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
  searchQuery: string
}

export function ContactPopup({ isOpen, onClose, searchQuery }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({})

  const validateNigerianPhone = (phone: string) => {
    // Nigerian phone number validation (supports +234, 0, and direct formats)
    const nigerianPhoneRegex = /^(\+234|234|0)?[789][01]\d{8}$/
    return nigerianPhoneRegex.test(phone.replace(/\s+/g, ""))
  }

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { phone?: string; email?: string } = {}

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!validateNigerianPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid Nigerian phone number"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)

      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Success - close popup and show success message
        onClose()
        setFormData({ phone: "", email: "" })

        // You could add a toast notification here
        console.log("[v0] Contact submitted:", { ...formData, searchQuery })
      } catch (error) {
        console.error("[v0] Error submitting contact:", error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleInputChange = (field: "phone" | "email", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl font-serif font-bold">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            Find Your Auto Parts
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <p className="text-sm text-gray-300 mb-2">Searching for:</p>
            <p className="font-semibold text-yellow-400">"{searchQuery}"</p>
          </div>

          <div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Get instant results from verified Nigerian vendors! We'll send you the best matches via SMS and email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g., +234 801 234 5678"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`pl-10 bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 ${
                    errors.phone ? "border-red-400" : ""
                  }`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`pl-10 bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 ${
                    errors.email ? "border-red-400" : ""
                  }`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white border-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Searching...
                  </>
                ) : (
                  "Find Parts Now"
                )}
              </Button>
            </div>
          </form>

          <div className="text-xs text-gray-400 text-center">
            We'll connect you with verified vendors across Nigeria. No spam, instant results.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
