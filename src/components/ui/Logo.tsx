export default function Logo({
  size = 'md',
  variant = 'color',
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'color' | 'white';
}) {
  const sizeMap = {
    sm: { w: 28, h: 28 },
    md: { w: 36, h: 36 },
    lg: { w: 44, h: 44 },
    xl: { w: 56, h: 56 },
  };
  const { w, h } = sizeMap[size];
  const isWhite = variant === 'white';

  // Minimal: clean paw print inside a rounded square
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        fill={isWhite ? 'rgba(255,255,255,0.12)' : '#0f766e'}
      />
      {/* Paw pad */}
      <ellipse cx="20" cy="24" rx="5.5" ry="4.5" fill={isWhite ? 'rgba(255,255,255,0.9)' : 'white'} />
      {/* Toes */}
      <circle cx="13" cy="17" r="2.8" fill={isWhite ? 'rgba(255,255,255,0.9)' : 'white'} />
      <circle cx="27" cy="17" r="2.8" fill={isWhite ? 'rgba(255,255,255,0.9)' : 'white'} />
      <circle cx="17" cy="12.5" r="2.5" fill={isWhite ? 'rgba(255,255,255,0.9)' : 'white'} />
      <circle cx="23" cy="12.5" r="2.5" fill={isWhite ? 'rgba(255,255,255,0.9)' : 'white'} />
      {/* Small plus / medical cross inside the pad */}
      <rect x="19" y="21.5" width="2" height="5" rx="0.5" fill={isWhite ? 'rgba(255,255,255,0.12)' : '#0f766e'} />
      <rect x="17.5" y="23" width="5" height="2" rx="0.5" fill={isWhite ? 'rgba(255,255,255,0.12)' : '#0f766e'} />
    </svg>
  );
}
