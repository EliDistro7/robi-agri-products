'use client';

import React, { useState, useRef, useCallback } from 'react';
import { 
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, 
  Shield, FileText, CheckCircle2, ExternalLink
} from 'lucide-react';

// Simple PDF Renderer Component using iframe
interface PDFRendererProps {
  pdfUrl?: string;
  fileName?: string;
  className?: string;
}

const PDFRenderer: React.FC<PDFRendererProps> = ({ 
  pdfUrl = "/nafaka.pdf", 
  fileName = "NAFAKA Government Permit",
  className = "" 
}) => {
  const [zoomLevel, setZoomLevel] = useState(75);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Auto-hide loading after a reasonable time
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 3000); // Hide loading after 3 seconds

    return () => clearTimeout(timer);
  }, [isLoading]);

  // Try to detect when iframe content is ready
  React.useEffect(() => {
    const checkIframeLoaded = () => {
      if (iframeRef.current) {
        try {
          // Try to access iframe document (may fail due to cross-origin)
          const iframeDoc = iframeRef.current.contentDocument;
          if (iframeDoc && iframeDoc.readyState === 'complete') {
            setIsLoading(false);
            setError(null);
          }
        } catch (e) {
          // Cross-origin restriction, assume loaded after short delay
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
        }
      }
    };

    const timer = setTimeout(checkIframeLoaded, 1000);
    return () => clearTimeout(timer);
  }, [pdfUrl]);

  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 25);
      updateIframeSrc();
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 25);
      updateIframeSrc();
    }
  };

  const updateIframeSrc = () => {
    if (iframeRef.current) {
      const newSrc = `${pdfUrl}#zoom=${zoomLevel}&toolbar=0&navpanes=0&scrollbar=1`;
      iframeRef.current.src = newSrc;
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
  };

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  const handleIframeLoad = () => {
    // Small delay to ensure PDF is actually rendered
    setTimeout(() => {
      setIsLoading(false);
      setError(null);
    }, 500);
  };

  const handleIframeError = () => {
    setError('Failed to load PDF document');
    setIsLoading(false);
  };

  return (
    <div className={`bg-white border border-earth-200 rounded-xl shadow-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-600 to-forest-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-heading text-white font-bold text-sm">{fileName}</h3>
              <p className="text-forest-100 text-xs">Government Authorization</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 50 || isLoading}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors disabled:opacity-50"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-white text-xs px-2">{zoomLevel}%</span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 200 || isLoading}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors disabled:opacity-50"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            
            <div className="w-px h-6 bg-white/20 mx-2"></div>
            
            <button
              onClick={handleOpenInNewTab}
              disabled={isLoading}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors disabled:opacity-50"
              title="Open in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              disabled={isLoading}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors disabled:opacity-50"
              title="Download PDF"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="relative bg-earth-50 h-96">
        {isLoading && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-earth-50/90 z-10">
            <div className="flex flex-col items-center space-y-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest-600"></div>
              <p className="text-earth-600 font-body text-sm">Loading PDF...</p>
            </div>
          </div>
        )}

        {error ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-4">
              <FileText className="w-12 h-12 text-earth-400 mx-auto mb-2" />
              <p className="text-earth-600 font-body text-sm mb-1">PDF Preview Unavailable</p>
              <p className="text-earth-500 font-body text-xs mb-3">
                The PDF file could not be displayed in the browser
              </p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={handleDownload}
                  className="px-3 py-1 bg-forest-600 text-white text-xs rounded hover:bg-forest-700 transition-colors"
                >
                  Download PDF
                </button>
                <button
                  onClick={handleOpenInNewTab}
                  className="px-3 py-1 border border-forest-600 text-forest-600 text-xs rounded hover:bg-forest-50 transition-colors"
                >
                  Open in New Tab
                </button>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            ref={iframeRef}
            src={`${pdfUrl}#zoom=${zoomLevel}&toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
            className="w-full h-full border-0"
            title={fileName}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ 
              backgroundColor: '#f8f9fa',
              minHeight: '384px'
            }}
          />
        )}
      </div>

      {/* Status Bar */}
      <div className="bg-earth-50 border-t border-earth-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-earth-700">
              {error ? "Load Failed" : isLoading ? "Loading..." : "PDF Loaded"}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            {!error && !isLoading && (
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3 text-forest-600" />
                <span className="text-[10px] text-forest-600 font-medium">Verified</span>
              </div>
            )}
            <span className="text-[10px] text-earth-500">Government Document</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Alternative Simple PDF Viewer Component
export const SimplePDFViewer: React.FC<{ pdfUrl: string; title?: string }> = ({ 
  pdfUrl, 
  title = "PDF Viewer" 
}) => (
  <div className="w-full border border-gray-300 rounded-lg overflow-hidden">
    <div className="bg-gray-100 p-2 border-b flex justify-between items-center">
      <span className="text-sm font-medium text-gray-700">{title}</span>
      <div className="flex gap-2">
        <button
          onClick={() => window.open(pdfUrl, '_blank')}
          className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
        >
          Open in New Tab
        </button>
        <a
          href={pdfUrl}
          download
          className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
        >
          Download
        </a>
      </div>
    </div>
    <iframe
      src={pdfUrl}
      width="100%"
      height="600px"
      title={title}
      className="border-0"
      style={{ backgroundColor: '#f8f9fa' }}
    />
  </div>
);

export default PDFRenderer;