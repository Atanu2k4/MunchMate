import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer
      className="bg-purple-900 text-white py-6 px-4 mt-0" // Changed mt-12 to mt-0
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      style={{
        marginTop: 0,
        paddingTop: "1.5rem" // Ensuring some padding inside the footer
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Simple Copyright */}
        <div className="text-center">
          <p className="text-purple-200 text-sm">
            &copy; {currentYear} MunchMate. All rights reserved.
          </p>

          <div className="mt-3 flex justify-center space-x-6">
            <a href="#" className="text-purple-300 text-sm hover:text-amber-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-purple-300 text-sm hover:text-amber-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;