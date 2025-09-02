interface DiagonalDividerProps {
  direction?: "top" | "bottom";
  color?: string;
  backgroundColor?: string;
  height?: number;
}

const DiagonalDivider: React.FC<DiagonalDividerProps> = ({
  direction = "top",
  color = "#f9fafb",
  backgroundColor = "white",
  height = 100,
}) => {
  const isTop = direction === "top";

  return (
    <div
      className={`diagonal-divider ${
        isTop ? "diagonal-divider-top" : "diagonal-divider-bottom"
      }`}
      style={{ height: `${height}px` }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox={`0 0 100 ${height}`}
      >
        {isTop ? (
          <>
            {/* Top divider: white on top, gray on bottom */}
            <polygon
              points={`0,0 100,0 100,0 0,${height}`}
              fill={backgroundColor}
            />
            <polygon points={`0,${height} 100,0 100,${height} 0,${height}`} fill={color} />
          </>
        ) : (
          <>
            {/* Bottom divider: mirrored horizontally - slopes down from left to right */}
            <polygon points={`0,${height} 100,0 100,0 0,0`} fill={color} />
            <polygon points={`0,${height} 100,0 100,${height} 0,${height}`} fill={backgroundColor} />
          </>
        )}
      </svg>
    </div>
  );
};

export default DiagonalDivider;