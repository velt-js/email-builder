"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import {
  Monitor,
  Smartphone,
  Tablet,
  RefreshCw,
  MessageSquare,
  Share2,
  ExternalLink,
  Moon,
  ImageIcon,
  LinkIcon,
  PanelLeft,
} from "lucide-react"
import { useCommentUtils, useVeltClient, VeltCommentTool, VeltSidebarButton } from "@veltdev/react"
interface EmailContent {
  from: string
  subject: string
  title: string
  featuredUpdate: string
  specialOffer: string
  statistics: string[]
  year: string
  companyName: string
}

type DeviceType = "desktop" | "tablet" | "mobile"

export default function EmailBuilder() {
  const commentUtils = useCommentUtils();
  const { client } = useVeltClient();
  const [device, setDevice] = useState<DeviceType>("mobile")
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [previewId, setPreviewId] = useState<string>("mobile-preview")
  
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
  }
  
  const [deviceContent, setDeviceContent] = useState<Record<DeviceType, EmailContent>>({
    desktop: {...defaultContent, subject: "📝 Desktop Newsletter Preview"},
    tablet: {...defaultContent, subject: "📝 Tablet Newsletter Preview"},
    mobile: {...defaultContent, subject: "📝 Mobile Newsletter Preview"},
  })

  const handleContentChange = (key: keyof EmailContent, value: string | string[]) => {
    setDeviceContent((prev) => ({
      ...prev,
      [device]: {
        ...prev[device],
        [key]: value
      }
    }))
  }

  const handleStatisticChange = (index: number, value: string) => {
    const newStats = [...deviceContent[device].statistics]
    newStats[index] = value
    handleContentChange("statistics", newStats)
  }

  // Current content based on selected device
  const currentContent = deviceContent[device]

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg border shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-semibold">Email Review</h1>
            <p className="text-sm text-muted-foreground">Preview and test your email across different devices</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">jonylt@gmail.com</span>
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
            <VeltCommentTool />
            <VeltSidebarButton />
            <Button variant="outline" size="sm" className="h-8 flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-9 flex items-center gap-2 mr-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <PanelLeft className="h-4 w-4" />
              <span>{sidebarOpen ? "Hide Editor" : "Show Editor"}</span>
            </Button>

            <div className="flex border rounded-md overflow-hidden">
              <button
                className={`p-2 ${device === "desktop" ? "bg-secondary" : "bg-transparent"}`}
                onClick={() => {
                  setDevice("desktop")
                  setPreviewId("desktop-preview")
                }}
              >
                <Monitor className="h-5 w-5" />
              </button>
              <button
                className={`p-2 ${device === "tablet" ? "bg-secondary" : "bg-transparent"}`}
                onClick={() => {
                  setDevice("tablet")
                  setPreviewId("tablet-preview")
                }}
              >
                <Tablet className="h-5 w-5" />
              </button>
              <button
                className={`p-2 ${device === "mobile" ? "bg-secondary" : "bg-transparent"}`}
                onClick={() => {
                  setDevice("mobile")
                  setPreviewId("mobile-preview")
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

          <div className="flex gap-6">
            {/* Editing Sidebar */}
            {sidebarOpen && (
              <div className="w-64 shrink-0 border-r pr-4">
                <div className="space-y-4">
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
            )}

            {/* Email Preview */}
            <div className="email-preview-container">
              <div className="flex-1">
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

                <div id={previewId} data-id={previewId}
                  className={`${
                    device === "mobile" ? "max-w-[320px]" : device === "tablet" ? "max-w-[600px]" : "w-full"
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
          </div>
        </div>
      </div>
    </div>
  )
}

