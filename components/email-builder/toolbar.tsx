import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Tablet, PanelLeft, Moon, ImageIcon, LinkIcon } from "lucide-react";
import { DeviceType } from "./types";

interface ToolbarProps {
  device: DeviceType;
  setDevice: (device: DeviceType) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setPreviewId: (id: string) => void;
}

export function Toolbar({
  device,
  setDevice,
  sidebarOpen,
  setSidebarOpen,
  setPreviewId,
}: ToolbarProps) {
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
          className={`p-2 ${device === "desktop" ? "bg-secondary" : "bg-transparent"}`}
          onClick={() => {
            setDevice("desktop");
            setPreviewId("desktop-preview");
          }}
        >
          <Monitor className="h-5 w-5" />
        </button>
        <button
          className={`p-2 ${device === "tablet" ? "bg-secondary" : "bg-transparent"}`}
          onClick={() => {
            setDevice("tablet");
            setPreviewId("tablet-preview");
          }}
        >
          <Tablet className="h-5 w-5" />
        </button>
        <button
          className={`p-2 ${device === "mobile" ? "bg-secondary" : "bg-transparent"}`}
          onClick={() => {
            setDevice("mobile");
            setPreviewId("mobile-preview");
          }}
        >
          <Smartphone className="h-5 w-5" />
        </button>
      </div>

      <Button variant="outline" size="sm" className="h-9 flex items-center gap-2">
        <Moon className="h-4 w-4" />
        <span>Dark Mode</span>
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