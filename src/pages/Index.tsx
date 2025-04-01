
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import PhilosophyCard from "@/components/PhilosophyCard";
import { philosophies } from "@/data/philosophies";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-end mb-8">
          <Link to="/admin">
            <Button variant="outline" className="flex gap-2 items-center">
              <ShieldCheck size={16} />
              Admin Dashboard
            </Button>
          </Link>
        </div>
        
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
    </div>
  );
};

export default Index;
