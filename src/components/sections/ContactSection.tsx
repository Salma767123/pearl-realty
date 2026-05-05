"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import ContactBackground from "../ContactBackground";
import ContactForm from "../ContactForm";
import ContactInfoWall from "../ContactInfoWall";
// import ContactTicker from "../ContactTicker";

const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const headlineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#F8F4EC]"
    >
      <ContactBackground />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 lg:px-24 pt-20 pb-16 w-full">

        {/* Header Section */}
        <div className="mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headlineVariants}
            className="flex flex-col gap-2"
          >
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-[#111111] uppercase"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                GAIN
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] uppercase bg-gradient-to-r from-[#C7A56A] via-[#9E7A43] to-[#C7A56A] bg-clip-text text-transparent group relative"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                PRIVATE ACCESS
                {/* Gold Shimmer Sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                />
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 max-w-2xl font-body text-base md:text-lg text-[#111111]/70 leading-relaxed"
            >
              Direct connection for UAE real estate, strategic investments, portfolio growth, and private advisory.
            </motion.p>
          </motion.div>
        </div>

        {/* Rigid Equal-Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-12 md:gap-16 lg:gap-24">

          {/* Left Side: Stretched & Balanced Info Wall */}
          <div className="h-full flex flex-col py-12 md:py-16">
            <ContactInfoWall />
          </div>

          {/* Right Side: Centered Form Slab */}
          <div className="h-full flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* <ContactTicker /> */}
    </section>
  );
};

export default ContactSection;
