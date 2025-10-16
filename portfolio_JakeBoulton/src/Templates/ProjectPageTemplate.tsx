// src/templates/ProjectPageTemplate.tsx
import React from "react";
import Header from "../components/Header-Components/header";
import {
  MediaGallery,
  type MediaItem,
} from "../components/Media_Gallery-Components/MediaGallery";

// --- Small locals (lifted from your TestPage) ---
interface InfoProps {
  label: string;
  value: string;
}
function InfoRow({ label, value }: InfoProps) {
  return (
    <div className="flex items-baseline gap-2">
      <h3 className="heading-h5 font-semibold leading-tight">{label}</h3>
      <p className="text-base leading-tight text-gray-600">{value}</p>
    </div>
  );
}

interface BreakdownProps {
  imageUrl: string;
  content?: string;
}
function ProcessBreakdownEntry({ imageUrl, content }: BreakdownProps) {
  return (
    <div className="p-4">
      <img className="mb-2" src={imageUrl} alt="" />
      {content && <p className="text-gray-600">{content}</p>}
    </div>
  );
}

interface AppendixProps {
  label: string;
  entry: React.ReactNode;
}
function AppendixEntry({ label, entry }: AppendixProps) {
  return (
    <div>
      <h4 className="heading-h6 font-bold">{label}</h4>
      <div className="pl-2 text-gray-600">{entry}</div>
    </div>
  );
}

type AccordionItem = { heading: string; content: React.ReactNode };
function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = React.useState<number | null>(defaultOpen);
  return (
    <div className="divide-y bg-white border rounded-lg shadow-md shadow-gray-200">
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
              <span className="pl-4 heading-h5">
                {item.heading}
              </span>
              <svg
                className={`size-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
              </svg>
            </button>
            <div
              id={`panel-${i}`}
              role="region"
              aria-labelledby={`control-${i}`}
              className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden px-4 pb-1">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// --- Template types ---
export type SnapshotItem = InfoProps;
export type Responsibility = React.ReactNode;
export type ProcessStep = BreakdownProps;
export type AppendixItem = AppendixProps;

export interface ProjectPageData {
  // Hero
  title: string;
  summary?: string;
  heroSrc?: string; // img or loop
  // Snapshot grid
  snapshot?: SnapshotItem[];
  // Responsibilities
  responsibilities?: Responsibility[];
  // Process (accordion)
  process?: { heading: string; step: ProcessStep }[];
  // Gallery
  gallery?: MediaItem[];
  galleryTitle?: string;
  // Reflection
  reflection?: {
    worked?: string;
    didnt?: string;
    next?: string;
  };
  // Appendix (accordion)
  appendix?: AppendixItem[];
  appendixTitle?: string; // defaults to "Technical Appendix"
}

export default function ProjectPageTemplate({
  data,
  accordionDefaults = { processOpen: 0, appendixOpen: null as number | null },
}: {
  data: ProjectPageData;
  accordionDefaults?: {
    processOpen?: number | null;
    appendixOpen?: number | null;
  };
}) {
  const {
    title,
    summary,
    heroSrc,
    snapshot,
    responsibilities,
    process,
    gallery,
    galleryTitle = "Project Gallery",
    reflection,
    appendix,
    appendixTitle = "Technical Appendix",
  } = data;

  return (
    <>
      <Header />

      {/* Alternating sections wrapper */}
      <div
        className="
  [&>section]:bg-white
  [&>section:nth-child(odd)]:bg-gray-100
"
      >
        {/* Hero */}
        <section className="section">
          <div className="container mx-auto mb-12">
            <h1 className="heading-h1">{title}</h1>
            {summary && <p className="mb-4">{summary}</p>}
            {heroSrc && (
              <div className="mx-auto my-8 max-w-4xl">
                <img
                  className="rounded-lg"
                  src={heroSrc}
                  alt={`${title} hero`}
                />
              </div>
            )}
            {snapshot && snapshot.length > 0 && (
              <div className="flex flex-wrap items-end justify-between pt-8 gap-4">
                {snapshot.map((item, i) => {return (
                  <InfoRow key={i} {...item} />
                )})}
              </div>
            )}
          </div>
        </section>

        {/* Responsibilities */}
        {responsibilities?.length ? (
          <section className="section">
            <div className="container mx-auto">
              <h2 className="heading-h2 mb-2">Responsibilities</h2>
              <ul className="list-disc pl-6 md:pl-12 space-y-1 text-gray-700">
                {responsibilities.map((r, i) => {
                  return <li key={i}>{r}</li>;
                })}
              </ul>
            </div>
          </section>
        ) : null}

        {/* Process (Accordion) */}
        {process?.length ? (
          <section className="section">
            <div className="container mx-auto">
              <h2 className="heading-h2 mb-6">Process Breakdown</h2>
              <Accordion
                defaultOpen={accordionDefaults.processOpen ?? 0}
                items={process.map(({ heading, step }) => {
                  return {
                    heading,
                    content: <ProcessBreakdownEntry {...step} />,
                  };
                })}
              />
            </div>
          </section>
        ) : null}

        {/* Gallery */}
        {gallery?.length ? (
          <section className="section">
            <div className="container mx-auto">
              <div className="flex justify-center mb-2">
                <h2 className="heading-h2">{galleryTitle}</h2>
              </div>
              <MediaGallery media={gallery} />
            </div>
          </section>
        ) : null}

        {/* Reflection */}
        {reflection?.worked || reflection?.didnt || reflection?.next ? (
          <section className="section">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-1 md:p-3 shadow-md shadow-gray-200 rounded-lg bg-white">
                  <h3 className="heading-h3 mb-2">💬 What worked</h3>
                  <p className="text-gray-600">{reflection?.worked}</p>
                </div>
                <div className="p-1 md:p-3 shadow-md shadow-gray-200 rounded-lg bg-white">
                  <h3 className="heading-h3 mb-2">⚡ What didn&apos;t</h3>
                  <p className="text-gray-600">{reflection?.didnt}</p>
                </div>
                <div className="p-1 md:p-3 shadow-md shadow-gray-200 rounded-lg bg-white">
                  <h3 className="heading-h3 mb-2">🚀 Next time</h3>
                  <p className="text-gray-600">{reflection?.next}</p>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* Appendix */}
        {appendix?.length ? (
          <section className="section">
            <div className="container mx-auto">
              <Accordion
                defaultOpen={accordionDefaults.appendixOpen ?? null}
                items={[
                  {
                    heading: appendixTitle,
                    content: (
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 p-2 md:p-4 gap-6">
                        {appendix.map((item, i) => {
                          return <AppendixEntry key={i} {...item} />;
                        })}
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}
