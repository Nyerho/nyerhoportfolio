import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Github, Linkedin, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 backdrop-blur-md bg-slate-900/40 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div 
            className="flex items-center justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <BarChart3 className="w-8 h-8 text-blue-400 mr-3" />
            <div>
              <h3 className="text-xl font-bold text-white">Esiso Oghenenyerhovwo</h3>
              <p className="text-slate-400 text-sm">Junior Data Analyst</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-slate-300 mb-4">
              Transforming data into actionable insights
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="#home"
                whileHover={{ y: -2 }}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ y: -2 }}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                About
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </motion.a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/50"
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/50"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="mailto:esiso.oghenenyerhovwo@email.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/50"
            >
              <Mail className="w-5 h-5 text-white" />
            </motion.a>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700/50" />

        {/* Copyright */}
        <div className="text-center">
          <motion.p 
            className="text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {currentYear} Esiso Oghenenyerhovwo. All rights reserved. Built with React, TypeScript & Tailwind CSS.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;