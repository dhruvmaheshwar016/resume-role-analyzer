
import React from 'react';
import { TrendingUp, Award, Target, Lightbulb, RotateCcw, CheckCircle } from 'lucide-react';

interface AnalysisResultsProps {
  results: {
    overallScore: number;
    skillsScore: number;
    keywordScore: number;
    experienceScore: number;
    matchedSkills: string[];
    recommendations: string[];
  };
  onReset: () => void;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results, onReset }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Analysis Results</h2>
        <button
          onClick={onReset}
          className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Analyze Another
        </button>
      </div>

      {/* Overall Score */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Overall Match Score</h3>
            <p className="text-blue-100">
              {results.overallScore >= 80 ? 'Excellent match! Your resume aligns well with this job.' :
               results.overallScore >= 60 ? 'Good match with room for improvement.' :
               'Consider updating your resume to better match this role.'}
            </p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-bold mb-2">{results.overallScore}%</div>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-1" />
              <span className="text-sm">Match Score</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Scores */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${getScoreBg(results.skillsScore)}`}>
                <Award className={`h-5 w-5 ${getScoreColor(results.skillsScore)}`} />
              </div>
              <span className="ml-3 font-semibold text-gray-900">Skills Match</span>
            </div>
            <span className={`text-2xl font-bold ${getScoreColor(results.skillsScore)}`}>
              {results.skillsScore}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(results.skillsScore)}`}
              style={{ width: `${results.skillsScore}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${getScoreBg(results.keywordScore)}`}>
                <Target className={`h-5 w-5 ${getScoreColor(results.keywordScore)}`} />
              </div>
              <span className="ml-3 font-semibold text-gray-900">Keywords</span>
            </div>
            <span className={`text-2xl font-bold ${getScoreColor(results.keywordScore)}`}>
              {results.keywordScore}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(results.keywordScore)}`}
              style={{ width: `${results.keywordScore}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${getScoreBg(results.experienceScore)}`}>
                <TrendingUp className={`h-5 w-5 ${getScoreColor(results.experienceScore)}`} />
              </div>
              <span className="ml-3 font-semibold text-gray-900">Experience</span>
            </div>
            <span className={`text-2xl font-bold ${getScoreColor(results.experienceScore)}`}>
              {results.experienceScore}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(results.experienceScore)}`}
              style={{ width: `${results.experienceScore}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Matched Skills */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
          Matched Skills
        </h3>
        {results.matchedSkills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {results.matchedSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No specific skills were matched. Consider adding more technical skills to your resume.</p>
        )}
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
          Recommendations for Improvement
        </h3>
        <ul className="space-y-3">
          {results.recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-0.5">
                <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
              </div>
              <span className="text-gray-700">{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnalysisResults;
