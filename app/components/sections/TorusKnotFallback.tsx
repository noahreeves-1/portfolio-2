"use client";

interface TorusKnotFallbackProps {
  primary?: string;
  secondary?: string;
  className?: string;
}

const TorusKnotFallback = ({ 
  primary = "#1a1a2e",
  secondary = "#00ffff",
  className = ""
}: TorusKnotFallbackProps) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[300px] max-h-[300px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="torusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3f4f6" stopOpacity="1" />
            <stop offset="25%" stopColor="#d1d5db" stopOpacity="1" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
            <stop offset="75%" stopColor="#d1d5db" stopOpacity="1" />
            <stop offset="100%" stopColor="#f3f4f6" stopOpacity="1" />
          </linearGradient>
          <filter id="torusShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feFlood floodColor="#000000" floodOpacity="0.1"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Simplified torus knot shape */}
        <g transform="translate(200,200)" filter="url(#torusShadow)">
          <path
            d="M 80,0 
               C 80,-44 44,-80 0,-80 
               C -44,-80 -80,-44 -80,0
               C -80,20 -70,38 -52,52
               C -38,70 -20,80 0,80
               C 20,80 38,70 52,52
               C 70,38 80,20 80,0
               Z
               M 60,0
               C 60,-33 33,-60 0,-60
               C -33,-60 -60,-33 -60,0
               C -60,15 -52,28 -39,39
               C -28,52 -15,60 0,60
               C 15,60 28,52 39,39
               C 52,28 60,15 60,0
               Z"
            fill="url(#torusGradient)"
            opacity="0.9"
            transform="rotate(25)"
          />
          
          {/* Inner knot detail */}
          <path
            d="M 40,0 
               C 40,-22 22,-40 0,-40
               C -22,-40 -40,-22 -40,0
               C -40,22 -22,40 0,40
               C 22,40 40,22 40,0
               Z
               M 20,0
               C 20,-11 11,-20 0,-20
               C -11,-20 -20,-11 -20,0
               C -20,11 -11,20 0,20
               C 11,20 20,11 20,0
               Z"
            fill={primary}
            opacity="0.5"
            transform="rotate(-15)"
          />
          
          {/* Highlight for depth */}
          <ellipse
            cx="-20"
            cy="-20"
            rx="15"
            ry="10"
            fill="white"
            opacity="0.3"
            transform="rotate(45)"
          />
        </g>
      </svg>
    </div>
  );
};

export default TorusKnotFallback;