import {
  Palette,
  Type,
  Maximize,
  Layers,
  Sparkles,
  MousePointerClick,
  TextCursorInput,
  ChevronDown,
  CheckSquare,
  CircleDot,
  ToggleRight,
  CreditCard,
  Tag,
  FolderKanban,
  MessageSquare,
  Menu,
  AppWindow,
  Bell,
  TableIcon,
} from "lucide-react";
import type { ReactNode } from "react";

export interface FoundationItem {
  name: string;
  icon: ReactNode;
}

export const FOUNDATIONS_DATA: Array<FoundationItem> = [
  { name: "Colors", icon: <Palette className="w-4 h-4 mr-2" /> },
  { name: "Typography", icon: <Type className="w-4 h-4 mr-2" /> },
  { name: "Spacing & Layout", icon: <Maximize className="w-4 h-4 mr-2" /> },
  { name: "Shadows & Elevation", icon: <Layers className="w-4 h-4 mr-2" /> },
  { name: "Icons", icon: <Sparkles className="w-4 h-4 mr-2" /> },
];

export const COMPONENTS_DATA: Array<FoundationItem> = [
  { name: "Buttons", icon: <MousePointerClick className="w-4 h-4 mr-2" /> },
  { name: "Inputs", icon: <TextCursorInput className="w-4 h-4 mr-2" /> },
  { name: "Select", icon: <ChevronDown className="w-4 h-4 mr-2" /> },
  { name: "Checkbox", icon: <CheckSquare className="w-4 h-4 mr-2" /> },
  { name: "Ragio Group", icon: <CircleDot className="w-4 h-4 mr-2" /> },
  { name: "switch", icon: <ToggleRight className="w-4 h-4 mr-2" /> },
  { name: "Card", icon: <CreditCard className="w-4 h-4 mr-2" /> },
  { name: "Badge & Status", icon: <Tag className="w-4 h-4 mr-2" /> },
  { name: "Tabs", icon: <FolderKanban className="w-4 h-4 mr-2" /> },
  { name: "Tooltip", icon: <MessageSquare className="w-4 h-4 mr-2" /> },
  { name: "Dropdown Menu", icon: <Menu className="w-4 h-4 mr-2" /> },
  { name: "Dialog/Modal", icon: <Bell className="w-4 h-4 mr-2" /> },
  { name: "Toast Notifications", icon: <AppWindow className="w-4 h-4 mr-2" /> },
  { name: "Data Table", icon: <TableIcon className="w-4 h-4 mr-2" /> },
];
