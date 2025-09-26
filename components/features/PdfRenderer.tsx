'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Leaf, Phone, Mail, MapPin, MessageCircle, Instagram, 
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, 
  RotateCw, Maximize2, Minimize2, ExternalLink, Award,
  FileText, Shield, CheckCircle2
} from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

// Import CSS - Comment out if causing issues, PDF will still work
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker - Use CDN for reliability with Next.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// PDF Renderer Component
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(75);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [workerReady, setWorkerReady] = useState(false);
  // Check if worker is ready
  React.useEffect(() => {
    const checkWorker = async () => {
      try {
        // Test if pdfjs worker is available
        const testDoc = await pdfjs.getDocument('data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL091dGxpbmVzIDIgMCBSCi9QYWdlcyAzIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKL1R5cGUgL091dGxpbmVzCi9Db3VudCAwCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZXMKL0NvdW50IDEKL0tpZHMgWzQgMCBSXQo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA1IDAgUgo+Pgo+PgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNiAwIFIKPj4KZW5kb2JqCgo1IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMQovQmFzZUZvbnQgL1RpbWVzLVJvbWFuCj4+CmVuZG9iagoKNiAwIG9iago8PAovTGVuZ3RoIDQ0Cj4+CnN0cmVhbQpCVA0KL0YxIDEyIFRmDQo3MiA3MjAgVGQNCihIZWxsbyBXb3JsZCkgVGoNCkVUDQplbmRzdHJlYW0KZW5kb2JqCgp4cmVmCjAgNwowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA3NCAwMDAwMCBuIAowMDAwMDAwMTIwIDAwMDAwIG4gCjAwMDAwMDAxNzcgMDAwMDAgbiAKMDAwMDAwMDM2NCAwMDAwMCBuIAowMDAwMDAwNDUxIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNwovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNTQ0CiUlRU9G').promise;
        await testDoc.getPage(1);
        setWorkerReady(true);
      } catch (error) {
        console.warn('PDF.js worker not ready, falling back to iframe');
        setWorkerReady(false);
      }
    };
    
    checkWorker();
  }, []);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleZoomIn = () => {
    if (zoomLevel < 200) setZoomLevel(zoomLevel + 25);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) setZoomLevel(zoomLevel - 25);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
  };

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setTotalPages(numPages);
    setIsLoading(false);
    setError(null);
    setPdfError(null);
  }, []);

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error('PDF load error:', error);
    setError('Failed to load PDF document');
    setPdfError(error.message);
    setIsLoading(false);
  }, []);

  const onPageLoadSuccess = useCallback(() => {
    // Page loaded successfully
  }, []);

  const onPageLoadError = useCallback((error: Error) => {
    console.error('Page load error:', error);
  }, []);

  // Ref for the container div
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate the scale based on zoom level and container width
  const getPageScale = () => {
    if (!containerRef.current) return zoomLevel / 100;
    const containerWidth = containerRef.current.offsetWidth - 24; // Account for padding
    // Base this on a standard PDF page width of ~612 points
    const baseScale = containerWidth / 612;
    return (baseScale * zoomLevel) / 100;
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
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-white text-xs px-2">{zoomLevel}%</span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 200 || isLoading}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors disabled:opacity-50"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              disabled={isLoading}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors ml-2 disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div 
        ref={containerRef}
        className="relative bg-earth-50 h-96 overflow-auto"
      >
        {isLoading && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-earth-50/90 z-10">
            <div className="flex flex-col items-center space-y-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest-600"></div>
              <p className="text-earth-600 font-body text-sm">Loading PDF...</p>
            </div>
          </div>
        )}

        {error || pdfError ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-4">
              <FileText className="w-12 h-12 text-earth-400 mx-auto mb-2" />
              <p className="text-earth-600 font-body text-sm mb-1">PDF Preview Unavailable</p>
              {pdfError && (
                <p className="text-earth-500 font-body text-xs mb-3">
                  {pdfError.includes('fetch') ? 'File not found or inaccessible' : 'Invalid PDF format'}
                </p>
              )}
              <button
                onClick={handleDownload}
                className="mt-2 text-forest-600 hover:text-forest-700 font-body text-xs underline"
              >
                Download to View
              </button>
            </div>
          </div>
        ) : !workerReady ? (
          // Fallback to iframe if worker is not available
          <div className="flex items-center justify-center h-full p-3">
            <iframe
              src={`${pdfUrl}#page=${currentPage}&zoom=${zoomLevel}&toolbar=0`}
              className="w-full h-full border-0 rounded"
              title={fileName}
              onLoad={() => setIsLoading(false)}
              onError={() => setError('Failed to load PDF in fallback mode')}
            />
          </div>
        ) : (
          <div className="flex justify-center p-3">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-forest-600"></div>
                </div>
              }
              error={
                <div className="text-center py-8">
                  <FileText className="w-8 h-8 text-earth-400 mx-auto mb-2" />
                  <p className="text-earth-600 text-sm">Unable to load PDF</p>
                </div>
              }
              className="max-w-full"
            >
              <Page
                pageNumber={currentPage}
                scale={getPageScale()}
                onLoadSuccess={onPageLoadSuccess}
                onLoadError={onPageLoadError}
                loading={
                  <div className="flex items-center justify-center py-4">
                    <div className="animate-pulse bg-earth-200 w-full h-96 rounded"></div>
                  </div>
                }
                error={
                  <div className="text-center py-4">
                    <p className="text-earth-600 text-sm">Failed to load page {currentPage}</p>
                  </div>
                }
                className="shadow-lg"
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </Document>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-earth-50 border-t border-earth-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1 || isLoading || !!error}
              className="p-1 text-earth-600 hover:text-earth-800 disabled:text-earth-400 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-earth-700 min-w-[3rem] text-center">
              {error ? "Error" : isLoading ? "..." : `${currentPage} / ${totalPages}`}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages || isLoading || !!error}
              className="p-1 text-earth-600 hover:text-earth-800 disabled:text-earth-400 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            {!error && !isLoading && totalPages > 0 && (
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3 text-forest-600" />
                <span className="text-[10px] text-forest-600 font-medium">Verified</span>
              </div>
            )}
            <span className="text-[10px] text-earth-500">
              {error ? "Load Failed" : isLoading ? "Loading..." : "Government Document"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFRenderer;