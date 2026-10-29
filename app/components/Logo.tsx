"use client";

export default function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ========================================================
           GRID & 'Y' EMBLEM (Offset toward upper right)
      ======================================================== */}
      <g id="Emblem" transform="translate(525, 20)">
        {/* Outer Frame */}
        <rect x="0" y="0" width="210" height="200" fill="none" stroke="#111318" strokeWidth="6" />

        {/* Structural Wireframe Grid Lines */}
        <path
          d="
            M35 0v200 M70 0v200 M105 0v200 M140 0v200 M175 0v200
            M0 33h210 M0 66h210 M0 100h210 M0 133h210 M0 166h210
          "
          stroke="#111318"
          strokeWidth="3.5"
        />

        {/* Left Upper Arm of Y (Solid Black) */}
        <polygon points="5,5 80,5 78,80 5,5" fill="#111318" />

        {/* Sweeping Right Arm & Stem of Y */}
        <path
          d="
            M80 5 
            L205 5 
            L205 16 
            L145 98 
            Q132 116 142 134 
            L188 200 
            L122 200 
            L82 126 
            Q66 98 80 80 
            Z
          "
          fill="#FFFFFF"
          stroke="#111318"
          strokeWidth="5"
        />
      </g>

      {/* ========================================================
           YASH (Heavy Slanted Italic Sans)
      ======================================================== */}
      <text
        x="55"
        y="336"
        fontFamily="'Barlow Condensed', 'Arial Black', sans-serif"
        fontSize="128"
        fontWeight="900"
        fontStyle="italic"
        letterSpacing="2"
        textLength="400"
        lengthAdjust="spacingAndGlyphs"
        fill="#111318"
      >
        YASH
      </text>

      {/* ========================================================
           CONSTRUCTION (Original #E41B76 Magenta Badge)
      ======================================================== */}
      <g id="ConstructionBadge" transform="translate(485, 246)">
        <rect x="0" y="0" width="475" height="90" rx="3" fill="#E41B76" />
        <text
          x="237"
          y="68"
          textAnchor="middle"
          fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
          fontSize="72"
          fontWeight="900"
          letterSpacing="7"
          textLength="435"
          lengthAdjust="spacing"
          fill="#FFFFFF"
        >
          CONSTRUCTION
        </text>
      </g>

      {/* ========================================================
           SUBTITLE: APPROVED GOVERNMENT CONTRACTOR
      ======================================================== */}
      <text
        x="58"
        y="410"
        fontFamily="'Barlow Condensed', 'Arial Black', sans-serif"
        fontSize="44"
        fontWeight="800"
        letterSpacing="5.5"
        textLength="900"
        lengthAdjust="spacing"
        fill="#111318"
      >
        APPROVED GOVERNMENT CONTRACTOR
      </text>
    </svg>
  );
}