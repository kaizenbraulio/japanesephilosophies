import React from "react";
import Header from "@/components/Header";
import PhilosophyCard from "@/components/PhilosophyCard";

const philosophies = [
  {
    title: "Wabi-Sabi (侘寂)",
    description: "The art of finding beauty in imperfection and accepting life's impermanence.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    category: "Aesthetics",
  },
  {
    title: "Ikigai (生き甲斐)",
    description: "The concept of finding purpose in life through the intersection of passion, mission, profession, and vocation.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    category: "Life Philosophy",
  },
  {
    title: "Zen (禅)",
    description: "The practice of achieving enlightenment through direct intuition and meditation.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Buddhism",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <PhilosophyCard
              key={index}
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