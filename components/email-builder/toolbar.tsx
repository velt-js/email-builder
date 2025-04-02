import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Tablet, PanelLeft, Moon, Sun, ImageIcon, LinkIcon } from "lucide-react";
import { DeviceType, ThemeMode } from "./types";
import { useEmailBuilder } from "./context";

interface ToolbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setPreviewId: (id: string) => void;
}

export function Toolbar({
  sidebarOpen,
  setSidebarOpen,
  setPreviewId,
}: ToolbarProps) {
  // Use the email builder context
  const { config, setDevice, setMode } = useEmailBuilder();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        className="h-9 flex items-center gap-2 mr-2 w-36 justify-center"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <PanelLeft className="h-4 w-4" />
        <span>{sidebarOpen ? "Hide Editor" : "Show Editor"}</span>
      </Button>

      <div className="flex border rounded-md overflow-hidden">
        <button
          className={`p-2 ${config.device === "desktop" ? "bg-secondary" : "bg-transparent"}`}
          onClick={() => {
            setDevice("desktop");
            setPreviewId("desktop-preview");
          }}
        >
          <Monitor className="h-5 w-5" />
        </button>
        <button
          className={`p-2 ${config.device === "tablet" ? "bg-secondary" : "bg-transparent"}`}
          onClick={() => {
            setDevice("tablet");
            setPreviewId("tablet-preview");
          }}
        >
          <Tablet className="h-5 w-5" />
        </button>
        <button
          className={`p-2 ${config.device === "mobile" ? "bg-secondary" : "bg-transparent"}`}
          onClick={() => {
            setDevice("mobile");
            setPreviewId("mobile-preview");
          }}
        >
          <Smartphone className="h-5 w-5" />
        </button>
      </div>

      <Button 
        variant="outline" 
        size="sm" 
        className={`h-9 flex items-center gap-2 ${config.mode === "dark" ? "bg-secondary" : ""}`}
        onClick={() => setMode(config.mode === "dark" ? "light" : "dark")}
      >
        {config.mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        <span>{config.mode === "dark" ? "Dark Mode" : "Light Mode"}</span>
      </Button>

      <Button variant="outline" size="sm" className="h-9 flex items-center gap-2">
        <ImageIcon className="h-4 w-4" />
        <span>Image Properties</span>
      </Button>

      <Button variant="outline" size="sm" className="h-9 flex items-center gap-2">
        <LinkIcon className="h-4 w-4" />
        <span>Link URLs</span>
      </Button>
    </div>
  );
} 