import Image from 'next/image'
import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { EmailSubmitForm } from '@/components/email-submit-form'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

export const metadata = {
  title: 'About Us | Craft The Future',
  description: 'Learn about the team behind Craft The Future and our mission to empower no-code innovators.'
}

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-24">
      <section className="space-y-8">
        <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary`}>About Us</h1>
        <p className="text-lg text-muted-foreground">
          At <span className="font-bold">Craft The Future</span>, we are redefining creativity for a new generation. Our mission is to empower no-code innovators by providing them with the tools, resources, and community needed to bring their ideas to life. Whether you're just starting your journey or scaling your next big project, we're here to support every step of the way.
        </p>
        <p className="text-lg text-muted-foreground">
          We believe in the power of accessible technology, the boundless potential of creative minds, and the importance of building an inclusive future where everyone can thrive.
        </p>
      </section>

      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold`}>Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">Behind Craft The Future is a team of industry experts and thought leaders driving innovation in no-code, Web3, and sustainable technology.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <Image
              src="/CarlProfilePic.jpg"
              alt="Carl (GM! Carl)"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <Link href="https://gmcarl.xyz" target="_blank" className="hover:opacity-80">
              <h3 className="text-xl font-bold">Carl (GM! Carl)</h3>
            </Link>
            <p className="text-sm text-muted-foreground italic">No-Code Author & Speaker</p>
            <p className="text-muted-foreground">Author of "How To Be A No Code Creative" and renowned speaker who has delivered talks in three major cities. Carl's expertise in no-code development and AI drives our vision for accessible technology innovation.</p>
          </div>

          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <div className="rounded-full overflow-hidden w-[200px] h-[200px] mx-auto mb-4">
              <Image
                src="/ContessaProfilePic.jpg"
                alt="Contessa Louise"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <Link href="https://auramation.con" target="_blank" className="hover:opacity-80">
              <h3 className="text-xl font-bold">Contessa Louise</h3>
            </Link>
            <p className="text-sm text-muted-foreground italic">ReFi Expert & Producer</p>
            <p className="text-muted-foreground">A pioneering force in regenerative finance (ReFi), Contessa specializes in Carbon Credit Profile creation and is the visionary producer behind Auramation. Her work bridges sustainability with blockchain innovation.</p>
          </div>

          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <Image
              src="/T9letProfilePic.jpg"
              alt="Tiara Nicole (T9let)"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <Link href="https://t9let.carrd.co" target="_blank" className="hover:opacity-80">
              <h3 className="text-xl font-bold">Tiara Nicole (T9let)</h3>
            </Link>
            <p className="text-sm text-muted-foreground italic">NFT Artist & Community Leader</p>
            <p className="text-muted-foreground">Milwaukee's first NFT artist featured in the Marcus Performing Arts, Stand With Crypto creative feature, and ETH Chicago Community Engagement leader. T9let brings unique artistic vision to Web3 innovation.</p>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold`}>Why Craft The Future?</h2>
          <p className="text-lg text-muted-foreground">We're more than just a platform—we're a community of creators, innovators, and change-makers working together to shape the future of technology.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="font-bold text-xl">Curated No-Code Tools</h3>
            <p className="text-muted-foreground">Vetted by experts and reviewed by our network</p>
          </div>
          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="font-bold text-xl">Launch Support</h3>
            <p className="text-muted-foreground">Help you scale and showcase your projects</p>
          </div>
          <div className="p-8 rounded-3xl border bg-background/50 space-y-4">
            <h3 className="font-bold text-xl">Learning Resources</h3>
            <p className="text-muted-foreground">Upskill through workshops and expert-led courses</p>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto space-y-6 bg-background/50 p-8 rounded-3xl border text-center">
        <h2 className={`${playfair.className} text-2xl font-bold`}>Join the Movement</h2>
        <p className="text-lg text-muted-foreground">Be part of a community that values innovation, inclusivity, and creativity. Let's build something extraordinary—together.</p>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <EmailSubmitForm />
          <Button size="lg" variant="outline" className="rounded-full text-lg px-8">
            <Link href="https://nocodecreative.xyz" target="_blank">
              Try NoCode Creatives
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
