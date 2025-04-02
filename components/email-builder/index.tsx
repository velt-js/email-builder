"use client";

import { useState } from "react";
import { DeviceType, EmailContent } from "./types";
import { Header } from "./header";
import { Toolbar } from "./toolbar";
import { EditorSidebar } from "./editor-sidebar";
import { EmailPreview } from "./email-preview";
import { useEmailBuilder } from "./context";

export default function EmailBuilder() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [previewId, setPreviewId] = useState<string>("mobile-preview");
  
  const defaultContent: EmailContent = {
    from: "marketing@company.com",
    subject: "📝 March Newsletter Preview",
    title: "March Newsletter",
    featuredUpdate:
      "We're excited to announce our new product launch! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    specialOffer: "Early birds get 20% off! Use code: MARCH2025",
    statistics: ["95% customer satisfaction", "50% growth in Q1", "Now available in 30 countries"],
    year: "2025",
    companyName: "Company Name",
  };
  
  const [deviceContent, setDeviceContent] = useState<Record<DeviceType, EmailContent>>({
    desktop: {...defaultContent, subject: "📝 Desktop Newsletter Preview"},
    tablet: {...defaultContent, subject: "📝 Tablet Newsletter Preview"},
    mobile: {...defaultContent, subject: "📝 Mobile Newsletter Preview"},
  });

  // Access the config from context
  const { config } = useEmailBuilder();

  const handleContentChange = (key: keyof EmailContent, value: string | string[]) => {
    setDeviceContent((prev) => ({
      ...prev,
      [config.device]: {
        ...prev[config.device],
        [key]: value
      }
    }));
  };

  const handleStatisticChange = (index: number, value: string) => {
    const newStats = [...deviceContent[config.device].statistics];
    newStats[index] = value;
    handleContentChange("statistics", newStats);
  };

  // Current content based on selected device
  const currentContent = deviceContent[config.device];

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg border shadow-sm">
      <div className="p-6">
        <Header />
        
        <div className="flex flex-col gap-5">
          <Toolbar 
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            setPreviewId={setPreviewId}
          />

          <div className="flex gap-6">
            <div className="relative w-full">
              {sidebarOpen && (
                <EditorSidebar
                  currentContent={currentContent}
                  handleContentChange={handleContentChange}
                  handleStatisticChange={handleStatisticChange}
                />
              )}

              <EmailPreview 
                device={config.device}
                previewId={previewId}
                currentContent={currentContent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 