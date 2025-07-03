
import React from 'react';
import { Briefcase } from 'lucide-react';

interface JobDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
}

const JobDescriptionInput: React.FC<JobDescriptionInputProps> = ({ value, onChange }) => {
  const sampleJobDescription = `Senior Frontend Developer

We are looking for a skilled Frontend Developer to join our team. 

Requirements:
- 3+ years of experience in React.js development
- Strong knowledge of JavaScript, HTML, CSS
- Experience with Node.js and RESTful APIs
- Familiarity with Git version control
- Knowledge of responsive design principles
- Experience with modern build tools and workflows

Responsibilities:
- Develop and maintain web applications using React.js
- Collaborate with design and backend teams
- Write clean, maintainable code
- Participate in code reviews
- Stay up-to-date with latest web technologies

Nice to have:
- Experience with TypeScript
- Knowledge of AWS or cloud platforms
- Familiarity with Docker and containerization`;

  const handleUseSample = () => {
    onChange(sampleJobDescription);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">
          Paste the job description below
        </label>
        <button
          onClick={handleUseSample}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Use Sample Job
        </button>
      </div>
      
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste the job description here... Include requirements, responsibilities, and desired skills for better matching accuracy."
          className="w-full h-80 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm leading-relaxed"
        />
        
        {!value && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center text-gray-400">
              <Briefcase className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">Job description will appear here</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="text-xs text-gray-500">
        Include all relevant details like required skills, experience level, and job responsibilities for better analysis.
      </div>
    </div>
  );
};

export default JobDescriptionInput;
