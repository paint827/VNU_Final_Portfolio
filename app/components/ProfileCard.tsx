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
      link.download = 'tran_thanh_son_portfolio.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
    } catch (error) {
      alert('Không thể tải xuống portfolio. Vui lòng thử lại.');
      setIsDownloading(false);
    }
  };

  return (
    <>
      <ImagePreview 
        src="/son.jpg" 
        alt="Trần Thanh Sơn" 
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
      <div className="bg-card rounded-2xl p-6 pb-4 text-center shadow-sm border border-border/50 hover:shadow-md transition-shadow">
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-offset-2 ring-foreground/10 dark:ring-accent/80 hover:ring-accent transition-all dark:ring-offset-[#1D232A] cursor-pointer shadow-lg hover:scale-105"
            aria-label="View profile picture"
          >
            <Image
              src="/son.jpg"
              alt="Trần Thanh Sơn"
              fill
              className="object-cover"
              priority
            />
          </button>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Trần Thanh Sơn</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Sinh viên K70E-CE2 | Kỹ thuật Máy tính
          <br />
          <a href="https://uet.vnu.edu.vn/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Đại học Công nghệ - ĐHQGHN
          </a>
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
