import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Loader2, ArrowLeft, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setIsLoading(false);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to send reset email. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="container-cinematic">
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8 animate-fade-up">
                  <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
                    Reset Password
                  </h1>
                  <p className="text-muted-foreground">
                    Enter your email and we'll send you a link to reset your password
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 animate-fade-up stagger-1">
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
                        disabled={isLoading}
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground disabled:opacity-50"
                      />
                    </div>
                    {error && (
                      <p className="text-sm text-destructive mt-1">{error}</p>
                    )}
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Reset Link
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Back to Login */}
                <p className="text-center text-muted-foreground mt-8 animate-fade-up stagger-2">
                  <Link to="/login" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Sign In
                  </Link>
                </p>
              </>
            ) : (
              /* Success State */
              <div className="text-center animate-fade-up">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
                  Check Your Email
                </h1>
                <p className="text-muted-foreground mb-8">
                  We've sent a password reset link to <span className="text-foreground font-medium">{email}</span>
                </p>
                <Link to="/login">
                  <Button variant="hero" size="lg">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Sign In
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
