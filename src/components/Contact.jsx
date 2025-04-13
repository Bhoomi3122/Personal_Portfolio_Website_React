import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { Send, Users, Mail, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending...");
    emailjs
      .send(
        "service_bevbp7p",
        "template_ojic7df",
        formData,
        "Vdl7FRyuAf5kaADHp"
      )
      .then(() => {
        toast.update(toastId, {
          render: "Message Sent Successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.update(toastId, {
          render: "Failed to send message. Try again later.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Floating elements animation
  const FloatingElement = ({ delay, x, y, scale, rotate, children }) => {
    return (
      <motion.div
        className="absolute text-sky-300/30 pointer-events-none"
        initial={{ x, y }}
        animate={{
          x: [x, x + 10, x - 5, x + 5, x],
          y: [y, y - 10, y + 5, y - 5, y],
          rotate: [rotate, rotate + 5, rotate - 3, rotate + 2, rotate],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay
        }}
        style={{ scale }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <FloatingElement delay={0} x="10%" y="10%" scale={1.5} rotate={0}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-300/20 to-cyan-400/20 blur-md" />
        </FloatingElement>
        <FloatingElement delay={1} x="80%" y="20%" scale={2} rotate={45}>
          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-sky-300/20 to-cyan-400/20 blur-md" />
        </FloatingElement>
        <FloatingElement delay={0.5} x="20%" y="70%" scale={1.2} rotate={15}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-300/20 to-cyan-400/20 blur-md" />
        </FloatingElement>
        <FloatingElement delay={1.5} x="70%" y="80%" scale={1.8} rotate={-15}>
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-400/20 to-cyan-300/20 blur-md" />
        </FloatingElement>
        <FloatingElement delay={0.8} x="40%" y="30%" scale={1.3} rotate={30}>
          <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-sky-300/20 to-cyan-400/20 blur-md" />
        </FloatingElement>
      </div>

      {/* Contact container */}
      <motion.div 
        className="relative z-10 p-8 mt-12 mb-12 rounded-2xl bg-slate-900/90 backdrop-blur-lg shadow-xl border border-sky-300/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="mt-2 text-lg text-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Have a question or want to work together? Send me a message!
          </motion.p>
        </div>

        {/* Contact form */}
        <motion.form 
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Name input */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-3 top-3 text-sky-300">
              <Users size={20} />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-sky-300/20 rounded-lg focus:ring-2 focus:ring-sky-300/50 focus:border-sky-300/50 transition-all duration-300 outline-none backdrop-blur-sm text-slate-100"
              placeholder="Your Name"
            />
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-300 to-cyan-300" 
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Email input */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-3 top-3 text-sky-300">
              <Mail size={20} />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-sky-300/20 rounded-lg focus:ring-2 focus:ring-sky-300/50 focus:border-sky-300/50 transition-all duration-300 outline-none backdrop-blur-sm text-slate-100"
              placeholder="Your Email"
            />
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-300 to-cyan-300" 
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Message input */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-3 top-3 text-sky-300">
              <MessageSquare size={20} />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-sky-300/20 rounded-lg focus:ring-2 focus:ring-sky-300/50 focus:border-sky-300/50 transition-all duration-300 outline-none backdrop-blur-sm resize-none text-slate-100"
              placeholder="Your Message"
            />
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-300 to-cyan-300" 
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Submit button */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.button
              type="submit"
              className="group relative overflow-hidden px-8 py-3 bg-gradient-to-r from-sky-300 to-cyan-300 text-slate-900 font-medium rounded-lg shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
              >
                <Send size={18} />
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.2 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </motion.form>

        {/* Contact info */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-400">
            You can also reach me directly at <span className="text-sky-300 font-medium">gargbhoomi01@gmail.com</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;