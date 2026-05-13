"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import ContactInfoWall from "@/components/ContactInfoWall";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#F8F7F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <ScrollReveal>
              <span className="font-body text-xs tracking-[0.4em] uppercase text-gold font-semibold mb-6 block">
                Get In Touch
              </span>
              <h2 className="font-display text-5xl md:text-7xl font-light mb-8 leading-tight">
                Secure Your <br /><span className="text-gold">Next Move.</span>
              </h2>
              <p className="font-body text-lg text-charcoal/60 max-w-md leading-relaxed mb-12">
                Discrete advisory for the world's most sophisticated investors. Request a private briefing or asset tour today.
              </p>
            </ScrollReveal>

            <ContactInfoWall />
          </div>

          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
