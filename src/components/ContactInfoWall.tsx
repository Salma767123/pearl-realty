"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    id: "email",
    label: "EMAIL",
    value: "advisory@pearlrealty.ae",
    icon: Mail,
    href: "mailto:advisory@pearlrealty.ae",
  },
  {
    id: "phone",
    label: "PHONE",
    value: "+971 52 493 3408",
    icon: Phone,
    href: "tel:+971524933408",
  },
  {
    id: "whatsapp",
    label: "WHATSAPP",
    value: "Priority Direct Chat",
    icon: MessageSquare,
    href: "https://wa.me/971524933408",
  },
  {
    id: "location",
    label: "LOCATION",
    value: "DIFC, Dubai UAE",
    icon: MapPin,
    href: "#",
  },
  {
    id: "hours",
    label: "PRIVATE HOURS",
    value: "Mon - Sat | By Appointment",
    icon: Clock,
    href: "#",
  },
];

const ContactInfoWall = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      {contactDetails.map((detail, index) => (
        <motion.a
          key={detail.id}
          href={detail.href}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          whileHover={{ x: 10 }}
          className="group relative flex flex-col py-4 px-6 overflow-hidden transition-all"
        >
          {/* Sculpted Panel Background (Layered Strips) */}
          <div className="absolute inset-0 bg-[#111111]/[0.02] border-l-2 border-transparent group-hover:border-[#C7A56A] group-hover:bg-[#C7A56A]/[0.05] transition-all duration-500" />
          
          {/* Thin Gold Divider */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#C7A56A]/30 via-[#C7A56A]/10 to-transparent" />
          
          {/* Floating Gold Glow Line (Expands on Hover) */}
          <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-[#C7A56A] shadow-[0_0_15px_rgba(199,165,106,0.8)]"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          <div className="relative z-10 flex items-center justify-between">
            <div className="space-y-1">
              <span className="block font-body text-[9px] tracking-[0.3em] font-bold text-[#111111]/50 group-hover:text-[#C7A56A] transition-colors duration-300">
                {detail.label}
              </span>
              <span className="block font-display text-base md:text-lg lg:text-xl text-[#111111] group-hover:text-[#9E7A43] transition-colors duration-300">
                {detail.value}
              </span>
            </div>
            
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent group-hover:border-[#C7A56A]/20 transition-all duration-500">
              <detail.icon className="w-4 h-4 text-[#C7A56A] group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default ContactInfoWall;
