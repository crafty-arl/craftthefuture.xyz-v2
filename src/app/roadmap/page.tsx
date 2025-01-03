import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { EmailSubmitForm } from '@/components/email-submit-form'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

export const metadata = {
  title: 'Roadmap | Craft The Future',
  description: 'See what we have planned and where we are headed at Craft The Future.'
}

export default function RoadmapPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <section className="space-y-8">
        <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary`}>
          Craft The Future Roadmap
        </h1>
        <p className="text-lg text-muted-foreground">
          Your guide to what's happening and where we're headed—focused, clear, and actionable.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className={`${playfair.className} text-3xl font-bold flex items-center gap-2`}>
          <span className="text-2xl">📋</span> Tasks to Complete in Q1
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="text-xl font-bold">Launch the Tool Library</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Curate and upload 25+ vetted no-code tools</li>
              <li>• Enable user reviews with star ratings and comments</li>
              <li>• Highlight a "Featured Tool" weekly to showcase top solutions</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="text-xl font-bold">Beta Test WriteMyNewsletter</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Onboard 50 beta testers</li>
              <li>• Collect feedback and make improvements based on user insights</li>
              <li>• Share success stories to inspire others</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="text-xl font-bold">Host Learning Workshops</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Facilitate 2 expert-led workshops with GM! Carl as the host</li>
              <li>• Topics: "Scaling Your No-Code Idea" and "AI-Powered Workflows"</li>
              <li>• Collect feedback to refine future sessions</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="text-xl font-bold">Build Our Discord Community</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Launch and grow a Discord space for no-code creatives</li>
              <li>• Host weekly live events, like "Tool Spotlights" and Q&A sessions</li>
              <li>• Engage 100+ active members by March</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="text-xl font-bold">Launch Support Program</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Partner with 5 creators to showcase their projects</li>
              <li>• Highlight success stories on the website to inspire new users</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className={`${playfair.className} text-3xl font-bold flex items-center gap-2`}>
          <span className="text-2xl">🌟</span> Tasks on the Horizon
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="text-xl font-bold">Expand the Tool Library</h3>
            <p className="text-muted-foreground">Add 50+ more tools and include detailed guides for using them effectively.</p>
          </div>

          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="text-xl font-bold">Build a Learning Resource Hub</h3>
            <p className="text-muted-foreground">Launch expert-led courses and an on-demand video library for creators.</p>
          </div>

          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="text-xl font-bold">Scale the Discord Community</h3>
            <p className="text-muted-foreground">Introduce gamified participation rewards, member-led events, and exclusive networking opportunities.</p>
          </div>

          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="text-xl font-bold">Create Advanced Workshops</h3>
            <p className="text-muted-foreground">Develop deep-dive sessions focusing on scaling, monetization, and advanced AI workflows.</p>
          </div>

          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="text-xl font-bold">Introduce a Creator Recognition Program</h3>
            <p className="text-muted-foreground">Celebrate outstanding creators by featuring their stories in newsletters, workshops, and on the website.</p>
          </div>

          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="text-xl font-bold">Drive Global Engagement</h3>
            <p className="text-muted-foreground">Partner with no-code influencers and tool creators to bring more resources to the platform.</p>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto space-y-6 bg-background/50 p-8 rounded-3xl border text-center">
        <h2 className={`${playfair.className} text-2xl font-bold`}>Let's Build the Future Together</h2>
        <p className="text-lg text-muted-foreground">
          Every task we complete brings us closer to a thriving no-code ecosystem. Join us on this journey by booking a call or exploring NoCode Creatives today.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <EmailSubmitForm />
          <Button size="lg" variant="outline" className="rounded-full text-lg px-8">
            Try NoCode Creatives
          </Button>
        </div>
      </section>
    </main>
  )
}
