import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DeviceType, EmailContent } from "./types";

interface EditorSidebarProps {
  currentContent: EmailContent;
  handleContentChange: (key: keyof EmailContent, value: string | string[]) => void;
  handleStatisticChange: (index: number, value: string) => void;
}

export function EditorSidebar({
  currentContent,
  handleContentChange,
  handleStatisticChange,
}: EditorSidebarProps) {
  return (
    <div className="absolute top-0 left-0 w-64 h-full border-r pr-4 bg-white z-10 overflow-y-auto">
      <div className="space-y-4 pb-10">
        <div>
          <Label htmlFor="from" className="text-xs">
            From:
          </Label>
          <Input
            id="from"
            value={currentContent.from}
            onChange={(e) => handleContentChange("from", e.target.value)}
            className="h-8 text-sm"
          />
        </div>

        <div>
          <Label htmlFor="subject" className="text-xs">
            Subject:
          </Label>
          <Input
            id="subject"
            value={currentContent.subject}
            onChange={(e) => handleContentChange("subject", e.target.value)}
            className="h-8 text-sm"
          />
        </div>

        <div>
          <Label htmlFor="title" className="text-xs">
            Title:
          </Label>
          <Input
            id="title"
            value={currentContent.title}
            onChange={(e) => handleContentChange("title", e.target.value)}
            className="h-8 text-sm"
          />
        </div>

        <div>
          <Label htmlFor="featuredUpdate" className="text-xs">
            Featured Update:
          </Label>
          <Textarea
            id="featuredUpdate"
            value={currentContent.featuredUpdate}
            onChange={(e) => handleContentChange("featuredUpdate", e.target.value)}
            className="text-sm min-h-[80px]"
          />
        </div>

        <div>
          <Label htmlFor="specialOffer" className="text-xs">
            Special Offer:
          </Label>
          <Textarea
            id="specialOffer"
            value={currentContent.specialOffer}
            onChange={(e) => handleContentChange("specialOffer", e.target.value)}
            className="text-sm min-h-[60px]"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-xs">Statistics:</Label>
          {currentContent.statistics.map((stat, index) => (
            <Input
              key={index}
              value={stat}
              onChange={(e) => handleStatisticChange(index, e.target.value)}
              className="h-8 text-sm mb-2"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="year" className="text-xs">
              Year:
            </Label>
            <Input
              id="year"
              value={currentContent.year}
              onChange={(e) => handleContentChange("year", e.target.value)}
              className="h-8 text-sm"
            />
          </div>
          <div>
            <Label htmlFor="companyName" className="text-xs">
              Company:
            </Label>
            <Input
              id="companyName"
              value={currentContent.companyName}
              onChange={(e) => handleContentChange("companyName", e.target.value)}
              className="h-8 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 