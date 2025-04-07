
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import PhilosophyCard from "@/components/PhilosophyCard";
import { philosophies } from "@/data/philosophies";
import { Button } from "@/components/ui/button";
import { ShieldCheck, LogIn, LogOut, UserPlus } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const { user, isAdmin, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-end mb-8 gap-2">
          {user ? (
            <>
              {isAdmin && (
                <Link to="/admin">
                  <Button variant="outline" className="flex gap-2 items-center">
                    <ShieldCheck size={16} />
                    Admin Dashboard
                  </Button>
                </Link>
              )}
              <Button variant="outline" className="flex gap-2 items-center" onClick={() => signOut()}>
                <LogOut size={16} />
                Sign Out
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button variant="outline" className="flex gap-2 items-center">
                <LogIn size={16} />
                Sign In
              </Button>
            </Link>
          )}
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 text-primary border-b border-gray-700 pb-2">
          Browse Japanese Philosophies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <PhilosophyCard
              key={index}
              id={philosophy.id}
              title={philosophy.title}
              description={philosophy.description}
              image={philosophy.image}
              category={philosophy.category}
            />
          ))}
        </div>
      </main>
      
      <footer className="bg-accent/30 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Japanese Philosophy Collection</p>
          <p className="mt-2">A curated collection of timeless Japanese philosophical concepts</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
