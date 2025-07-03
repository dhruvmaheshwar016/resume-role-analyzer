
import React, { useState } from 'react';
import { Upload, FileText, Zap, Target, TrendingUp } from 'lucide-react';
import ResumeUpload from '../components/ResumeUpload';
import JobDescriptionInput from '../components/JobDescriptionInput';
import AnalysisResults from '../components/AnalysisResults';

const Index = () => {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!resumeText || !jobDescription) {
      alert('Please upload a resume and enter a job description');
      return;
    }

    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      const results = analyzeMatch(resumeText, jobDescription);
      setAnalysisResults(results);
      setIsAnalyzing(false);
    }, 2000);
  };

  const analyzeMatch = (resume, job) => {
    // Simple matching algorithm
    const resumeWords = resume.toLowerCase().split(/\s+/);
    const jobWords = job.toLowerCase().split(/\s+/);
    
    const commonSkills = ['javascript', 'react', 'node.js', 'python', 'sql', 'css', 'html', 'java', 'c++', 'git', 'aws', 'docker', 'kubernetes'];
    const foundSkills = commonSkills.filter(skill => 
      resume.toLowerCase().includes(skill) && job.toLowerCase().includes(skill)
    );

    const keywordMatches = jobWords.filter(word => 
      resumeWords.includes(word) && word.length > 3
    ).length;

    const skillsScore = Math.min((foundSkills.length / 5) * 100, 100);
    const keywordScore = Math.min((keywordMatches / jobWords.length) * 200, 100);
    const experienceScore = resume.toLowerCase().includes('experience') ? 85 : 60;
    const overallScore = Math.round((skillsScore + keywordScore + experienceScore) / 3);

    return {
      overallScore,
      skillsScore: Math.round(skillsScore),
      keywordScore: Math.round(keywordScore),
      experienceScore,
      matchedSkills: foundSkills,
      recommendations: [
        'Add more relevant keywords from the job description',
        'Highlight specific achievements with metrics',
        'Include industry-specific certifications'
      ]
    };
  };

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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perfect Your Resume for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Every Job</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our AI-powered system analyzes how well your resume matches job descriptions, 
            giving you insights on skills, keywords, and experience alignment.
          </p>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">Advanced algorithms analyze your resume against job requirements</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Match Scoring</h3>
              <p className="text-gray-600">Get detailed scores for skills, keywords, and experience alignment</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Improvement Tips</h3>
              <p className="text-gray-600">Receive actionable recommendations to enhance your resume</p>
            </div>
          </div>
        </div>

        {/* Main Application */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-xl">
          {!analysisResults ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Resume Upload */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Upload className="h-6 w-6 mr-3 text-blue-600" />
                  Upload Your Resume
                </h3>
                <ResumeUpload onResumeExtracted={setResumeText} />
              </div>

              {/* Job Description */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-purple-600" />
                  Job Description
                </h3>
                <JobDescriptionInput 
                  value={jobDescription}
                  onChange={setJobDescription}
                />
              </div>
            </div>
          ) : (
            <AnalysisResults 
              results={analysisResults}
              onReset={() => {
                setAnalysisResults(null);
                setResumeText('');
                setJobDescription('');
              }}
            />
          )}

          {/* Action Button */}
          {!analysisResults && (
            <div className="text-center mt-8">
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing || !resumeText || !jobDescription}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isAnalyzing ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Analyzing...
                  </div>
                ) : (
                  'Analyze Match'
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
