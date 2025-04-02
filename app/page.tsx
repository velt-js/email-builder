"use client"
import EmailBuilder from "@/components/email-builder"
import { VeltProvider } from "@veltdev/react"
import { VeltCollaboration } from "@/components/velt/VeltCollaboration"
import { EmailBuilderProvider } from "@/components/email-builder/context"

export default function Home() {
  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <EmailBuilderProvider>
        <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
          <VeltCollaboration />
          <EmailBuilder />
        </main>
      </EmailBuilderProvider>
    </VeltProvider>
  )
}

