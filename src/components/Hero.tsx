import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div 
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Content */}
        <div className="backdrop-blur-md bg-slate-900/20 rounded-3xl p-8 md:p-12 border border-slate-700/30 shadow-2xl">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Esiso Oghenenyerhovwo
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-blue-400 mb-6 font-semibold"
          >
            Data Analyst
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming raw data into actionable insights with 2+ years of experience in 
            <span className="text-blue-400 font-semibold"> Power BI, Python, Excel, and Google Analytics</span>. 
            Passionate about data visualization, statistical analysis, and driving business intelligence decisions.
          </motion.p>
          
          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-4 mb-8"
          >
            <motion.a 
              href="https://github.com/Nyerho" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/50"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/50"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a 
              href="mailto:neroesiso@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/50"
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a 
              href="https://instagram.com/nye.rho" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/50"
            >
              <Instagram className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a 
              href="https://twitter.com/nyerhoesiso" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/50"
            >
              <Twitter className="w-6 h-6 text-white" />
            </motion.a>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              size="sm"
            >
              View Projects
            </Button>
            
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white px-6 py-2 rounded-full transition-all duration-300"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-slate-400 mx-auto opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;