
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { philosophies } from "@/data/philosophies";
import { motion } from "framer-motion";

const PhilosophyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const philosophy = philosophies.find((p) => p.id === id);

  useEffect(() => {
    if (!philosophy) {
      navigate("/");
    }
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [philosophy, navigate]);

  if (!philosophy) return null;

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="dark-card p-6 rounded-lg"
        >
          <div className="mb-8 overflow-hidden rounded-lg h-64 md:h-96">
            <img
              src={philosophy.image}
              alt={philosophy.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-sm text-secondary-DEFAULT mb-2">
            {philosophy.category}
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
      </main>
    </div>
  );
};

export default PhilosophyDetail;
