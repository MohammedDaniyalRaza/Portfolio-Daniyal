'use client';

import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, FileText, Code, Mail, Linkedin, Github, Instagram, 
  Facebook, BookOpen, ArrowLeft, MapPin, Briefcase, 
  GraduationCap, Lightbulb, FolderOpen, Phone, ExternalLink,
  Star, Calendar, Clock, Users, Award, TrendingUp, Globe,
  Download, Copy, CheckCircle, X
} from 'lucide-react';

type ViewMode = 'landing' | 'simple' | 'detailed' | 'developer';

type ExperienceType = {
  title: string;
  period: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
};

type EducationType = {
  degree: string;
  period: string;
  institution: string;
  location: string;
  description: string;
  gpa: string;
};

type ProjectType = {
  name: string;
  status: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
};


export default function Portfolio() {
  const [currentView, setCurrentView] = useState<ViewMode>('landing');
  const [profileData, setProfileData] = useState<any>(null);
  const [apiResponse, setApiResponse] = useState<string>('');

  // Fetch profile data from API
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('/api/profile');
        const data = await response.json();
        setProfileData(data.data);
        setApiResponse(JSON.stringify(data, null, 2));
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  // Show loading if data is not yet loaded
  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  // Type-safe variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } as any
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5 } as any }
  };

  // Type-safe stagger for children (used as a separate prop)
  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      } as any
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } as any }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } as any
    }
  };

  const LandingView = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-6xl w-full">
        <motion.div 
          className="text-center mb-16"
          variants={childVariants}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <span className="text-white text-2xl font-bold">DR</span>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Mohammed
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Daniyal Raza
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-light">
            Frontend Engineer & Startup Founder
          </p>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Creating innovative digital experiences through cutting-edge technology and exceptional design
          </p>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={staggerChildren}
        >
          <motion.div variants={childVariants} whileHover="hover">
            <motion.div variants={cardHoverVariants}>
              <Card className="h-full border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-10 text-center h-full flex flex-col justify-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Simple</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Clean overview with essential information and social connections
                  </p>
                  <Button 
                    onClick={() => setCurrentView('simple')}
                    className="mt-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    View Simple
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={childVariants} whileHover="hover">
            <motion.div variants={cardHoverVariants}>
              <Card className="h-full border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-10 text-center h-full flex flex-col justify-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Detailed</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Complete portfolio with experience, projects, and achievements
                  </p>
                  <Button 
                    onClick={() => setCurrentView('detailed')}
                    className="mt-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    View Detailed
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={childVariants} whileHover="hover">
            <motion.div variants={cardHoverVariants}>
              <Card className="h-full border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-10 text-center h-full flex flex-col justify-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Developer</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Access portfolio data via REST API endpoints
                  </p>
                  <Button 
                    onClick={() => setCurrentView('developer')}
                    className="mt-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    View API
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          variants={childVariants}
        >
          <p className="text-gray-400 text-sm">
            Choose your preferred viewing experience
          </p>
        </motion.div>
      </div>
    </motion.div>
  );

  const SimpleView = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-4xl w-full">
        <motion.div variants={childVariants}>
          <Button 
            onClick={() => setCurrentView('landing')}
            variant="ghost" 
            className="mb-12 text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Options
          </Button>
        </motion.div>

        <motion.div className="text-center" variants={staggerChildren}>
          <motion.div variants={childVariants} className="mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
              <span className="text-white text-4xl font-bold">DR</span>
            </div>
          </motion.div>

          <motion.h1 variants={childVariants} className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            {profileData.name}
          </motion.h1>
          
          <motion.p variants={childVariants} className="text-2xl md:text-3xl text-gray-600 mb-4 font-light">
            {profileData.title}
          </motion.p>

          <motion.p variants={childVariants} className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            {profileData.bio}
          </motion.p>

          <motion.div variants={childVariants} className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto mb-16 rounded-full" />

          <motion.div variants={childVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let&#39;s Connect</h3>
            <div className="flex justify-center items-center flex-wrap gap-6">
              {[
                { icon: Mail, href: `mailto:${profileData.email}`, label: "Email" },
                { icon: Linkedin, href: profileData.social.linkedin, label: "LinkedIn" },
                { icon: Github, href: profileData.social.github, label: "GitHub" },
                { icon: X, href: profileData.social.twitter, label: "X (Twitter)" },
                { icon: Instagram, href: profileData.social.instagram, label: "Instagram" },
                { icon: Facebook, href: profileData.social.facebook, label: "Facebook" },
                { icon: BookOpen, href: profileData.social.medium, label: "Medium" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                    <social.icon className="w-7 h-7 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={childVariants} className="mt-16">
            <div className="flex items-center justify-center text-gray-500 text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{profileData.location}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );

  const DetailedView = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen p-6 py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={childVariants}>
          <Button 
            onClick={() => setCurrentView('landing')}
            variant="ghost" 
            className="mb-12 text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Options
          </Button>
        </motion.div>

        <motion.div variants={staggerChildren} className="space-y-16">
          {/* Enhanced Header */}
          <motion.div variants={childVariants} className="text-center pb-12 border-b border-gray-200">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
              <span className="text-white text-4xl font-bold">DR</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">{profileData.name}</h1>
            <p className="text-2xl text-gray-600 mb-6 font-light">{profileData.title}</p>
            
            <div className="flex items-center justify-center text-gray-500 mb-8 text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{profileData.location}</span>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-8">
              {[
                { label: "Projects", value: profileData.stats.projectsCompleted, icon: FolderOpen },
                { label: "Clients", value: profileData.stats.clientsSatisfied, icon: Users },
                { label: "Experience", value: `${profileData.stats.yearsExperience}+ Years`, icon: Calendar },
                { label: "Team Size", value: profileData.stats.teamSize, icon: Award }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 flex-wrap gap-2">
              {[
                { icon: Mail, href: `mailto:${profileData.email}` },
                { icon: Linkedin, href: profileData.social.linkedin },
                { icon: Github, href: profileData.social.github },
                { icon: X, href: profileData.social.twitter },
                { icon: Instagram, href: profileData.social.instagram },
                { icon: Facebook, href: profileData.social.facebook },
                { icon: BookOpen, href: profileData.social.medium }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-gray-700 hover:text-gray-900" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* About Section */}
          <motion.section variants={childVariants}>
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{profileData.about}</p>
            </div>
          </motion.section>

          {/* Key Highlights */}
          <motion.section variants={childVariants}>
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Lightbulb className="w-8 h-8 mr-3 text-yellow-500" />
                Key Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {profileData.highlights.map((highlight: string, index: number) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Work Experience */}
          <motion.section variants={childVariants}>
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Briefcase className="w-8 h-8 mr-3 text-blue-500" />
                Work Experience
              </h2>
              <div className="space-y-8">
                {profileData.experience.map((exp: ExperienceType, index: number) => (
                  <motion.div 
                    key={index} 
                    className="relative pl-8 border-l-4 border-gray-900 hover:border-gray-700 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-gray-900 rounded-full"></div>
                    <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                        <span className="text-gray-500 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-xl text-gray-700 font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-500 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement: string, achIndex: number) => (
                          <div key={achIndex} className="flex items-center text-gray-600">
                            <Star className="w-4 h-4 mr-2 text-yellow-500 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={childVariants}>
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-green-500" />
                Education
              </h2>
              <div className="space-y-6">
                {profileData.education.map((edu: EducationType, index: number) => (
                  <motion.div 
                    key={index} 
                    className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      <span className="text-gray-500 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-xl text-gray-700 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-500 mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </p>
                    <p className="text-gray-600 mb-2">{edu.description}</p>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-yellow-500" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section variants={childVariants}>
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
              <div className="space-y-8">
                {Object.entries(profileData.skills).map(([category, skills], index: number) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                      {category === 'soft' ? 'Soft Skills' : `${category} Development`}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {(skills as string[]).map((skill: string, skillIndex: number) => (
                        <motion.div 
                          key={skillIndex} 
                          className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-center border border-gray-200 hover:border-gray-300 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="text-gray-700 font-medium text-sm">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section variants={childVariants}>
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <FolderOpen className="w-8 h-8 mr-3 text-purple-500" />
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {profileData.projects.map((project: ProjectType, index: number) => (
                  <motion.div 
                    key={index} 
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 group p-6 flex flex-col justify-between"
                    whileHover={{ y: -4 }}
                  >
                    {/* Removed image block for a cleaner, modern look */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-0">{project.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech: string, techIndex: number) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3 mt-auto">
                      {project.url && (
                        <a 
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          <span className="text-sm">Live</span>
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
                <div className="flex justify-center mt-8">
                  <a
                    href="https://github.com/MohammedDaniyalRaza?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300 text-lg gap-2"
                  >
                    View more projects
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
                    </svg>
                    </a>
                  </div>
              </div>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section variants={childVariants}>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-xl text-white">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Phone className="w-8 h-8 mr-3" />
                Let&#39;s Work Together
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Ready to bring your ideas to life? I&#39;m always excited to work on new projects and collaborate with amazing people.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-gray-400" />
                      <span className="text-gray-300">{profileData.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-gray-400" />
                      <span className="text-gray-300">{profileData.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                      <span className="text-gray-300">{profileData.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <a 
                    href={`mailto:${profileData.email}`}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );

  const DeveloperView = () => {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="min-h-screen p-6 py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={childVariants}>
            <Button 
              onClick={() => setCurrentView('landing')}
              variant="ghost" 
              className="mb-12 text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Options
            </Button>
          </motion.div>

          <motion.div variants={staggerChildren} className="space-y-12">
            <motion.div variants={childVariants} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">Developer API</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Access my complete portfolio data programmatically through a RESTful API
              </p>
            </motion.div>

            <motion.div variants={childVariants}>
              <div className="rounded-3xl p-10 shadow-xl border border-gray-100 bg-transparent">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">API Endpoint</h2>
                
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 mb-8 relative overflow-hidden">
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 gap-4 min-w-0">
                    <div className="flex items-center space-x-4 w-full min-w-0">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold flex-shrink-0">GET</span>
                      <div className="flex flex-col gap-2 w-full">
                        <div className="overflow-x-auto w-full max-w-full overflow-y-auto max-h-60 bg-transparent scrollbar-dark">
                          <code className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-mono break-all whitespace-nowrap block">
                            http://localhost:3000/api/profile
                          </code>
                        </div>
                        <div className="overflow-x-auto w-full max-w-full overflow-y-auto max-h-60 bg-transparent scrollbar-dark">
                          <code className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-mono break-all whitespace-nowrap block">
                            https://mohammeddaniyalraza.vercel.app/api/profile
                          </code>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        type="button"
                        variant="outline" 
                        size="sm"
                        onClick={() => copyToClipboard('https://mohammeddaniyalraza.vercel.app/api/profile')}
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('https://mohammeddaniyalraza.vercel.app/api/profile', '_blank')}
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
                      <p className="text-gray-600 leading-relaxed">
                        This RESTful API endpoint returns comprehensive portfolio data including personal information, 
                        work experience, education, skills, projects, and contact details in JSON format.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Features</h3>
                      <div className="space-y-2">
                        {[
                          "Complete portfolio data",
                          "Real-time updates",
                          "JSON response format",
                          "CORS enabled",
                          "No authentication required",
                          "High availability"
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Response Structure</h3>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 overflow-x-auto w-full max-w-full max-h-96 overflow-y-auto scrollbar-thin relative">
                      <pre className="text-xs text-gray-700 whitespace-pre-wrap break-words w-full">
                        {apiResponse || 'Loading API response...'}
                      </pre>
                      {/* Scroll hint overlay for mobile */}
                      <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent hidden sm:block" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={childVariants}>
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Usage Examples</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">JavaScript / Fetch API</h3>
                    <div className="bg-gray-900 rounded-xl p-6 relative">
                      <CopyCodeButton className="absolute top-3 right-3 z-10"  code={`// Local
fetch('http://localhost:3000/api/profile')
  .then(response => response.json())
  .then(data => {
    console.log('Portfolio data:', data);
    // Use the data in your application
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Production
fetch('https://mohammeddaniyalraza.vercel.app/api/profile')
  .then(response => response.json())
  .then(data => {
    console.log('Portfolio data:', data);
    // Use the data in your application
  })
  .catch(error => {
    console.error('Error:', error);
  });`} />
                      <div className="overflow-x-auto overflow-y-auto max-h-60 bg-transparent scrollbar-dark">
                        <pre className="text-green-400 text-sm whitespace-pre-wrap">
{`// Local
fetch('http://localhost:3000/api/profile')
  .then(response => response.json())
  .then(data => {
    console.log('Portfolio data:', data);
    // Use the data in your application
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Production
fetch('https://mohammeddaniyalraza.vercel.app/api/profile')
  .then(response => response.json())
  .then(data => {
    console.log('Portfolio data:', data);
    // Use the data in your application
  })
  .catch(error => {
    console.error('Error:', error);
  });`}
                        </pre>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">cURL Command</h3>
                    <div className="bg-gray-900 rounded-xl p-6 relative">
                      <CopyCodeButton className="absolute top-3 right-3 z-10" code={`curl -X GET https://mohammeddaniyalraza.vercel.app/api/profile \\\n  -H \"Accept: application/json\"`} />
                      <div className="overflow-x-auto overflow-y-auto max-h-60 bg-transparent scrollbar-dark">
                        <pre className="text-green-400 text-sm whitespace-pre-wrap">
                              {`curl -X GET https://mohammeddaniyalraza.vercel/api/profile \\\n                                 -H \"Accept: application/json\"`}
                      </pre>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Python / Requests</h3>
                    <div className="bg-gray-900 rounded-xl p-6 relative">
                      <CopyCodeButton className="absolute top-3 right-3 z-10" code={`import requests\n\nresponse = requests.get('https://mohammeddaniyalraza.vercel.app/api/profile')\ndata = response.json()\n\nif data['success']:\n    portfolio = data['data']\n    print(f\"Name: {portfolio['name']}\")\n    print(f\"Title: {portfolio['title']}\")\nelse:\n    print(\"Error fetching data\")`} /> 
                      <div className="overflow-x-auto overflow-y-auto max-h-60 bg-transparent scrollbar-dark">
                        <pre className="text-green-400 text-sm whitespace-pre-wrap">
{`import requests\n\nresponse = requests.get('https://mohammeddaniyalraza.vercel.app/api/profile')\ndata = response.json()\n\nif data['success']:\n    portfolio = data['data']\n    print(f\"Name: {portfolio['name']}\")\n    print(f\"Title: {portfolio['title']}\")\nelse:\n    print(\"Error fetching data\")`}
                      </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={childVariants}>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-xl text-white">
                <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {[
                      "Portfolio aggregators",
                      "Developer showcases",
                      "Recruitment platforms",
                      "Personal websites"
                    ].map((useCase, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span className="text-gray-300">{useCase}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      "Mobile applications",
                      "Data analysis tools",
                      "Custom integrations",
                      "Third-party services"
                    ].map((useCase, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span className="text-gray-300">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-gray-300 text-center text-lg">
                    Free to use • No rate limits • Always up-to-date
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const CopyCodeButton = ({ code, className = "" }: { code: string; className?: string }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
      }
    };
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={`absolute top-3 right-3 bg-white/10 border border-white/20 text-white rounded p-1 hover:bg-white/20 transition ${className}`}
        aria-label="Copy code"
      >
        {copied ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
      </button>
    );
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohammed Daniyal Raza",
              "alternateName": ["Daniyal Raza", "Mohammed Daniyal", "Daniyal"],
              "jobTitle": "Frontend Engineer",
              "description": "Frontend Engineer and Founder of UXU Tech startup with 5+ years experience in React, Next.js, and TypeScript",
              "url": "https://daniyalraza.vercel.app",
              "image": "https://daniyalraza.vercel.app/profile-image.jpg",
              "email": "mohammeddaniyalr@gmail.com",
              "telephone": "+92 3347725261",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressCountry": "Pakistan"
              },
              "sameAs": [
                "https://www.linkedin.com/in/mohammed-daniyal-raza-aa26b22ba/",
                "https://github.com/MohammedDaniyalRaza/",
                "https://x.com/daniyalrazaqa",
                "https://mohammeddaniyalraza.medium.com/",
                "https://instagram.com",
                "https://facebook.com"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "UXU Tech",
                "url": "https://uxutech.com",
                "founder": {
                  "@type": "Person",
                  "name": "Mohammed Daniyal Raza"
                }
              },
              "knowsAbout": [
                "Frontend Development",
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Web Development",
                "UI/UX Design",
                "Startup Management",
                "Team Leadership"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "University of Karachi"
              }
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {currentView === 'landing' && <LandingView key="landing" />}
        {currentView === 'simple' && <SimpleView key="simple" />}
        {currentView === 'detailed' && <DetailedView key="detailed" />}
        {currentView === 'developer' && <DeveloperView key="developer" />}
      </AnimatePresence>
      </div>
    </>
  );
}