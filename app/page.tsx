"use client"
import EmailBuilder from "@/components/email-builder"
import { VeltProvider } from "@veltdev/react"
import { VeltCollaboration } from "@/components/velt/VeltCollaboration"

export default function Home() {
  return (
    
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <VeltCollaboration />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
        <EmailBuilder />
      </main>
    </VeltProvider>
  )
}

