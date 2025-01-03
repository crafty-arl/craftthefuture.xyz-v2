import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google';
import { ArrowRight, Library, Rocket, GraduationCap, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { EmailSubmitForm } from '@/components/email-submit-form';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <nav className="flex items-center justify-between w-full max-w-7xl gap-2 px-8 py-4 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
        <div className="flex items-center gap-6">
          <Link href="https://www.futuristconference.com/" target="_blank">
            <Image
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform hover:scale-105"
              src="/ctf-logo.png"
              alt="CTF logo" 
              width={96}
              height={96}
              priority
            />
          </Link>
          <span className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary`}>
            Craft The Future
          </span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button size="lg" variant="outline" className="hidden sm:flex rounded-full text-lg px-8">
            <Link href="https://nocodecreative.xyz" target="_blank">
              Try NoCode Creatives
            </Link>
          </Button>
        </div>
      </nav>

      <main className="w-full max-w-7xl space-y-24 py-10">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary`}>
            Empowering No-Code Creatives to Build the Future
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the best no-code tools and resources or book a free 15-minute consultation with our experts.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 pt-6">
            <EmailSubmitForm showBenefits={true} className="max-w-2xl" />
          </div>
          <p className="text-sm text-muted-foreground">
            Free consultation. No commitment. Trusted by 1,000+ Creatives
          </p>
        </section>

        {/* Featured In Section */}
        <section className="space-y-8">
          <h2 className="text-center text-lg text-muted-foreground">Featured In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <Link href="https://www.summerfest-tech.com/" target="_blank">
              <Image 
                src="/sftechlogo3.png"
                alt="SF Tech"
                width={240}
                height={80}
                className="grayscale hover:grayscale-0 transition-all"
              />
            </Link>
            <Link href="https://ethchicago.xyz/" target="_blank">
              <Image
                src="/ethchilogo.png" 
                alt="ETH Chicago"
                width={240}
                height={80}
                className="grayscale hover:grayscale-0 transition-all"
              />
            </Link>
            <Link href="https://www.mketech.org/" target="_blank">
              <Image
                src="/mketechlogo.png"
                alt="MKE Tech"
                width={240}
                height={80}
                className="grayscale hover:grayscale-0 transition-all"
              />
            </Link>
            <Link href="https://www.futuristconference.com/" target="_blank">
              <Image
                src="/blockchainfuturistlogo.webp"
                alt="Blockchain Futurist"
                width={240}
                height={80}
                className="grayscale hover:grayscale-0 transition-all"
              />
            </Link>
          </div>
        </section>

        {/* Value Props */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold`}>
              Why Choose Craft The Future?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're your one-stop hub for no-code success, combining cutting-edge tools, hands-on guidance, and a supportive community.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border bg-background/50 text-center space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <Library className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl">Save Time with Curated Tools</h3>
              <p className="text-muted-foreground">Get personalized recommendations for the best no-code tools that match your project needs.</p>
            </div>
            <div className="p-8 rounded-3xl border bg-background/50 text-center space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl">Get Expert Support to Scale</h3>
              <p className="text-muted-foreground">Book a call with our team to turn your idea into a reality with proven strategies.</p>
            </div>
            <div className="p-8 rounded-3xl border bg-background/50 text-center space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl">Learn and Grow with the Best</h3>
              <p className="text-muted-foreground">Get guidance on workshops and resources tailored to your growth journey.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="space-y-12">
          <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold text-center`}>
            Three Steps to Start Crafting Your Future
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-2">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl">Book a Free Call</h3>
              <p className="text-muted-foreground">
                Schedule a 15-minute consultation to get personalized guidance for your project.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-2">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl">Get Your Action Plan</h3>
              <p className="text-muted-foreground">
                Receive a customized roadmap with tool recommendations and growth strategies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-2">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl">Build and Scale</h3>
              <p className="text-muted-foreground">
                Execute your plan with ongoing support and resources from our team.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials & CTA Section */}
        <section className="text-center space-y-12 pb-20">
          <h2 className={`${playfair.className} text-3xl sm:text-4xl font-bold mb-8`}>
            Don't Just Take Our Word for It
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="p-8 rounded-3xl border bg-background/50 text-left space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Image
                    src="/graceprofilepic.jpg"
                    alt="Dr. Grace Hameister"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Dr. Grace Hameister</h3>
                </div>
              </div>
              <p className="text-muted-foreground">
                "As a food scientist and integrative medicine expert, I never thought I'd be building digital solutions. Thanks to Craft the Future, I'm embracing the no-code revolution and transforming how we approach healthcare technology!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 rounded-3xl border bg-background/50 text-left space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Image
                    src="/angelavandyke.jpg"
                    alt="Angela Van Dyke"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Angela Van Dyke</h3>
                </div>
              </div>
              <p className="text-muted-foreground">
                "In a world where technology evolves daily, traditional education can't keep up. Craft the Future is bridging that gap, empowering us to build solutions without waiting for tomorrow's curriculum."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 rounded-3xl border bg-background/50 text-left space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Image
                    src="/jamarjones.jpg"
                    alt="Jamar Jones"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Jamar Jones</h3>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Craft the Future lit up our event with their innovative AI art experiences! Their booth was a constant hub of excitement, showing everyone how technology can move our culture forward in amazing new ways."
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 bg-background/50 p-8 rounded-3xl border">
            <h3 className={`${playfair.className} text-2xl font-bold`}>
              Ready to Build the Future?
            </h3>
            <p className="text-lg text-muted-foreground">
              Book your free consultation and get personalized guidance to scale your no-code vision.
            </p>
            <div className="flex flex-col items-center justify-center">
              <EmailSubmitForm showBenefits={true} className="max-w-xl" />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-7xl border-t border-border/50 pt-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-center gap-4">
            <Image
              className="w-12 h-12 transition-transform hover:scale-105"
              src="/ctf-logo.png"
              alt="CTF logo" 
              width={48}
              height={48}
            />
            <span className={`${playfair.className} text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary`}>
              Craft The Future
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8">
            <Link 
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/roadmap"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Roadmap
            </Link>
            <Link 
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground pb-4">
            © {new Date().getFullYear()} Craft The Future. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
