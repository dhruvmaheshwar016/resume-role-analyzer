import React from 'react';
import { ArrowRight, CheckCircle, Users, Zap, Target, TrendingUp, FileText, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import UserMenu from '@/components/UserMenu';

const Landing = () => {
  const { user, loading } = useAuth();

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your resume against job requirements in seconds"
    },
    {
      icon: Target,
      title: "Precise Matching",
      description: "Get detailed scores for skills, keywords, and experience alignment"
    },
    {
      icon: TrendingUp,
      title: "Actionable Insights",
      description: "Receive specific recommendations to improve your resume's effectiveness"
    },
    {
      icon: Award,
      title: "Professional Results",
      description: "Stand out from the competition with data-driven resume optimization"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Upload Resume",
      description: "Simply drag and drop your resume file or paste the text"
    },
    {
      number: "02",
      title: "Add Job Description",
      description: "Paste the job description you're targeting"
    },
    {
      number: "03",
      title: "Get Analysis",
      description: "Receive detailed matching scores and improvement suggestions"
    }
  ];

  const benefits = [
    "Increase your interview callback rate",
    "Save hours of manual resume customization",
    "Identify missing keywords and skills",
    "Optimize for Applicant Tracking Systems (ATS)",
    "Get data-driven improvement recommendations",
    "Match multiple jobs quickly and efficiently"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Resume Matcher
              </h1>
            </div>
            {!loading && (
              <div className="flex items-center space-x-4">
                {user ? (
                  <UserMenu />
                ) : (
                  <div className="flex items-center space-x-3">
                    <Link 
                      to="/auth"
                      className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link 
                      to="/auth"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Perfect Your Resume for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Every Job Application
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop guessing what recruiters want. Our AI-powered system analyzes how well your resume matches job descriptions, 
            giving you the insights you need to land more interviews.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to={user ? "/matcher" : "/auth"}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              {user ? "Start Matching Now" : "Get Started Free"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="text-gray-600 hover:text-gray-800 font-medium flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              See Sample Analysis
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-gray-600">Accuracy Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">2.5x</div>
            <p className="text-gray-600">More Interviews</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">30s</div>
            <p className="text-gray-600">Analysis Time</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/70 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Resume Matcher?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI technology gives you the competitive edge you need in today's job market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <p className="text-xl text-gray-600">
              Get professional resume analysis in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Job Search Results
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of job seekers who have improved their interview success rate with our AI-powered resume matching
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <Users className="h-16 w-16 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <p className="text-blue-100 mb-6">Resumes Analyzed</p>
                <Link 
                  to={user ? "/matcher" : "/auth"}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
                >
                  {user ? "Start Your Analysis" : "Get Started Free"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-gray-200/50 shadow-xl">
            <Lightbulb className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Land Your Dream Job?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Stop sending generic resumes. Start using data-driven insights to craft the perfect application for every job.
            </p>
            <Link 
              to={user ? "/matcher" : "/auth"}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              {user ? "Start Matching" : "Get Started for Free"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-bold">Resume Matcher</h4>
            </div>
            <p className="text-gray-400">
              AI-powered resume optimization for better job matches
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
