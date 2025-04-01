
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { philosophies, Philosophy } from "@/data/philosophies";
import PhilosophyForm from "@/components/PhilosophyForm";

const Admin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // In a real app, this would be a secure authentication system
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") { // This is just for demo purposes
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "You can now add new philosophies",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  const handleAddPhilosophy = (newPhilosophy: Omit<Philosophy, "id">) => {
    // Generate a slug-like ID from the title
    const id = newPhilosophy.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    
    // In a real app, this would be an API call to update a database
    // For demo purposes, we're just adding to the in-memory array
    philosophies.push({
      ...newPhilosophy,
      id,
    });
    
    toast({
      title: "Philosophy added",
      description: `${newPhilosophy.title} has been added successfully.`,
    });
    
    // In a real app, this would persist the data
    console.log("Added new philosophy:", newPhilosophy);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Button>

        <h1 className="text-3xl font-bold mb-6 text-primary">Admin Dashboard</h1>
        
        {!isAuthenticated ? (
          <Card className="max-w-md mx-auto dark-card">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 text-primary">Admin Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full p-2 rounded-md border border-gray-600 bg-background text-foreground"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                  />
                  <p className="text-xs text-gray-400">Use "admin123" for this demo</p>
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <PhilosophyForm onSubmit={handleAddPhilosophy} />
        )}
      </main>
    </div>
  );
};

export default Admin;
