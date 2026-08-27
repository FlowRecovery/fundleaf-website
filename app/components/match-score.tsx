import type { MatchLevel } from "../../lib/types";

interface MatchScoreProps {
  score: number;
  level: MatchLevel;
  size?: "sm" | "md";
}

export default function MatchScore({ score, level, size = "md" }: MatchScoreProps) {
  const colorMap: Record<MatchLevel, string> = {
    strong: "var(--fl-olive)",
    good: "var(--fl-sage)",
    uncertain: "var(--fl-stone)",
    weak: "var(--fl-stone)",
  };

  return (
    <span
      className={`match-score match-score--${size} match-score--${level}`}
      style={{ borderColor: colorMap[level] }}
    >
      <span
        className="match-score-num"
        style={{ color: colorMap[level] }}
      >
        {score}%
      </span>
      <span className="match-score-label">
        {level === "strong" && "Strong fit"}
        {level === "good" && "Good fit"}
        {level === "uncertain" && "Check fit"}
        {level === "weak" && "Weak fit"}
      </span>
    </span>
  );
}
