
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface PhilosophyCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const PhilosophyCard = ({ id, title, description, image, category }: PhilosophyCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/philosophy/${id}`);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark-card h-full">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader className="p-4">
          <div className="text-sm text-secondary-DEFAULT mb-2">{category}</div>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-gray-400">{description}</p>
          <p className="mt-4 text-sm text-secondary-DEFAULT">Click to read more →</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PhilosophyCard;
