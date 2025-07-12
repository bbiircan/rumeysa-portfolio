"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+90) 544 719 78 60"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dev.rumeysabircan@gmail.com"
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_yb7pq3p",
      "template_oarlevt",
      form.current,
      "vjpO_7bQIi5cdeQxL"
    )
      .then(() => {
        alert("Message sent successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("An error occurred while sending the message.");
      });
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Feel free to reach out for any projects or inquiries.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" placeholder="First Name" required />
                <Input name="lastname" placeholder="Last Name" required />
                <Input name="email" type="email" placeholder="Email Address" required />
                <Input name="phone" placeholder="Phone Number" />
              </div>
              <Textarea name="message" className="h-[200px]" placeholder="Type your message here." required />
              <Button type="submit" size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>

          {/* contact info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex flex-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

