
import { Globe, Sparkles } from "lucide-react";

const Logo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16"
  };

  const iconSize = {
    small: 16,
    default: 24,
    large: 32
  };

  const textSize = {
    small: "text-lg",
    default: "text-2xl",
    large: "text-4xl"
  };

  return (
    <div className="flex items-center space-x-3">
      <div className={`${sizeClasses[size]} relative`}>
        {/* Background circle with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-90"></div>
        
        {/* Main icon */}
        <div className="relative flex items-center justify-center w-full h-full">
          <Globe className="text-white" size={iconSize[size]} />
        </div>
        
        {/* Floating sparkle */}
        <div className="absolute -top-1 -right-1">
          <Sparkles className="text-accent animate-float" size={iconSize[size] * 0.4} />
        </div>
      </div>
      
      <div className={`font-bold ${textSize[size]}`}>
        <span className="gradient-text">perfil</span>
        <span className="text-foreground">.store</span>
      </div>
    </div>
  );
};

export default Logo;
