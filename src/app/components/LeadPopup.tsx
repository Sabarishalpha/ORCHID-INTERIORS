"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIsSubmitted(false);
      setIsOpen(true);
    }, 500000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <div
        className="relative grid w-full max-w-4xl overflow-hidden rounded-[2rem] bg-stone-100 shadow-2xl md:grid-cols-[0.9fr_1.1fr]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
      >
        <div className="hidden min-h-[440px] bg-black p-10 text-white md:flex md:flex-col md:justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-stone-400 uppercase">ORCHID INTERIORS</p>
            <p className="mt-12 max-w-xs text-4xl leading-tight font-light">
              Make room for a life beautifully lived.
            </p>
          </div>
          <p className="max-w-xs text-sm leading-6 text-stone-400">
            Tell us a little about your space and our design team will be in touch.
          </p>
        </div>

        <div className="relative p-7 sm:p-10">
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close consultation form"
            className="absolute top-5 right-5 rounded-full p-2 text-stone-500 transition-colors hover:bg-stone-200 hover:text-black"
          >
            <X className="h-5 w-5" />
          </button>

          {!isSubmitted ? (
            <>
              <p className="mb-4 text-xs tracking-[0.28em] text-stone-500 uppercase">PRIVATE CONSULTATION</p>
              <h2 id="lead-popup-title" className="max-w-sm text-3xl leading-tight font-light text-black sm:text-4xl">
                Begin your next chapter at home.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-stone-600">
                Share your details to receive a complimentary 20-minute design consultation.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <label className="block">
                  <span className="sr-only">Your name</span>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border-b border-stone-300 bg-transparent px-0 py-3 text-sm text-black outline-none placeholder:text-stone-500 focus:border-black"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Email address</span>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="w-full border-b border-stone-300 bg-transparent px-0 py-3 text-sm text-black outline-none placeholder:text-stone-500 focus:border-black"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Project type</span>
                  <select
                    required
                    name="projectType"
                    defaultValue=""
                    className="w-full border-b border-stone-300 bg-transparent px-0 py-3 text-sm text-stone-600 outline-none focus:border-black"
                  >
                    <option value="" disabled>What are you designing?</option>
                    <option value="home">A home</option>
                    <option value="office">An office</option>
                    <option value="hospitality">A hospitality space</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm text-white transition-colors hover:bg-stone-800"
                >
                  Request consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <p className="mt-5 text-center text-xs leading-5 text-stone-500">
                Prefer to share more? <Link href="/contact" onClick={closePopup} className="text-black underline underline-offset-4">Visit our contact page</Link>
              </p>
            </>
          ) : (
            <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                <Check className="h-6 w-6" />
              </div>
              <h2 id="lead-popup-title" className="mt-6 text-3xl font-light text-black">Thank you.</h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-stone-600">
                Your details are ready for the Orchid Interiors team. Connect the enquiry API before launch to deliver this request.
              </p>
              <button
                type="button"
                onClick={closePopup}
                className="mt-8 rounded-full border border-black px-6 py-3 text-sm text-black transition-colors hover:bg-black hover:text-white"
              >
                Continue browsing
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}