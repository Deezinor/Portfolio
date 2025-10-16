import React from "react";
import { useState } from "react";
import Header from "../components/Header-Components/header";
import {
  MediaGallery,
  type MediaItem,
} from "../components/Media_Gallery-Components/MediaGallery";

interface InfoProps {
  label: string;
  value: string;
}

interface BreakdownProps {
  imageUrl: string;
  content?: string;
}

interface AppendixProps {
  label: string;
  entry: React.ReactNode;
}

// Single row in the snapshot section
function InfoRow({ label, value }: InfoProps) {
  return (
    <div className="flex items-end">
      <h3 className="font-medium text-xl px-2">{label}</h3>
      <p className="self-end">{value}</p>
    </div>
  );
}

// Single entry in the process breakdown accordion
function ProcessBreakdownEntry({ imageUrl, content }: BreakdownProps) {
  return (
    <div className="p-4">
      <img className="mb-2" src={imageUrl} alt="" />
      <p>{content}</p>
    </div>
  );
}

function AppendixEntry({ label, entry }: AppendixProps) {
  return (
    <div>
      <h4 className="heading-h4 font-bold">{label}</h4>
      <p className="pl-2">{entry}</p>
    </div>
  );
}

type AccordionItem = {
  heading: string;
  content: React.ReactNode;
};

function Accordion({
  items,
  defaultOpen = 0, // set to null if you want all closed by default
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y border rounded-lg">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              className="flex w-full items-center justify-between p-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`panel-${i}`}
              id={`control-${i}`}
              onClick={() => {
                return setOpen(isOpen ? null : i);
              }}
            >
              <span className="font-medium heading-h3">{item.heading}</span>
              <svg
                className={`size-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
              </svg>
            </button>

            {/* Smooth height animation */}
            <div
              id={`panel-${i}`}
              role="region"
              aria-labelledby={`control-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-4 pb-4">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const TestPage: React.FC = () => {
  const galleryMedia: MediaItem[] = [
    {
      type: "image",
      src: "https://placehold.co/1200x800",
      caption: "A caption for the first image",
    },
    {
      type: "image",
      src: "https://placehold.co/800x1200",
      caption: "A caption for the second image",
    },
    // Example video / iframe:
    { type: "video", src: "/Assets/Videos/demo.mp4" },
    { type: "iframe", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="container mx-auto mb-12">
        <div>
          <h1 className="heading-h1">BeatBox Studio</h1>
          <p className="mb-8">
            A VR percussion tool designed for learners and creators alike,
            BeatBox Studio combines education, play, and community to make
            drumming possible anywhere.
          </p>
          <img
            className="lg:mx-auto rounded-lg"
            src="./Assets/Images/Projects/BeatBox/BBVR-logo.gif"
            alt="Hero Loop / Video Clip (silent, autoplay)"
          />
        </div>
      </section>

      {/* Snapshot Section */}
      <section className="container mx-auto section">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { label: "Role(s):", value: "text" },
            { label: "Team:", value: "text" },
            { label: "Context:", value: "text" },
            { label: "Duration:", value: "text" },
            { label: "Platform:", value: "text" },
            { label: "Highlights:", value: "text" },
          ].map((item, index) => {
            return <InfoRow key={index} {...item} />;
          })}
        </div>
      </section>

      {/* Outcome & Impact Section - Optional */}
      <section className="container mx-auto section">
        <div></div>
      </section>

      {/* My Responsibilities */}
      <section className="container mx-auto">
        <div>
          {/* A short, high-signal bullet list. What I did not what "the team" did */}
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>

      {/* Process Breakdown */}
      <section className="container mx-auto section">
        <Accordion
          items={[
            {
              heading: "Heading 1.0",
              content: (
                <ProcessBreakdownEntry
                  imageUrl="https://placehold.co/400x300"
                  content="Some descriptive text for this step of the process."
                />
              ),
            },
            {
              heading: "Heading 2.0",
              content: (
                <ProcessBreakdownEntry imageUrl="https://placehold.co/400x300" />
              ),
            },
          ]}
          defaultOpen={0}
        />
      </section>

      {/* Gallery */}
      <section className="container mx-auto section">
        <div className="flex justify-center">
          <h2 className="heading-h2">Project Gallery</h2>
        </div>
      <MediaGallery media={galleryMedia} />
      </section>

      {/* Reflection */}
      <section className="container mx-auto section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4 border border-1 rounded-md">
            <h3 className="heading-h3">💬 What worked:</h3>
            <p className="lg:px-12"></p>
          </div>
          <div className="mb-4 border border-1 rounded-md">
            <h3 className="mr-2 heading-h3">⚡ What didn&apos;t:</h3>
            <p className="lg:px-12"></p>
          </div>
          <div className="mb-4 border border-1 rounded-md">
            <h3 className="mr-2 heading-h3">🚀 Next time:</h3>
            <p className="lg:px-12"></p>
          </div>
        </div>
      </section>

      {/* Technical Appendix (optional & Collapsible) */}
      <section className="container mx-auto section">
        <Accordion
          defaultOpen={null} // start closed
          items={[
            {
              heading: "Technical Appendix",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {[
                    {
                      label: "Tools:",
                      entry: (
                        <>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Blender 4.5</li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      label: "Platform:",
                      entry: (
                        <>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Meta Quest 3 (for testing)</li>
                            <li>Stand alone headsets</li>
                          </ul>
                        </>
                      ),
                    },
                    // add more here...
                  ].map((item, index) => {
                    return <AppendixEntry key={index} {...item} />;
                  })}
                </div>
              ),
            },
          ]}
        />
      </section>
    </>
  );
};

export default TestPage;
