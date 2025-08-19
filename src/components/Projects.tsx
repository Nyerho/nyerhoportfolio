import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Filter, BarChart3, TrendingUp, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  updated_at: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Featured projects with custom data
  const featuredProjects: Project[] = [
    {
      id: 1,
      title: 'Sales Performance Dashboard',
      description: 'Interactive Power BI dashboard analyzing sales trends, customer segmentation, and revenue forecasting with real-time KPI tracking and automated reporting.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Power BI', 'DAX', 'SQL', 'Excel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'Dashboard',
      featured: true
    },
    {
      id: 2,
      title: 'Customer Analytics Platform',
      description: 'Python-based analytics platform for customer behavior analysis, churn prediction, and lifetime value calculation using machine learning algorithms.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'Analytics',
      featured: true
    },
    {
      id: 3,
      title: 'Financial Reporting Automation',
      description: 'Automated financial reporting system using Excel VBA and Power Query to streamline monthly reporting processes and reduce manual errors.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Excel', 'VBA', 'Power Query', 'Power Pivot'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'Automation',
      featured: true
    },
    {
      id: 4,
      title: 'Web Traffic Analysis',
      description: 'Comprehensive web analytics solution using Google Analytics API and Python to track user behavior, conversion rates, and marketing campaign effectiveness.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Google Analytics', 'Python', 'API', 'Data Studio'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'Web Analytics'
    }
  ];

  const categories = ['All', 'Dashboard', 'Analytics', 'Automation', 'Web Analytics'];

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        // Replace 'username' with actual GitHub username
        const response = await fetch('https://api.github.com/users/octocat/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const filteredProjects = selectedFilter === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === selectedFilter);

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Dashboard':
        return <BarChart3 className="w-4 h-4" />;
      case 'Analytics':
        return <TrendingUp className="w-4 h-4" />;
      case 'Automation':
        return <Database className="w-4 h-4" />;
      default:
        return <BarChart3 className="w-4 h-4" />;
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          >
            Featured Projects
          </motion.h2>
          
          {/* Filter Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                onClick={() => setSelectedFilter(category)}
                className={`transition-all duration-300 ${
                  selectedFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-slate-500'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="group"
              >
                <Card className="h-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.featured && (
                      <Badge className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      {getCategoryIcon(project.category)}
                    </div>
                    <CardDescription className="text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex gap-3">
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* GitHub Repositories Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Recent GitHub Activity
            </h3>
            
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="bg-slate-800/50 border-slate-700/50 animate-pulse">
                    <CardHeader>
                      <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-700 rounded w-full"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-3 bg-slate-700 rounded w-1/2"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repositories.slice(0, 6).map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">{repo.name}</CardTitle>
                        <CardDescription className="text-slate-400">
                          {repo.description || 'No description available'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-slate-400">
                          <span>{repo.language}</span>
                          <span>⭐ {repo.stargazers_count}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white"
                        >
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Repository
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;