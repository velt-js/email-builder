import { Button } from "@/components/ui/button";
import { RefreshCw, Share2, ExternalLink } from "lucide-react";
import { VeltCommentTool, VeltSidebarButton } from "@veltdev/react";

export function Header() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold">Email Review</h1>
          <p className="text-sm text-muted-foreground">Preview and test your email across different devices</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">noreply@company.com</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <Button variant="outline" size="sm" className="h-8 flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          <span>New Review</span>
        </Button>

        <div className="flex items-center gap-3">
          {/* [VELT] Velt comment too */}
          <VeltCommentTool />
          {/* [VELT] Velt sidebar button */}
          <VeltSidebarButton />
          <Button variant="outline" size="sm" className="h-8 flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>
      </div>
    </>
  );
} 