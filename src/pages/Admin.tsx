import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Philosophy, addPhilosophy } from "@/data/philosophies";
import PhilosophyForm from "@/components/PhilosophyForm";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";
import ChangePasswordForm from "@/components/ChangePasswordForm";

type Profile = Database['public']['Tables']['profiles']['Row'];

const Admin = () => {
  const navigate = useNavigate();
  const { user, profile, isAdmin } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    if (profile !== null) {
      setLoading(false);
      
      if (!isAdmin) {
        toast({
          title: "Access denied",
          description: "You don't have permission to access the admin section",
          variant: "destructive",
        });
        navigate("/");
      }
    }
  }, [user, profile, isAdmin, navigate]);

  const handleAddPhilosophy = (newPhilosophy: Omit<Philosophy, "id">) => {
    const id = newPhilosophy.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    
    const philosophyWithId = {
      ...newPhilosophy,
      id,
    };
    
    addPhilosophy(philosophyWithId);
    
    toast({
      title: "Philosophy added",
      description: `${newPhilosophy.title} has been added successfully.`,
    });
    
    console.log("Added new philosophy:", philosophyWithId);
  };

  const handlePromoteToAdmin = async (email: string) => {
    try {
      const { data: userData, error: userError } = await supabase
        .from('profiles')
        .select('id, email, role')
        .eq('email', email)
        .single();
      
      if (userError) {
        throw new Error(`User not found: ${userError.message}`);
      }
      
      if (userData) {
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ role: 'admin' })
          .eq('id', userData.id);
          
        if (updateError) {
          throw new Error(`Failed to update role: ${updateError.message}`);
        }
        
        toast({
          title: "User promoted",
          description: `${email} has been promoted to admin.`,
        });
      }
    } catch (error: any) {
      console.error('Error promoting user:', error);
      toast({
        title: "Failed to promote user",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 flex justify-center items-center">
          <p>Loading...</p>
        </main>
      </div>
    );
  }

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
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Add New Philosophy</h2>
            <PhilosophyForm onSubmit={handleAddPhilosophy} />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Admin Controls</h2>
            <Card className="dark-card mb-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Promote User to Admin</h3>
                <div className="space-y-4">
                  <AdminPromoteForm onPromote={handlePromoteToAdmin} />
                </div>
              </CardContent>
            </Card>
            
            <ChangePasswordForm />
          </div>
        </div>
      </main>
    </div>
  );
};

const AdminPromoteForm = ({ onPromote }: { onPromote: (email: string) => Promise<void> }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      await onPromote(email);
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="admin-email" className="text-sm font-medium text-gray-300">
          User Email
        </label>
        <div className="flex gap-2">
          <Input
            id="admin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            disabled={isSubmitting}
            className="flex-grow"
          />
          <Button type="submit" disabled={isSubmitting || !email}>
            {isSubmitting ? "Processing..." : "Promote"}
          </Button>
        </div>
        <p className="text-xs text-gray-400">
          This will grant admin privileges to the user with this email address
        </p>
      </div>
    </form>
  );
};

export default Admin;
