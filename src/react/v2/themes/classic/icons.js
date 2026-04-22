import React from 'react';

const Icon = ({ size, viewBox = '0 0 16 16', children }) => (
  <svg viewBox={viewBox} className="classic-icon" style={{ width: size + 'px' }}>
    {children}
  </svg>
);

export const Computer = ({ size = 40 }) => (
  <Icon size={size}>
    <rect x="2" y="1" width="12" height="9" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
    <rect x="3" y="2" width="10" height="7" fill="#000080" />
    <rect x="4" y="3" width="3" height="1" fill="#00ff00" />
    <rect x="4" y="5" width="6" height="1" fill="#00ff00" />
    <rect x="6" y="10" width="4" height="1" fill="#808080" />
    <rect x="4" y="11" width="8" height="1" fill="#c0c0c0" />
    <rect x="2" y="12" width="12" height="2" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
    <rect x="3" y="12.5" width="1" height="1" fill="#808080" rx="0.2" />
    <rect x="4.5" y="12.5" width="1" height="1" fill="#808080" rx="0.2" />
    <rect x="6" y="12.5" width="1" height="1" fill="#808080" rx="0.2" />
  </Icon>
);

export const Floppy = ({ size = 36 }) => (
  <Icon size={size}>
    <rect x="2" y="1" width="12" height="14" fill="#222" rx="1" />
    <rect x="4" y="1" width="8" height="5" fill="#c0c0c0" />
    <rect x="6" y="2" width="3" height="3" fill="#808080" />
    <rect x="4" y="9" width="8" height="5" fill="#eee" />
    <rect x="5" y="10" width="6" height="1" fill="#ccc" />
    <rect x="5" y="12" width="4" height="1" fill="#ccc" />
  </Icon>
);

export const Envelope = ({ size = 32 }) => (
  <Icon size={size}>
    <rect x="1" y="4" width="14" height="9" fill="#ffffcc" stroke="#000" strokeWidth="0.5" />
    <polyline points="1,4 8,9 15,4" fill="none" stroke="#cc8800" strokeWidth="0.8" />
    <polyline points="1,13 6,8.5" fill="none" stroke="#cc8800" strokeWidth="0.4" />
    <polyline points="15,13 10,8.5" fill="none" stroke="#cc8800" strokeWidth="0.4" />
  </Icon>
);

export const Cone = ({ size = 28 }) => (
  <Icon size={size}>
    <defs>
      <clipPath id="cone-clip">
        <polygon points="8,1 11,14 5,14" />
      </clipPath>
    </defs>
    <polygon points="8,1 11,14 5,14" fill="#ff6600" stroke="#cc4400" strokeWidth="0.3" />
    <rect x="5" y="5" width="6" height="1.5" fill="#ffcc00" clipPath="url(#cone-clip)" />
    <rect x="4" y="9" width="8" height="1.5" fill="#ffcc00" clipPath="url(#cone-clip)" />
    <rect x="4" y="14" width="8" height="1.5" fill="#333" />
  </Icon>
);

export const Globe = ({ size = 32 }) => (
  <Icon size={size}>
    <circle cx="8" cy="8" r="6.5" fill="#4488cc" stroke="#000" strokeWidth="0.5" />
    <ellipse cx="8" cy="8" rx="3" ry="6.5" fill="none" stroke="#88ccff" strokeWidth="0.5" />
    <line x1="1.5" y1="6" x2="14.5" y2="6" stroke="#88ccff" strokeWidth="0.5" />
    <line x1="1.5" y1="10" x2="14.5" y2="10" stroke="#88ccff" strokeWidth="0.5" />
    <path d="M3,4 Q6,5 7,8 Q6,12 4,13" fill="#44aa44" stroke="none" />
    <path d="M9,3 Q11,5 10,7 Q12,6 13,7" fill="#44aa44" stroke="none" />
    <path d="M9,9 Q10,11 12,12" fill="#44aa44" stroke="none" />
  </Icon>
);

export const StarClip = ({ size = 20 }) => (
  <Icon size={size}>
    <polygon
      points="8,1 10,6 15,6 11,9 12.5,14 8,11 3.5,14 5,9 1,6 6,6"
      fill="#ffcc00"
      stroke="#cc9900"
      strokeWidth="0.5"
    />
  </Icon>
);
