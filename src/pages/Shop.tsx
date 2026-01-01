import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    icon: Sparkles,
    features: [
      "Access to free episodes",
      "Community discussions",
      "Basic progress tracking",
      "Mobile app access",
    ],
    cta: "Get Started",
    variant: "glass" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For serious learners",
    icon: Zap,
    features: [
      "All free features",
      "Unlimited series access",
      "Downloadable resources",
      "Certificate of completion",
      "Priority support",
      "Ad-free experience",
    ],
    cta: "Start Pro Trial",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Creator",
    price: "$49",
    period: "per month",
    description: "For educators & creators",
    icon: Crown,
    features: [
      "All Pro features",
      "Upload unlimited content",
      "Revenue sharing (80/20)",
      "Analytics dashboard",
      "Custom branding",
      "White-label school",
    ],
    cta: "Become Creator",
    variant: "glass" as const,
    popular: false,
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-cinematic">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Simple Pricing</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 animate-fade-up stagger-1">
              Choose Your <span className="text-gradient-primary">Plan</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up stagger-2">
              Start free and upgrade anytime. No hidden fees, cancel anytime.
            </p>
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={cn(
                  "relative glass-card p-8 animate-fade-up",
                  plan.popular && "border-primary/50 shadow-lg shadow-primary/20"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <plan.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <h3 className="font-display text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ Preview */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground">
              Have questions?{" "}
              <a href="#" className="text-primary hover:underline">
                Read our FAQ
              </a>{" "}
              or{" "}
              <a href="#" className="text-primary hover:underline">
                contact support
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
