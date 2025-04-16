
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { Loader2, AlertCircle, Mail } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Auth = () => {
  const navigate = useNavigate();
  const { signIn, signUp, user, loading: authLoading } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [confirmationSent, setConfirmationSent] = useState(false);

  useEffect(() => {
    // Redirect if user is already authenticated
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccessMessage("");
    setConfirmationSent(false);

    try {
      if (isSignUp) {
        const result = await signUp(email, password);
        // Check if confirmation email was sent (based on confirmation_sent_at field)
        if (result?.user?.confirmation_sent_at) {
          setConfirmationSent(true);
          setSuccessMessage("Account created! Please check your email for verification instructions.");
        } else {
          // If no confirmation email was sent, the user might be automatically confirmed
          setSuccessMessage("Account created! You can now sign in.");
        }
        // Don't navigate away immediately for signup, as we want to show the success message
      } else {
        await signIn(email, password);
        // Navigate happens automatically via the useEffect when user is set
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      setError(err.message || "An error occurred during authentication");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto dark-card">
          <CardHeader>
            <CardTitle className="text-primary">
              {isSignUp ? "Create Account" : "Sign In"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {successMessage && (
              <Alert className="mb-4 bg-green-500/20 text-green-500 border-green-500/50">
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}

            {confirmationSent && (
              <Alert className="mb-4 bg-blue-500/20 text-blue-500 border-blue-500/50">
                <Mail className="h-4 w-4 mr-2" />
                <AlertDescription>
                  Confirmation email sent to {email}. Please check your inbox and spam folder.
                  <p className="text-xs mt-1">
                    Note: For testing, you may want to disable email confirmation in the Supabase dashboard.
                  </p>
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  disabled={isSubmitting}
                />
                {isSignUp && (
                  <p className="text-xs text-gray-400 mt-1">
                    Password must be at least 6 characters
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <Button
              type="button"
              variant="link"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
                setSuccessMessage("");
                setConfirmationSent(false);
              }}
              disabled={isSubmitting}
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign up"}
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default Auth;
