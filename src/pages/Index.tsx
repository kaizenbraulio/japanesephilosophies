
import React from "react";
import Header from "@/components/Header";
import PhilosophyCard from "@/components/PhilosophyCard";
import { philosophies } from "@/data/philosophies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
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
