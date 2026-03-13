"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";

export default function ChatWidget({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-5 z-50">
      {/* Chat panel */}
      {open && (
        <div className="mb-3 w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-spice-600 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg">
                🌶️
              </div>
              <div>
                <p className="text-sm font-semibold text-white">SpiceHubVN</p>
                <p className="flex items-center gap-1 text-xs text-spice-100">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                  {dict.chat.online}
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 transition hover:text-white"
              aria-label="Close chat"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="space-y-3 bg-gray-50 p-5">
            {/* Bot message */}
            <div className="flex gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-spice-100 text-xs">
                🌶️
              </div>
              <div className="rounded-xl rounded-tl-sm bg-white px-4 py-2.5 text-sm leading-relaxed text-gray-700 shadow-sm">
                {dict.chat.greeting}
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="border-t border-gray-100 px-5 py-4">
            <p className="mb-2 text-xs font-medium text-gray-500">
              {dict.chat.quickActions}
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="mailto:spicehubvn@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-spice-300 hover:bg-spice-50"
              >
                <svg className="h-3.5 w-3.5 text-spice-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              <a
                href="tel:+84977043137"
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-herb-300 hover:bg-herb-50"
              >
                <svg className="h-3.5 w-3.5 text-herb-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {dict.chat.call}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
              >
                <svg className="h-3.5 w-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                {dict.chat.form}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle chat"
        className={`group flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          open
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-spice-600 hover:bg-spice-700 hover:shadow-xl"
        }`}
      >
        {open ? (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
