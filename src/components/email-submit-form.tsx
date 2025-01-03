'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle } from 'lucide-react'

interface EmailSubmitFormProps {
  className?: string;
  showBenefits?: boolean;
  buttonText?: string;
}

export async function submitEmail(email: string) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "ctf_email": email
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow" as RequestRedirect
  };

  try {
    const response = await fetch("https://api.craftthefuture.xyz/webhook/craftthefutureemail", requestOptions);
    const result = await response.text();
    return { success: true, result };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
}

export function EmailSubmitForm({ className = "", showBenefits = false, buttonText = "Book Free Call" }: EmailSubmitFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage("Please enter an email address");
      setStatus("error");
      return;
    }

    setStatus("loading");
    const result = await submitEmail(email);
    
    if (result.success) {
      setStatus("success");
      setMessage("Thank you! We'll be in touch soon to schedule your free consultation.");
      setEmail("");
    } else {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`space-y-4 w-full ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Enter your email for a free consultation"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-full flex-1"
        />
        <Button 
          type="submit"
          size="lg" 
          className="rounded-full text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 whitespace-nowrap"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Scheduling..." : buttonText} <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
      
      {message && (
        <p className={`text-sm ${status === "success" ? "text-green-500" : "text-red-500"}`}>
          {message}
        </p>
      )}

      {showBenefits && (
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground pt-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>15-minute personalized consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Custom no-code tool recommendations</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Project scaling strategies</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Access to expert guidance</span>
          </div>
        </div>
      )}
    </div>
  );
}