import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

export default function SunGlow({ size = 120 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      <Defs>
        <RadialGradient
          id="sunGlow"
          cx="50%"
          cy="50%"
          r="50%"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#FFE9A8" stopOpacity="0.8" />
          <Stop offset="60%" stopColor="#FFE9A8" stopOpacity="0.35" />
          <Stop offset="100%" stopColor="#FFE9A8" stopOpacity="0" />
        </RadialGradient>
      </Defs>

      <Rect width="120" height="120" fill="url(#sunGlow)" />
    </Svg>
  );
}
