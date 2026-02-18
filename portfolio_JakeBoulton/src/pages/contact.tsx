import React, { useState } from "react";
import {
  Container,
  Section,
  ScrollReveal,
  Button,
  Accordion,
} from "../components";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement EmailJS integration
    // For now, just simulate submission
    await new Promise((resolve) => {
      return setTimeout(resolve, 1000);
    });

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      projectType: "",
      timeline: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const myEmail = "jboulton@proton.me";

  const copyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    // Could add toast notification here
  };

  return (
    <>
      <Section spacing="large">
        <Container size="small">
          <ScrollReveal>
            <h1 className="text-h1 uppercase tracking-tight mb-6">
              Let&apos;s Work Together
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg text-muted mb-4">
              Have a project in mind? I&apos;d love to hear about it. Whether it&apos;s
              asset optimisation, XR development, or AI workflow
              consulting—let&apos;s discuss.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body text-accent">
              Currently accepting projects for{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
              .
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      <Section spacing="small">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-caption uppercase tracking-wider text-muted mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-border text-foreground focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-caption uppercase tracking-wider text-muted mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-border text-foreground focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-caption uppercase tracking-wider text-muted mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-border text-foreground focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="asset-optimisation">
                      Asset Optimisation
                    </option>
                    <option value="xr-experience">XR Experience</option>
                    <option value="xr-experience">3D Art</option>
                    <option value="xr-experience">
                      Product Design & Consulting
                    </option>
                    {/*<option value="ai-workflow">AI Workflow Consulting</option>*/}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-caption uppercase tracking-wider text-muted mb-2"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-border text-foreground focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select a timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-caption uppercase tracking-wider text-muted mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border border-border text-foreground focus:border-accent focus:outline-none transition-colors resize-vertical"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-accent">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="lg:pl-12">
                <h2 className="text-h3 uppercase tracking-tight mb-8">
                  Other Ways to Reach Me
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Email
                    </h3>
                    <a
                      href={`mailto:${myEmail}`}
                      className="text-body hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1 block"
                    >
                      {myEmail}
                    </a>
                    <button
                      onClick={copyEmail}
                      className="text-small text-muted hover:text-foreground transition-colors focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 mt-1"
                    >
                      Click to copy
                    </button>
                  </div>

                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+447565312904"
                      className="text-body hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1"
                    >
                      +44 7565 312 904
                    </a>
                  </div>

                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/jake-m-boulton/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1 -mx-1"
                    >
                      linkedin.com/in/jakeboulton →
                    </a>
                  </div>

                  <div>
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Blog
                    </h3>
                    <a
                      href="https://almostmakessense.blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body hover:text-accent transition-colors"
                    >
                      almostmakessense.blog →
                    </a>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h3 className="text-caption uppercase tracking-wider text-muted mb-2">
                      Response Time
                    </h3>
                    <p className="text-body text-muted">
                      Usually within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted/5">
        <Container size="small">
          <ScrollReveal>
            <h2 className="text-h2 uppercase tracking-tight mb-12">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Accordion
              items={[
                {
                  question: "What types of projects do you accept?",
                  answer:
                    "I specialise in asset optimisation for XR, VR/AR experience design, and 3D art. I'm particularly interested in projects that push the boundaries of real-time 3D.",
                },
                {
                  question: "What&apos;s your typical process?",
                  answer:
                    "I start with a discovery call to understand your needs, then provide a proposal and quote. Once approved, I work in iterative sprints with regular check-ins to ensure we&apos;re aligned.",
                },
                {
                  question: "Do you work remotely?",
                  answer:
                    "Yes, I work with clients globally. I collaborate effectively across time zones and am comfortable with asynchronous communication.",
                },
              ]}
            />
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
