"use client"

import { ArrowRight, MessageSquare, Zap, ShoppingCart, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ConversionFunnelProps {
  onGetStarted: () => void
}

export function ConversionFunnel({ onGetStarted }: ConversionFunnelProps) {
  const funnelSteps = [
    {
      step: 1,
      title: "Search & Connect",
      description: "Tell us what auto part you need via SMS, WhatsApp, or our search bar",
      icon: MessageSquare,
      action: "Search for parts",
      color: "from-red-500 to-red-600",
      stats: "2 minutes",
    },
    {
      step: 2,
      title: "AI Matching",
      description: "Our AI instantly finds verified vendors with your exact part across Nigeria",
      icon: Zap,
      action: "Get matched",
      color: "from-yellow-500 to-yellow-600",
      stats: "30 seconds",
    },
    {
      step: 3,
      title: "Compare & Buy",
      description: "Review prices, locations, and vendor ratings. Choose the best option for you",
      icon: ShoppingCart,
      action: "Make purchase",
      color: "from-red-600 to-yellow-500",
      stats: "5 minutes",
    },
    {
      step: 4,
      title: "Get Your Part",
      description: "Pick up locally or get it delivered. Track your order every step of the way",
      icon: CheckCircle,
      action: "Receive part",
      color: "from-green-500 to-green-600",
      stats: "Same day",
    },
  ]

  return (
    <section className="px-4 py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-yellow-500/20 border border-red-500/30 rounded-full px-6 py-2 text-yellow-400 font-semibold text-sm sm:text-base mb-6">
            <Zap className="w-4 h-4" />
            CONVERSION FUNNEL
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            From Search to{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            See exactly how we transform your auto parts frustration into instant solutions
          </p>
        </div>

        {/* Desktop Funnel Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {funnelSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <Card
                    key={step.step}
                    className="bg-gray-900/80 border-2 border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="mb-4">
                        <div className="text-xs font-bold text-yellow-400 mb-1">STEP {step.step}</div>
                        <h3 className="font-serif font-bold text-xl text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">{step.description}</p>
                        <div className="text-xs text-yellow-400 font-semibold bg-yellow-400/10 rounded-full px-3 py-1 inline-block">
                          {step.stats}
                        </div>
                      </div>

                      <Button
                        size="sm"
                        onClick={onGetStarted}
                        className={`w-full bg-gradient-to-r ${step.color} hover:opacity-90 text-white border-0 text-sm font-semibold`}
                      >
                        {step.action}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Funnel Flow */}
        <div className="lg:hidden space-y-6">
          {funnelSteps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === funnelSteps.length - 1

            return (
              <div key={step.step} className="relative">
                <Card className="bg-gray-900/80 border-2 border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="text-xs font-bold text-yellow-400 mb-1">STEP {step.step}</div>
                        <h3 className="font-serif font-bold text-lg text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">{step.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-yellow-400 font-semibold bg-yellow-400/10 rounded-full px-3 py-1">
                            {step.stats}
                          </div>
                          <Button
                            size="sm"
                            onClick={onGetStarted}
                            className={`bg-gradient-to-r ${step.color} hover:opacity-90 text-white border-0 text-sm font-semibold`}
                          >
                            {step.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for mobile */}
                {!isLast && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-yellow-400" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Conversion Stats */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl sm:text-3xl font-black text-yellow-400 mb-1">98%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl sm:text-3xl font-black text-red-400 mb-1">7min</div>
              <div className="text-sm text-gray-300">Average Time</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl sm:text-3xl font-black text-yellow-400 mb-1">500+</div>
              <div className="text-sm text-gray-300">Vendors</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl sm:text-3xl font-black text-red-400 mb-1">24/7</div>
              <div className="text-sm text-gray-300">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
