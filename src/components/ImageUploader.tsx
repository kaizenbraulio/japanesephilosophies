
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ImageUploaderProps {
  onImageSelect: (imageUrl: string) => void;
  currentImage?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect, currentImage }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImage || null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file",
        variant: "destructive",
      });
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }
    
    setIsUploading(true);
    
    // Create a temporary preview URL
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPreviewUrl(result);
      onImageSelect(result); // Pass the base64 image data to parent
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="outline"
          className="flex gap-2"
          onClick={() => document.getElementById('image-upload')?.click()}
        >
          <Upload size={16} />
          Upload Image
        </Button>
        <input
          type="file"
          id="image-upload"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        {currentImage && !previewUrl && (
          <Button
            type="button"
            variant="outline"
            className="flex gap-2"
            onClick={() => onImageSelect(currentImage)}
          >
            Use Current URL
          </Button>
        )}
      </div>
      
      {isUploading && <p className="text-sm text-yellow-500">Uploading...</p>}
      
      {previewUrl && (
        <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-md border border-gray-600">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="h-full w-full object-cover"
          />
          <Button
            type="button"
            size="sm"
            variant="destructive"
            className="absolute top-2 right-2"
            onClick={() => {
              setPreviewUrl(null);
              onImageSelect("");
            }}
          >
            Remove
          </Button>
        </div>
      )}
      
      <div className="flex gap-2 items-center">
        <ImageIcon size={16} className="text-gray-400" />
        <p className="text-xs text-gray-400">
          Supported formats: JPG, PNG, GIF, WEBP (max 5MB)
        </p>
      </div>
    </div>
  );
};

export default ImageUploader;
