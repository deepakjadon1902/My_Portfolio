

// "use client";

// import { useState, FormEvent } from "react";
// import { motion } from "framer-motion";
// import { Send, Copy, Check, Mail, MessageCircle, User, Phone, MapPin, Clock } from "lucide-react";

// export const ContactForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [copied, setCopied] = useState(false);

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     const emailSubject = encodeURIComponent(subject || `Portfolio Contact from ${name || "Visitor"}`);
//     const body = encodeURIComponent(
//       `Hi Deepak,\n\n${message}\n\n` +
//       `Contact Details:\n` +
//       `Name: ${name}\n` +
//       `Email: ${email}\n` +
//       `Phone: ${phone || "Not provided"}\n\n` +
//       `Best regards,\n${name}`
//     );
//     window.location.href = `mailto:deepakjadon1907@gmail.com?subject=${emailSubject}&body=${body}`;
//   };

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText("deepakjadon1907@gmail.com");
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch {}
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="size-4 sm:size-5" />,
//       label: "Email",
//       value: "deepakjadon1907@gmail.com",
//       link: "mailto:deepakjadon1907@gmail.com"
//     },
//     {
//       icon: <Phone className="size-4 sm:size-5" />,
//       label: "Phone",
//       value: "+91 91493 70081",
//       link: "tel:+919149370081"
//     },
//     {
//       icon: <MapPin className="size-4 sm:size-5" />,
//       label: "Location",
//       value: "Mathura, Uttar Pradesh, India",
//       link: null
//     },
//     {
//       icon: <Clock className="size-4 sm:size-5" />,
//       label: "Response Time",
//       value: "Within 24 hours",
//       link: null
//     }
//   ];

//   return (
//     <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-8 sm:mb-12 md:mb-16"
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-4 sm:mb-6">
//             Let's Work Together
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl text-black/70 max-w-2xl mx-auto leading-relaxed">
//             Have a project in mind or just want to chat about technology? 
//             I'd love to hear from you and explore how we can bring your ideas to life.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="lg:col-span-1"
//           >
//             <div className="glass card-3d ripple rounded-xl p-4 sm:p-6 md:p-8 h-full">
//               <div className="flex items-center gap-3 mb-4 sm:mb-6">
//                 <MessageCircle className="size-6 sm:size-7 text-[color:var(--neo-aqua)]" />
//                 <h2 className="text-xl sm:text-2xl font-semibold text-black">Get In Touch</h2>
//               </div>
              
//               <p className="text-sm sm:text-base text-black/70 mb-6 sm:mb-8 leading-relaxed">
//                 Ready to start your next project? Drop me a message and let's discuss how we can work together to create something amazing.
//               </p>

//               <div className="space-y-4 sm:space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <motion.div
//                     key={info.label}
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: 0.1 * index }}
//                     className="flex items-start gap-3 sm:gap-4"
//                   >
//                     <div className="text-[color:var(--neo-aqua)] mt-1 flex-shrink-0">
//                       {info.icon}
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <p className="text-xs sm:text-sm font-medium text-black/60 mb-1">
//                         {info.label}
//                       </p>
//                       {info.link ? (
//                         <a 
//                           href={info.link}
//                           className="text-sm sm:text-base text-black hover:text-[color:var(--neo-aqua)] transition-colors duration-200 break-all sm:break-normal"
//                         >
//                           {info.value}
//                         </a>
//                       ) : (
//                         <p className="text-sm sm:text-base text-black">
//                           {info.value}
//                         </p>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.button
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: 0.5 }}
//                 onClick={handleCopy}
//                 className="w-full mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-[color:var(--border)]/70 px-4 py-3 text-sm font-medium text-black/80 hover:text-black hover:neon transition-all duration-200"
//               >
//                 {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
//                 {copied ? "Email Copied!" : "Copy Email Address"}
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="lg:col-span-2"
//           >
//             <div className="glass card-3d ripple rounded-xl p-4 sm:p-6 md:p-8">
//               <div className="flex items-center gap-3 mb-6 sm:mb-8">
//                 <Send className="size-6 sm:size-7 text-[color:var(--neo-aqua)]" />
//                 <h2 className="text-xl sm:text-2xl font-semibold text-black">Send Message</h2>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//                 {/* Name and Email Row */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                   <label className="space-y-2">
//                     <span className="text-sm font-medium text-black/70 flex items-center gap-2">
//                       <User className="size-4" />
//                       Your Name *
//                     </span>
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       placeholder="John Doe"
//                       required
//                       className="w-full rounded-lg bg-[color:var(--card)]/70 border border-[color:var(--border)]/60 px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-[color:var(--neo-aqua)] focus:ring-2 focus:ring-[color:var(--neo-aqua)]/20 transition-all duration-200"
//                     />
//                   </label>
//                   <label className="space-y-2">
//                     <span className="text-sm font-medium text-black/70 flex items-center gap-2">
//                       <Mail className="size-4" />
//                       Your Email *
//                     </span>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="you@example.com"
//                       required
//                       className="w-full rounded-lg bg-[color:var(--card)]/70 border border-[color:var(--border)]/60 px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-[color:var(--neo-aqua)] focus:ring-2 focus:ring-[color:var(--neo-aqua)]/20 transition-all duration-200"
//                     />
//                   </label>
//                 </div>

//                 {/* Phone and Subject Row */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                   <label className="space-y-2">
//                     <span className="text-sm font-medium text-black/70 flex items-center gap-2">
//                       <Phone className="size-4" />
//                       Phone Number
//                     </span>
//                     <input
//                       type="tel"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       placeholder="+1 (555) 123-4567"
//                       className="w-full rounded-lg bg-[color:var(--card)]/70 border border-[color:var(--border)]/60 px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-[color:var(--neo-aqua)] focus:ring-2 focus:ring-[color:var(--neo-aqua)]/20 transition-all duration-200"
//                     />
//                   </label>
//                   <label className="space-y-2">
//                     <span className="text-sm font-medium text-black/70 flex items-center gap-2">
//                       <MessageCircle className="size-4" />
//                       Subject *
//                     </span>
//                     <input
//                       type="text"
//                       value={subject}
//                       onChange={(e) => setSubject(e.target.value)}
//                       placeholder="Project Discussion"
//                       required
//                       className="w-full rounded-lg bg-[color:var(--card)]/70 border border-[color:var(--border)]/60 px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-[color:var(--neo-aqua)] focus:ring-2 focus:ring-[color:var(--neo-aqua)]/20 transition-all duration-200"
//                     />
//                   </label>
//                 </div>

//                 {/* Message */}
//                 <label className="space-y-2">
//                   <span className="text-sm font-medium text-black/70">Message *</span>
//                   <textarea
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Hello Deepak, I have an exciting project idea that I'd love to discuss with you. I'm looking for a skilled developer to help bring my vision to life..."
//                     rows={6}
//                     required
//                     className="w-full rounded-lg bg-[color:var(--card)]/70 border border-[color:var(--border)]/60 px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-[color:var(--neo-aqua)] focus:ring-2 focus:ring-[color:var(--neo-aqua)]/20 transition-all duration-200 resize-y min-h-[120px]"
//                   />
//                 </label>

//                 {/* Footer */}
//                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 sm:pt-6">
//                   <div className="text-xs sm:text-sm text-black/60 order-2 sm:order-1">
//                     <p>* Required fields</p>
//                     <p className="mt-1">I'll get back to you within 24 hours</p>
//                   </div>
//                   <button
//                     type="submit"
//                     className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[color:var(--neo-aqua)]/90 text-black font-medium px-6 py-3 hover:neon hover:translate-y-[-2px] transition-all duration-200 text-sm sm:text-base"
//                   >
//                     <Send className="size-4 sm:size-5" /> 
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-center mt-8 sm:mt-12 md:mt-16"
//         >
//           <p className="text-sm sm:text-base text-black/70 mb-4">
//             Prefer to email directly?
//           </p>
//           <a
//             href="mailto:deepakjadon1907@gmail.com"
//             className="inline-flex items-center gap-2 text-[color:var(--neo-aqua)] hover:text-black font-medium underline underline-offset-4 hover:no-underline transition-all duration-200 text-sm sm:text-base"
//           >
//             <Mail className="size-4" />
//             deepakjadon1907@gmail.com
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check, Mail, MessageCircle, User, Phone, MapPin, Clock } from "lucide-react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailSubject = encodeURIComponent(subject || `Portfolio Contact from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Hi Deepak,\n\n${message}\n\n` +
      `Contact Details:\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "Not provided"}\n\n` +
      `Best regards,\n${name}`
    );
    window.location.href = `mailto:deepakjadon1907@gmail.com?subject=${emailSubject}&body=${body}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("deepakjadon1907@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const contactInfo = [
    {
      icon: <Mail className="size-4 sm:size-5" />,
      label: "Email",
      value: "deepakjadon1907@gmail.com",
      link: "mailto:deepakjadon1907@gmail.com"
    },
    {
      icon: <Phone className="size-4 sm:size-5" />,
      label: "Phone",
      value: "+91 91493 70081",
      link: "tel:+919149370081"
    },
    {
      icon: <MapPin className="size-4 sm:size-5" />,
      label: "Location",
      value: "Mathura, Uttar Pradesh, India",
      link: null
    },
    {
      icon: <Clock className="size-4 sm:size-5" />,
      label: "Response Time",
      value: "Within 24 hours",
      link: null
    }
  ];

  return (
    <section className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-3 xs:mb-4 sm:mb-6 leading-tight">
            Let's Work Together
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 xs:px-0">
            Have a project in mind or just want to chat about technology? 
            I'd love to hear from you and explore how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="xl:col-span-1 order-2 xl:order-1"
          >
            <div className="glass card-3d ripple rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 md:p-8 h-full">
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-3 xs:mb-4 sm:mb-6">
                <MessageCircle className="size-5 xs:size-6 sm:size-7 text-[color:var(--neo-aqua)] flex-shrink-0" />
                <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-black">Get In Touch</h2>
              </div>
              
              <p className="text-xs xs:text-sm sm:text-base text-black/70 mb-4 xs:mb-6 sm:mb-8 leading-relaxed">
                Ready to start your next project? Drop me a message and let's discuss how we can work together to create something amazing.
              </p>

              <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-2 xs:gap-3 sm:gap-4"
                  >
                    <div className="text-[color:var(--neo-aqua)] mt-0.5 xs:mt-1 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-black/60 mb-0.5 xs:mb-1">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-xs xs:text-sm sm:text-base text-black hover:text-[color:var(--neo-aqua)] transition-colors duration-200 break-words hyphens-auto"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-xs xs:text-sm sm:text-base text-black break-words">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                onClick={handleCopy}
                className="w-full mt-4 xs:mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-[color:var(--border)]/70 px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm font-medium text-black/80 hover:text-black hover:neon transition-all duration-200 min-h-[44px]"
              >
                {copied ? <Check className="size-3 xs:size-4 flex-shrink-0" /> : <Copy className="size-3 xs:size-4 flex-shrink-0" />}
                <span className="truncate">{copied ? "Email Copied!" : "Copy Email Address"}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="xl:col-span-2 order-1 xl:order-2"
          >
            <div className="glass card-3d ripple rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 md:p-8">
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-4 xs:mb-6 sm:mb-8">
                <Send className="size-5 xs:size-6 sm:size-7 text-[color:var(--neo-aqua)] flex-shrink-0" />
                <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-black">Send Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4 sm:space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                  <label className="space-y-1.5 xs:space-y-2">
                    <span className="text-xs xs:text-sm font-medium text-black/70 flex items-center gap-1.5 xs:gap-2">
                      <User className="size-3 xs:size-4 flex-shrink-0" />
                      Your Name *
                    </span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-lg bg-[color:var(--card)]/70 border border-[color:var(--border)]/60 px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm sm:text-base outline-none focus:border-[color:var(--neo-aqua)] focus:ring-2 focus:ring-[color:var(--neo-aqua)]/20 transition-all duration-200 min-h-[44px]"
                    />
                  </label>
                  <label className="space-y-1.5 xs:space-y-2">
                    <span className="text-xs xs:text-sm font-medium text-black/70 flex items-center gap-1.5 xs:gap-2">
                      <Mail className="size-3 xs:size-4 flex-shrink-0" />
                      Your Email *
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-lg bg-[color:var(--card)]/70 border border-[color:var(--border)]/60 px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm sm:text-base outline-none focus:border-[color:var(--neo-aqua)] focus:ring-2 focus:ring-[color:var(--neo-aqua)]/20 transition-all duration-200 min-h-[44px]"
                    />
                  </label>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                  <label className="space-y-1.5 xs:space-y-2">
                    <span className="text-xs xs:text-sm font-medium text-black/70 flex items-center gap-1.5 xs:gap-2">
                      <Phone className="size-3 xs:size-4 flex-shrink-0" />
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="w-full rounded-lg bg-[color:var(--card)]/70 border border-[color:var(--border)]/60 px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm sm:text-base outline-none focus:border-[color:var(--neo-aqua)] focus:ring-2 focus:ring-[color:var(--neo-aqua)]/20 transition-all duration-200 min-h-[44px]"
                    />
                  </label>
                  <label className="space-y-1.5 xs:space-y-2">
                    <span className="text-xs xs:text-sm font-medium text-black/70 flex items-center gap-1.5 xs:gap-2">
                      <MessageCircle className="size-3 xs:size-4 flex-shrink-0" />
                      Subject *
                    </span>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Project Discussion"
                      required
                      className="w-full rounded-lg bg-[color:var(--card)]/70 border border-[color:var(--border)]/60 px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm sm:text-base outline-none focus:border-[color:var(--neo-aqua)] focus:ring-2 focus:ring-[color:var(--neo-aqua)]/20 transition-all duration-200 min-h-[44px]"
                    />
                  </label>
                </div>

                {/* Message */}
                <label className="space-y-1.5 xs:space-y-2">
                  <span className="text-xs xs:text-sm font-medium text-black/70">Message *</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Deepak, I have an exciting project idea that I'd love to discuss with you. I'm looking for a skilled developer to help bring my vision to life..."
                    rows={5}
                    required
                    className="w-full rounded-lg bg-[color:var(--card)]/70 border border-[color:var(--border)]/60 px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm sm:text-base outline-none focus:border-[color:var(--neo-aqua)] focus:ring-2 focus:ring-[color:var(--neo-aqua)]/20 transition-all duration-200 resize-y min-h-[100px] xs:min-h-[120px] sm:min-h-[140px]"
                  />
                </label>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 xs:gap-4 pt-3 xs:pt-4 sm:pt-6">
                  <div className="text-xs sm:text-sm text-black/60 order-2 sm:order-1">
                    <p>* Required fields</p>
                    <p className="mt-0.5 xs:mt-1">I'll get back to you within 24 hours</p>
                  </div>
                  <button
                    type="submit"
                    className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-1.5 xs:gap-2 rounded-lg bg-[color:var(--neo-aqua)]/90 text-black font-medium px-4 xs:px-6 py-2.5 xs:py-3 hover:neon hover:translate-y-[-2px] transition-all duration-200 text-xs xs:text-sm sm:text-base min-h-[44px] whitespace-nowrap"
                  >
                    <Send className="size-3 xs:size-4 sm:size-5 flex-shrink-0" /> 
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12 md:mt-16"
        >
          <p className="text-sm sm:text-base text-black/70 mb-4">
            Prefer to email directly?
          </p>
          <a
            href="mailto:deepakjadon1907@gmail.com"
            className="inline-flex items-center gap-2 text-[color:var(--neo-aqua)] hover:text-black font-medium underline underline-offset-4 hover:no-underline transition-all duration-200 text-sm sm:text-base"
          >
            <Mail className="size-4" />
            deepakjadon1907@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;