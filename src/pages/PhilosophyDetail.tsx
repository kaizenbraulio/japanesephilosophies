
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit } from "lucide-react";
import { philosophies } from "@/data/philosophies";
import { motion } from "framer-motion";
import PhilosophyForm from "@/components/PhilosophyForm";

const PhilosophyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const philosophy = philosophies.find((p) => p.id === id);
  const [isEditing, setIsEditing] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!philosophy) {
      navigate("/");
    }
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [philosophy, navigate]);

  if (!philosophy) return null;

  // Handle philosophy update
  const handleUpdatePhilosophy = (updatedPhilosophy) => {
    // Find the index of the philosophy in the array
    const index = philosophies.findIndex(p => p.id === philosophy.id);
    
    if (index !== -1) {
      // Update the philosophy in the array
      philosophies[index] = {
        ...updatedPhilosophy,
        id: philosophy.id // Preserve the original ID
      };
      
      setIsEditing(false);
    }
  };

  // Handle admin authentication
  const handleAdminAuth = () => {
    const password = prompt("Enter admin password:");
    if (password === "admin123") {
      setIsAuthenticated(true);
      setIsEditing(true);
    } else if (password !== null) {
      alert("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} />
          Back
        </Button>

        {!isEditing ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="dark-card p-6 rounded-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm text-secondary-DEFAULT">
                {philosophy.category}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={isAuthenticated ? () => setIsEditing(true) : handleAdminAuth}
              >
                <Edit size={16} />
                Edit Philosophy
              </Button>
            </div>

            <div className="mb-8 overflow-hidden rounded-lg h-64 md:h-96">
              <img
                src={philosophy.image}
                alt={philosophy.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {philosophy.title}
            </h1>
            
            <div className="space-y-4 text-gray-300">
              {philosophy.fullDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {philosophy.principles && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-primary mb-4">Key Principles</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {philosophy.principles.map((principle, index) => (
                    <li key={index}>{principle}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ) : (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">Edit Philosophy</h2>
              <Button 
                variant="ghost"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
            <PhilosophyForm 
              onSubmit={handleUpdatePhilosophy} 
              initialValues={philosophy}
              isEditing={true}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default PhilosophyDetail;
