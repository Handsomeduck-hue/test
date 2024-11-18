import { motion } from 'framer-motion';

interface ShapeProps {
  shape: string;
  color: string;
  pattern: string;
  className?: string;
}

export function Shape({ shape, color, pattern, className = '' }: ShapeProps) {
  const getPatternDef = () => {
    switch (pattern) {
      case 'striped':
        return (
          <pattern
            id={`stripe-${color}`}
            patternUnits="userSpaceOnUse"
            width="8"
            height="8"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke={color}
              strokeWidth="4"
            />
          </pattern>
        );
      case 'dotted':
        return (
          <pattern
            id={`dots-${color}`}
            patternUnits="userSpaceOnUse"
            width="8"
            height="8"
          >
            <circle cx="4" cy="4" r="2" fill={color} />
          </pattern>
        );
      case 'dashed':
        return (
          <pattern
            id={`dash-${color}`}
            patternUnits="userSpaceOnUse"
            width="16"
            height="16"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="8"
              y2="0"
              stroke={color}
              strokeWidth="4"
            />
          </pattern>
        );
      default:
        return null;
    }
  };

  const getFill = () => {
    if (pattern === 'solid') return color;
    return `url(#${pattern}-${color})`;
  };

  const getPath = () => {
    switch (shape) {
      case 'circle':
        return <circle cx="50" cy="50" r="40" />;
      case 'square':
        return <rect x="10" y="10" width="80" height="80" />;
      case 'triangle':
        return <polygon points="50,10 90,90 10,90" />;
      case 'star':
        return (
          <path d="M50,10 L61,40 L93,40 L67,60 L77,90 L50,70 L23,90 L33,60 L7,40 L39,40 Z" />
        );
      default:
        return null;
    }
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`w-full h-full ${className}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <defs>{getPatternDef()}</defs>
      <g fill={getFill()}>{getPath()}</g>
    </motion.svg>
  );
}