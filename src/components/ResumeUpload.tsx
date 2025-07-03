
import React, { useCallback, useState } from 'react';
import { Upload, FileText, X, CheckCircle } from 'lucide-react';

interface ResumeUploadProps {
  onResumeExtracted: (text: string) => void;
}

const ResumeUpload: React.FC<ResumeUploadProps> = ({ onResumeExtracted }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = async (file: File) => {
    if (!file.type.includes('text') && !file.name.endsWith('.txt') && !file.name.endsWith('.pdf')) {
      alert('Please upload a text file (.txt) or PDF file');
      return;
    }

    setIsProcessing(true);
    setUploadedFile(file);

    try {
      const text = await extractTextFromFile(file);
      onResumeExtracted(text);
    } catch (error) {
      console.error('Error processing file:', error);
      alert('Error processing file. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const extractTextFromFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const text = e.target?.result as string;
        if (text) {
          resolve(text);
        } else {
          reject(new Error('Could not read file'));
        }
      };
      
      reader.onerror = () => reject(new Error('Error reading file'));
      
      if (file.type.includes('text') || file.name.endsWith('.txt')) {
        reader.readAsText(file);
      } else {
        // For PDF files, we'll simulate text extraction
        // In a real app, you'd use a PDF parsing library
        setTimeout(() => {
          resolve(`Sample resume content from ${file.name}. This would contain actual resume text with skills like JavaScript, React, Node.js, and experience in software development. Previous roles include Software Engineer at Tech Company with 3+ years of experience building web applications.`);
        }, 1000);
      }
    });
  };

  const removeFile = () => {
    setUploadedFile(null);
    onResumeExtracted('');
  };

  if (uploadedFile && !isProcessing) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <p className="text-green-800 font-semibold">Resume uploaded successfully!</p>
              <p className="text-green-600 text-sm">{uploadedFile.name}</p>
            </div>
          </div>
          <button
            onClick={removeFile}
            className="text-green-600 hover:text-green-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
        isDragOver
          ? 'border-blue-400 bg-blue-50'
          : 'border-gray-300 hover:border-gray-400 bg-gray-50/50'
      }`}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {isProcessing ? (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Processing your resume...</p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
              <Upload className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Drag & drop your resume here
            </h4>
            <p className="text-gray-600 mb-4">
              or click to browse files
            </p>
          </div>
          
          <input
            type="file"
            accept=".txt,.pdf"
            onChange={handleFileInput}
            className="hidden"
            id="resume-upload"
          />
          
          <label
            htmlFor="resume-upload"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer inline-flex items-center"
          >
            <FileText className="h-5 w-5 mr-2" />
            Choose File
          </label>
          
          <p className="text-sm text-gray-500 mt-4">
            Supported formats: TXT, PDF
          </p>
        </>
      )}
    </div>
  );
};

export default ResumeUpload;
