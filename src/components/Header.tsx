
import React from "react";

const Header = () => {
  return (
    <header className="py-8 bg-accent text-primary">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Japanese Philosophies
        </h1>
        <p className="text-center text-lg text-secondary-DEFAULT max-w-2xl mx-auto">
          Explore the ancient wisdom and timeless teachings of Japanese philosophical traditions
        </p>
      </div>
    </header>
  );
};

export default Header;
