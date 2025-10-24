import React from "react";

export interface EcoBubbleOneEyeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const EcoBubbleOneEye: React.FC<EcoBubbleOneEyeProps> = ({ size = 32, className = "", ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Logomarca Eco - bolha com um olho"
      {...props}
    >
      <defs>
        <radialGradient id="eco-bubble" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="rgba(0, 122, 255, 0.18)" />
          <stop offset="55%" stopColor="rgba(0, 122, 255, 0.08)" />
          <stop offset="100%" stopColor="rgba(0, 122, 255, 0)" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="url(#eco-bubble)" />
      <circle cx="32" cy="32" r="23" fill="#FFFFFF" stroke="rgba(17, 24, 39, 0.1)" strokeWidth="2" />
      <circle cx="32" cy="28" r="12" fill="#007AFF" opacity="0.16" />
      <circle cx="32" cy="30" r="9" stroke="#007AFF" strokeWidth="2" fill="white" />
      <circle cx="32" cy="30" r="4" fill="#111827" opacity="0.9" />
      <circle cx="33" cy="28.5" r="1.6" fill="white" opacity="0.9" />
    </svg>
  );
};

export default EcoBubbleOneEye;
