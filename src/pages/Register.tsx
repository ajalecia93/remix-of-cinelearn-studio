import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"student" | "creator">("student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="container-cinematic">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8 animate-fade-up">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Start Your Journey
              </h1>
              <p className="text-muted-foreground">
                Create an account to access premium content
              </p>
            </div>

            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-3 mb-8 animate-fade-up stagger-1">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  role === "student"
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🎓</span>
                  {role === "student" && (
                    <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </span>
                  )}
                </div>
                <p className="font-semibold">Student</p>
                <p className="text-xs text-muted-foreground">Learn & grow</p>
              </button>
              <button
                type="button"
                onClick={() => setRole("creator")}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  role === "creator"
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">🎬</span>
                  {role === "creator" && (
                    <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </span>
                  )}
                </div>
                <p className="font-semibold">Creator</p>
                <p className="text-xs text-muted-foreground">Teach & earn</p>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 animate-fade-up stagger-2">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full h-12 pl-12 pr-4 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-12 pl-12 pr-4 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-12 pl-12 pr-12 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Must be at least 8 characters
                </p>
              </div>

              {/* Submit */}
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Create Account
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            {/* Terms */}
            <p className="text-xs text-muted-foreground text-center mt-6 animate-fade-up stagger-3">
              By creating an account, you agree to our{" "}
              <Link to="#" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="#" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </p>

            {/* Sign In Link */}
            <p className="text-center text-muted-foreground mt-8 animate-fade-up stagger-4">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
