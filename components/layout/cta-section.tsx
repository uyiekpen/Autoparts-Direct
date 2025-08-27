"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

interface CTASectionProps {
  onJoinWaitlist: () => void
}

export function CTASection({ onJoinWaitlist }: CTASectionProps) {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Find Your Auto Parts?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of Nigerian car owners who trust Auto Parts Direct for
          fast, reliable parts sourcing. Get started today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onJoinWaitlist}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Join Early Access
          </Button>

          {/* <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
            onClick={() => window.open("https://wa.me/2348123456789", "_blank")}
          >
            <Phone className="mr-2 h-5 w-5" />
            WhatsApp Us
          </Button> */}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">10,000+</div>
            <div className="text-blue-100">Parts Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-100">Verified Vendors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">2 Min</div>
            <div className="text-blue-100">Average Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
