
import { Zap, Circle } from "lucide-react";

const BeaconLogo = ({
  size = "default"
}: {
  size?: "small" | "default" | "large";
}) => {
  const sizeClasses = {
    small: "w-6 h-6 md:w-8 md:h-8",
    default: "w-8 h-8 md:w-12 md:h-12",
    large: "w-12 h-12 md:w-16 md:h-16"
  };
  
  const iconSize = {
    small: 12,
    default: 16,
    large: 20
  };
  
  const iconSizeMd = {
    small: 16,
    default: 24,
    large: 32
  };
  
  const textSize = {
    small: "text-base md:text-lg",
    default: "text-lg md:text-2xl",
    large: "text-2xl md:text-4xl"
  };

  return (
    <div className="flex items-center space-x-2 md:space-x-3">
      <div className={`${sizeClasses[size]} relative`}>
        {/* Background circle with beacon glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl beacon-glow"></div>
        
        {/* Main beacon icon */}
        <div className="relative flex items-center justify-center w-full h-full">
          <Circle className="text-primary-foreground absolute block md:hidden" size={iconSize[size] * 0.7} />
          <Circle className="text-primary-foreground absolute hidden md:block" size={iconSizeMd[size] * 0.7} />
          <Zap className="text-primary-foreground relative z-10 block md:hidden" size={iconSize[size] * 0.5} />
          <Zap className="text-primary-foreground relative z-10 hidden md:block" size={iconSizeMd[size] * 0.5} />
        </div>
        
        {/* Pulsing ring */}
        <div className="absolute -inset-1 bg-primary/30 rounded-2xl animate-ping"></div>
      </div>
      
      <div className={`font-playfair font-bold ${textSize[size]}`}>
        <span className="gradient-text">Perfil</span>
        <span className="text-beacon-text-title">.beacon</span>
      </div>
    </div>
  );
};

export default BeaconLogo;
