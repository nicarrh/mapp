import { ActivityIndicator, ColorValue } from "react-native";

export default function Loading({ color }: { color?: string | ColorValue }) {
  return <ActivityIndicator size='large' color={color ?? "#CEC2EB"} />;
}
