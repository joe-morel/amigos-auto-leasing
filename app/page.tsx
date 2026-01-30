import { Instagram, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/amigoslogo.svg"
              alt="Amigos Auto Leasing Logo"
              width={320}
              height={88}
              className="w-64 md:w-80 h-auto"
              priority
            />
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Coming Soon
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Skip the dealership stress —{" "}
            <span className="text-primary">let the experts handle it.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            At Amigos Auto Leasing, we make driving your next car smoother,
            faster, and smarter. Any brand. Any model. One place.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto pt-4">
            <FeatureCard
              title="Save Hours of Your Time"
              description="No more hopping from dealership to dealership."
            />
            <FeatureCard
              title="Any Brand. Any Model."
              description="Access to every major brand without the hassle."
            />
            <FeatureCard
              title="Exclusive Deals"
              description="Broker-only rates and incentives you won't find elsewhere."
            />
            <FeatureCard
              title="Expert Guidance"
              description="From picking the car to signing the keys."
            />
          </div>

          {/* CTA Section */}
          <div className="pt-8 space-y-4">
            <p className="text-foreground font-medium">
              Get in touch with us today
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* WhatsApp Button */}
              <Link
                href="https://wa.me/15512162464"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Link>

              {/* Email Button */}
              <Link
                href="mailto:geremy@amigosautoleasing.com"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </Link>

              {/* Instagram Button */}
              <Link
                href="https://instagram.com/amigosleasing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card hover:bg-secondary text-foreground border border-border px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                @amigosleasing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Amigos Auto Leasing. All rights reserved.</p>
      </footer>
    </main>
  )
}

function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-card p-4 rounded-xl border border-border text-left hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  )
}
