import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, Database, FileSpreadsheet, Presentation as PresentationChart, TrendingUp, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skills = [
    { name: 'Power BI', level: 90, icon: <BarChart3 className="w-5 h-5" />, category: 'Visualization' },
    { name: 'Python', level: 85, icon: <Brain className="w-5 h-5" />, category: 'Programming' },
    { name: 'Excel', level: 95, icon: <FileSpreadsheet className="w-5 h-5" />, category: 'Analysis' },
    { name: 'Google Analytics', level: 80, icon: <TrendingUp className="w-5 h-5" />, category: 'Web Analytics' },
    { name: 'SQL', level: 85, icon: <Database className="w-5 h-5" />, category: 'Database' },
    { name: 'PowerPoint', level: 90, icon: <PresentationChart className="w-5 h-5" />, category: 'Presentation' },
  ];

  const expertise = [
    'Data Visualization & Dashboard Creation',
    'Statistical Analysis & Modeling',
    'Business Intelligence & Reporting',
    'Data Mining & ETL Processes',
    'KPI Development & Tracking',
    'Market Research & Analysis',
    'Predictive Analytics',
    'Data Quality Assessment',
    'A/B Testing & Experimentation',
    'Customer Segmentation'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="backdrop-blur-md bg-slate-900/20 rounded-3xl p-8 md:p-12 border border-slate-700/30 shadow-2xl"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          >
            About Me
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="bg-slate-800/30 border-slate-700/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <img
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                        alt="Esiso Oghenenyerhovwo"
                        className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-blue-400/20"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-600/20"></div>
                    </motion.div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-white mb-2">Data Analyst</h3>
                      <p className="text-blue-400 mb-4">2+ Years Experience</p>
                      <p className="text-slate-300 leading-relaxed">
                        Passionate data analyst with expertise in transforming complex datasets into 
                        actionable business insights. Specialized in creating compelling visualizations 
                        and developing data-driven solutions that drive strategic decision-making.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Expertise Areas */}
              <Card className="bg-slate-800/30 border-slate-700/40 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Core Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {expertise.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 text-xs">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Skills Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="bg-slate-800/30 border-slate-700/40 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={skill.name} 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-500/20 rounded-lg">
                            <span className="text-blue-400">{skill.icon}</span>
                          </div>
                          <div>
                            <span className="text-white font-medium">{skill.name}</span>
                            <p className="text-xs text-slate-400">{skill.category}</p>
                          </div>
                        </div>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="bg-slate-800/30 border-slate-700/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Professional Focus</h4>
                  <p className="text-slate-300 leading-relaxed">
                    I specialize in end-to-end data analysis workflows, from data collection and cleaning 
                    to advanced statistical modeling and interactive dashboard development. My experience 
                    spans across various industries, helping organizations make data-driven decisions 
                    through comprehensive analytics and compelling data storytelling.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;