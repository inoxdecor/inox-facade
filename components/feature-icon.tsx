import {
  AudioLines,
  Brush,
  CloudRain,
  Columns3,
  Cylinder,
  Feather,
  Gem,
  LayoutPanelTop,
  Leaf,
  PanelsTopLeft,
  PencilRuler,
  Recycle,
  Ruler,
  Settings2,
  Shapes,
  Shield,
  SlidersHorizontal,
  Sprout,
  Sun,
  Timer,
  type LucideIcon,
} from "lucide-react";

const featureIcons: Record<string, LucideIcon> = {
  "Sleek & modern": PanelsTopLeft,
  "Weather resistant": CloudRain,
  "Durable aluminium": Shield,
  "Low maintenance": Brush,
  "Design flexibility": SlidersHorizontal,
  "Sustainable choice": Recycle,
  "Modern aesthetic": PanelsTopLeft,
  "Structural strength": Columns3,
  "Premium aluminium": Gem,
  "Precision engineered": Ruler,
  "Natural light & ventilation": Sun,
  "Strength & durability": Shield,
  "Acoustic & thermal benefits": AudioLines,
  Customisable: Settings2,
  "Distinctive design": Shapes,
  "Durable performance": Timer,
  "Lightweight construction": Feather,
  "Architectural flexibility": LayoutPanelTop,
  "Custom design possibilities": PencilRuler,
  "Natural bamboo aesthetic": Sprout,
  "Aluminium core": Cylinder,
  "Eco-conscious design": Leaf,
};

export function FeatureIcon({ title }: { title: string }) {
  const Icon = featureIcons[title] ?? Shapes;
  return <Icon size={28} strokeWidth={1.25} aria-hidden="true" />;
}
