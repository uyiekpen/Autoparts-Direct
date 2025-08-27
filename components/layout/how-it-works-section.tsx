export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-white mb-4">
            Get Parts in <span className="text-secondary">3 Simple Steps</span>
          </h2>
          <p className="text-base text-gray-300">Revolutionary simplicity for Nigerian car owners</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl font-black text-white">1</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-white mb-3">Send SMS</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Text us your part description or send a photo. Works 24/7 from anywhere in Nigeria.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl font-black text-white">2</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-white mb-3">AI Magic</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our AI instantly searches Jiji, Jumia, and local vendors. No manual searching needed.
            </p>
          </div>

          <div className="text-center group sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl font-black text-white">3</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-white mb-3">Get Results</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Receive vendor responses with prices and locations directly to your phone. Choose and buy!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
