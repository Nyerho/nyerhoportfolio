import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitBranch, Calendar, Users, MapPin, Building, Link as LinkIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

interface GitHubProfile {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  company: string;
  blog: string;
  created_at: string;
}

const GitHubShowcase: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch profile data
        const profileResponse = await fetch('https://api.github.com/users/Nyerho');
        const profileData = await profileResponse.json();
        setProfile(profileData);

        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/Nyerho/repos?sort=updated&per_page=12');
        const reposData = await reposResponse.json();
        setRepositories(reposData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const filteredRepos = selectedFilter === 'All' 
    ? repositories 
    : repositories.filter(repo => {
        if (selectedFilter === 'Original') return !repo.fork;
        if (selectedFilter === 'Forks') return repo.fork;
        if (selectedFilter === 'Archived') return repo.archived;
        return true;
      });

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
      transition: { duration: 0.5 }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="github" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-slate-900/30 rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
            <div className="animate-pulse">
              <div className="h-12 bg-slate-700 rounded w-1/3 mx-auto mb-8"></div>
              <div className="h-6 bg-slate-700 rounded w-1/2 mx-auto mb-12"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-md bg-slate-900/20 rounded-3xl p-8 md:p-12 border border-slate-700/30 shadow-2xl"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              GitHub Profile
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore my open-source contributions, projects, and coding journey on GitHub
            </p>
          </motion.div>

          {/* Profile Card */}
          {profile && (
            <motion.div variants={itemVariants} className="mb-12">
                             <Card className="bg-slate-800/30 border-slate-700/40 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <img
                        src={profile.avatar_url}
                        alt={profile.name || profile.login}
                        className="w-32 h-32 rounded-full border-4 border-slate-600 shadow-lg"
                      />
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {profile.name || profile.login}
                      </h3>
                      <p className="text-slate-400 text-lg mb-4">
                        @{profile.login}
                      </p>
                      {profile.bio && (
                        <p className="text-slate-300 mb-6 max-w-2xl">
                          {profile.bio}
                        </p>
                      )}

                      {/* Stats */}
                      <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Users className="w-5 h-5" />
                          <span>{profile.followers} followers</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <Users className="w-5 h-5" />
                          <span>{profile.following} following</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <Github className="w-5 h-5" />
                          <span>{profile.public_repos} repositories</span>
                        </div>
                      </div>

                      {/* Location and Company */}
                      <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-400">
                        {profile.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{profile.location}</span>
                          </div>
                        )}
                        {profile.company && (
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span>{profile.company}</span>
                          </div>
                        )}
                        {profile.blog && (
                          <div className="flex items-center gap-2">
                            <LinkIcon className="w-4 h-4" />
                            <a 
                              href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400 transition-colors"
                            >
                              {profile.blog}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Visit GitHub Button */}
                      <div className="mt-6">
                                                 <Button
                           asChild
                           className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                           size="sm"
                         >
                           <a href={`https://github.com/${profile.login}`} target="_blank" rel="noopener noreferrer">
                             <Github className="w-4 h-4 mr-2" />
                             Visit GitHub Profile
                           </a>
                         </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Repository Filters */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {['All', 'Original', 'Forks', 'Archived'].map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter)}
                  className={`transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-slate-500'
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Repositories Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Recent Repositories
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                                     <Card className="h-full bg-slate-800/30 border-slate-700/40 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-white text-lg line-clamp-2">
                          {repo.name}
                        </CardTitle>
                        {repo.fork && (
                          <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                            Fork
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-slate-400 line-clamp-3">
                        {repo.description || 'No description available'}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Topics */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <Badge
                              key={topic}
                              variant="secondary"
                              className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs"
                            >
                              {topic}
                            </Badge>
                          ))}
                          {repo.topics.length > 3 && (
                            <Badge variant="secondary" className="bg-slate-500/20 text-slate-300 border-slate-500/30 text-xs">
                              +{repo.topics.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-slate-400">
                        <div className="flex items-center gap-4">
                          {repo.language && (
                            <span className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitBranch className="w-4 h-4" />
                            {repo.forks_count}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(repo.updated_at)}
                        </span>
                      </div>
                    </CardContent>

                    <CardContent className="pt-0">
                      <div className="flex gap-2">
                                                 <Button
                           asChild
                           size="sm"
                           className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                         >
                           <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                             <Github className="w-4 h-4 mr-2" />
                             View Code
                           </a>
                         </Button>
                         {repo.homepage && (
                           <Button
                             asChild
                             variant="outline"
                             size="sm"
                             className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white"
                           >
                             <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                               <ExternalLink className="w-4 h-4" />
                             </a>
                           </Button>
                         )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* View All Repositories Button */}
            <motion.div 
              variants={itemVariants}
              className="text-center mt-12"
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white px-6"
              >
                <a href={`https://github.com/${profile?.login}?tab=repositories`} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View All Repositories
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubShowcase;
