import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { DeviceType, EmailContent } from "./types";

interface EmailPreviewProps {
  device: DeviceType;
  previewId: string;
  currentContent: EmailContent;
}

export function EmailPreview({ device, previewId, currentContent }: EmailPreviewProps) {
  return (
    <div className="flex justify-center w-full" id="email-preview">
      <div className="max-w-xl" id={previewId} data-id={previewId} key={previewId}>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">From:</span>
            <span className="text-sm">{currentContent.from}</span>
          </div>

          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">Subject:</span>
            <span className="text-sm">{currentContent.subject}</span>
          </div>
        </div>

        <Separator className="my-4" />

        <div
          className={`${
            device === "mobile"
              ? "max-w-[320px]"
              : device === "tablet"
              ? "max-w-[600px]"
              : "w-full"
          } mx-auto`}
        >
          <div className="space-y-6">
            <div className="text-center py-4 px-6 bg-gray-50 rounded-sm">
              <h1 className="text-lg font-medium">{currentContent.title}</h1>
            </div>

            <div className="space-y-1 px-1">
              <h2 className="text-sm font-medium flex items-center gap-1.5">
                <span>⭐</span>
                <span>Featured Update</span>
              </h2>
              <p className="text-sm">{currentContent.featuredUpdate}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-sm space-y-1 relative">
              <h2 className="text-sm font-medium flex items-center gap-1.5">
                <span>🎉</span>
                <span>Special Offer</span>
              </h2>
              <p className="text-sm">{currentContent.specialOffer}</p>

              <Avatar className="h-8 w-8 absolute top-4 right-4 bg-blue-500">
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
            </div>

            <div className="space-y-2 px-1">
              <h2 className="text-sm font-medium flex items-center gap-1.5">
                <span>📊</span>
                <span>Latest Statistics</span>
              </h2>
              <ul className="space-y-1.5 text-sm">
                {currentContent.statistics.map((stat, index) => (
                  <li key={index} className="flex items-baseline gap-2">
                    <span className="text-xs">•</span> {stat}
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="my-2" />

            <div className="text-center text-xs text-gray-500">
              © {currentContent.year} {currentContent.companyName}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 