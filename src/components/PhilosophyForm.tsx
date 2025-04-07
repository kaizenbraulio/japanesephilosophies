
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Philosophy } from "@/data/philosophies";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageUploader from "@/components/ImageUploader";
import { toast } from "@/hooks/use-toast";

interface PhilosophyFormProps {
  onSubmit: (philosophy: Omit<Philosophy, "id">) => void;
}

const PhilosophyForm: React.FC<PhilosophyFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Omit<Philosophy, "id">>({
    title: "",
    description: "",
    fullDescription: [""],
    image: "",
    category: "",
    principles: [""],
  });
  
  const [useImageUrl, setUseImageUrl] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update the handleArrayChange function to accept both InputElement and TextareaElement events
  const handleArrayChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: "fullDescription" | "principles",
    index: number
  ) => {
    const newArray = [...(formData[field] || [])];
    newArray[index] = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field: "fullDescription" | "principles") => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] || []), ""],
    }));
  };

  const removeArrayItem = (field: "fullDescription" | "principles", index: number) => {
    const newArray = [...(formData[field] || [])];
    if (newArray.length > 1) {
      newArray.splice(index, 1);
      setFormData((prev) => ({ ...prev, [field]: newArray }));
    }
  };
  
  const handleImageSelect = (imageUrl: string) => {
    setFormData((prev) => ({ ...prev, image: imageUrl }));
  };
  
  const toggleImageInput = () => {
    setUseImageUrl(!useImageUrl);
    if (formData.image) {
      // When toggling, we'll reset the image to avoid confusion
      setFormData((prev) => ({ ...prev, image: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate image exists
    if (!formData.image) {
      toast({
        title: "Image required",
        description: "Please upload an image or provide an image URL",
        variant: "destructive",
      });
      return;
    }
    
    onSubmit(formData);
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      fullDescription: [""],
      image: "",
      category: "",
      principles: [""],
    });
    setUseImageUrl(false);
  };

  return (
    <Card className="dark-card">
      <CardHeader>
        <CardTitle className="text-primary">Add New Philosophy</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-gray-300">
              Title
            </label>
            <Input
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-600 bg-background text-foreground"
              placeholder="e.g., Mono no Aware (物の哀れ)"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-gray-300">
              Category
            </label>
            <Input
              id="category"
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-600 bg-background text-foreground"
              placeholder="e.g., Aesthetics, Ethics, Buddhism"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-gray-300">
              Short Description
            </label>
            <Textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={2}
              className="w-full p-2 rounded-md border border-gray-600 bg-background text-foreground"
              placeholder="Brief description (will appear on cards)"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Philosophy Image
            </label>
            <div className="flex items-center gap-2 mb-2">
              <Button 
                type="button" 
                variant={!useImageUrl ? "default" : "outline"} 
                size="sm" 
                onClick={() => setUseImageUrl(false)}
              >
                Upload Image
              </Button>
              <Button 
                type="button" 
                variant={useImageUrl ? "default" : "outline"} 
                size="sm" 
                onClick={() => setUseImageUrl(true)}
              >
                Use Image URL
              </Button>
            </div>
            
            {useImageUrl ? (
              <div className="space-y-2">
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md border border-gray-600 bg-background text-foreground"
                  placeholder="https://example.com/image.jpg"
                />
                <p className="text-xs text-gray-400">
                  Tip: You can use Unsplash images like https://images.unsplash.com/photo-id
                </p>
                
                {formData.image && (
                  <div className="mt-2 aspect-video w-full max-w-md overflow-hidden rounded-md border border-gray-600">
                    <img 
                      src={formData.image} 
                      alt="Preview" 
                      className="h-full w-full object-cover"
                      onError={() => {
                        toast({
                          title: "Invalid image URL",
                          description: "Please provide a valid image URL",
                          variant: "destructive",
                        });
                        setFormData((prev) => ({ ...prev, image: "" }));
                      }}
                    />
                  </div>
                )}
              </div>
            ) : (
              <ImageUploader onImageSelect={handleImageSelect} />
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Full Description (Paragraphs)
            </label>
            {formData.fullDescription.map((paragraph, index) => (
              <div key={index} className="flex gap-2">
                <Textarea
                  value={paragraph}
                  onChange={(e) => handleArrayChange(e, "fullDescription", index)}
                  rows={3}
                  className="w-full p-2 rounded-md border border-gray-600 bg-background text-foreground"
                  placeholder={`Paragraph ${index + 1}`}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => removeArrayItem("fullDescription", index)}
                  disabled={formData.fullDescription.length <= 1}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addArrayItem("fullDescription")}
            >
              Add Paragraph
            </Button>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Key Principles
            </label>
            {formData.principles.map((principle, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={principle}
                  onChange={(e) => handleArrayChange(e, "principles", index)}
                  className="w-full p-2 rounded-md border border-gray-600 bg-background text-foreground"
                  placeholder={`Principle ${index + 1}`}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => removeArrayItem("principles", index)}
                  disabled={formData.principles.length <= 1}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addArrayItem("principles")}
            >
              Add Principle
            </Button>
          </div>

          <Button type="submit" className="w-full">
            Add Philosophy
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PhilosophyForm;
