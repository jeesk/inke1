"use client";

import Link from "next/link";
import { Github, Mail, MessageSquare, Youtube } from "lucide-react";
import ProductHunt from "../shared/icons/product-hunt";
import pkg from "../../package.json";

export default function Footer() {
  return (
    <div className="mt-6 flex h-full min-h-[256px] w-screen flex-col items-start justify-between gap-4 bg-slate-800 px-5 py-8 sm:flex-row sm:px-16">
      <div className="flex flex-col items-start justify-start">
        <Link href="/" className="mb-4 flex items-end text-3xl font-bold">
          <span className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-800 bg-clip-text text-transparent ">
            INKE
          </span>
          <span className="text-slate-300">.AI</span>
        </Link>
        <p className="flex items-center gap-1 font-mono text-slate-200">
          AI notebook, empowering writing.
        </p>

        <div className="my-4 flex items-start justify-center gap-1 text-sm text-slate-400">
          <span className="text-slate-200">© 2023</span>
          <Link href="/" className="font-bold">
            <span className="bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 bg-clip-text text-transparent ">
              INK
            </span>
            <span className="text-slate-200">E</span>.
          </Link>
          All rights reserved. - Inke.app
        </div>

        <Link
          className="mb-6 mt-2"
          href="https://www.producthunt.com/products/inke/launches"
          target="_blank"
        >
          <ProductHunt />
        </Link>
      </div>

      <div className="flex flex-col gap-20 text-slate-200 sm:flex-row">
        <div className="flex flex-col items-start">
          <p className="mb-4 font-bold">Information</p>
          <Link
            className="mb-2 font-mono text-sm text-slate-200 hover:text-slate-400"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="mb-2 font-mono text-sm text-slate-200 hover:text-slate-400"
            href="/document"
          >
            Document
          </Link>
          <Link
            className="mb-2 font-mono text-sm text-slate-200 hover:text-slate-400"
            href="/collaboration"
          >
            Collaboration
          </Link>
          <Link
            className="mb-2 font-mono text-sm text-slate-200 hover:text-slate-400"
            href="/shortcuts"
          >
            Shortcuts Reference
          </Link>
          <Link
            className="mb-2 font-mono text-sm text-slate-200 hover:text-slate-400"
            href="/privacy"
          >
            Privacy Policy
          </Link>
          <Link
            className="flex items-center gap-1 font-mono text-sm text-slate-200 hover:text-slate-400"
            href="mailto:team@inke.app"
          >
            Contact Mail
          </Link>
        </div>

        <div className="flex flex-col items-start">
          <p className="mb-4 font-bold">Community</p>
          <Link
            className="mb-2 flex items-center gap-1 font-mono text-sm text-slate-200 hover:text-slate-400"
            href="/feedback"
            target="_blank"
          >
            <MessageSquare className="h-4 w-4" /> Feedback
          </Link>
          <Link
            className="mb-2 flex items-center gap-1 font-mono text-sm text-slate-200 hover:text-slate-400"
            href="https://www.youtube.com/watch?v=Te3Piqtv1NQ"
            target="_blank"
          >
            <Youtube className="h-4 w-4" /> Youtube
          </Link>
          <Link
            className="mb-2 flex items-center justify-center gap-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-500 bg-clip-text text-sm font-semibold text-transparent hover:text-slate-400 "
            href="https://github.com/yesmore/inke"
            target="_blank"
          >
            <Github className="h-4 w-4 text-slate-100" />
            Open Source
          </Link>
          <span className="text-sm font-semibold text-slate-300">
            v{pkg.version}
          </span>
        </div>
      </div>
    </div>
  );
}
