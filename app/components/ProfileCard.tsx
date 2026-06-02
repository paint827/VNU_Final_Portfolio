'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';
import ImagePreview from './ImagePreview';

export default function ProfileCard() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPortfolio = async () => {
    if (isDownloading) return;
    
    try {
      setIsDownloading(true);
      
      const { domToPng } = await import('modern-screenshot');
      
      const element = document.documentElement;
      const isDark = document.documentElement.classList.contains('dark');
      const bgColor = isDark ? '#1a1f2e' : '#e8e8e8';
      
      const dataUrl = await domToPng(element, {
        scale: 2,
        backgroundColor: bgColor,
        style: {
          'transformOrigin': 'top left',
        },
      });
      
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'gay.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
    } catch (error) {
      alert('Failed to download portfolio. Please try again.');
      setIsDownloading(false);
    }
  };

  return (
    <>
      <ImagePreview 
        src="/gay.jpg" 
        alt="Trần Thanh Sơn" 
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
      <div className="bg-card rounded-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-offset-2 ring-foreground/20 dark:ring-accent hover:opacity-80 transition-opacity dark:ring-offset-[#1D232A] cursor-pointer"
            aria-label="View profile picture"
          >
            <Image
              src="/gay.jpg"
              alt="Trần Thanh Sơn"
              fill
              className="object-cover"
              priority
            />
          </button>
        </div>
        <h1 className="text-xl font-bold text-foreground mb-2">Trần Thanh Sơn</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Sinh viên K70E-CE2 | Kỹ thuật Máy tính
          <br />
          Đại học Công nghệ - ĐHQGHN
        </p>
        <div className="mt-4">
          <button
            onClick={downloadPortfolio}
            disabled={isDownloading}
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="h-4 w-4" />
            {isDownloading ? 'Đang tải...' : 'Tải xuống Portfolio'}
          </button>
        </div>
      </div>
    </>
  );
}
