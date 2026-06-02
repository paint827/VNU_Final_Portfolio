'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImagePreviewProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImagePreview({ src, alt, isOpen, onClose }: ImagePreviewProps) {
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setZoom(1);
      setPanOffset({ x: 0, y: 0 });
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => {
      const newZoom = Math.max(prev - 0.2, 1);
      if (newZoom === 1) {
        setPanOffset({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="mb-0 fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-card rounded-lg p-4 max-w-2xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 p-2 rounded-md hover:bg-muted transition-colors z-10"
          aria-label="Close preview"
        >
          <X className="h-6 w-6 text-foreground" />
        </button>

        <div className="flex gap-2 mb-4">
          <button
            onClick={handleZoomOut}
            disabled={zoom <= 1}
            className="cursor-pointer p-2 rounded-md hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-5 w-5 text-foreground" />
          </button>
          <span className="px-3 py-2 rounded-md bg-muted text-foreground text-sm font-medium">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            disabled={zoom >= 3}
            className="cursor-pointer p-2 rounded-md hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <div 
          ref={scrollContainerRef}
          className="max-h-[60vh] w-full flex items-center justify-center rounded-lg bg-muted/50 overflow-hidden select-none"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        >
          <div 
            style={{ 
              transform: `scale(${zoom}) translate(${panOffset.x / zoom}px, ${panOffset.y / zoom}px)`,
              transformOrigin: 'center',
              transition: isDragging ? 'none' : 'transform 0.2s'
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={400}
              height={400}
              className="rounded-lg pointer-events-none"
              draggable={false}
              priority
            />
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          {zoom > 1 ? 'Kéo chuột để di chuyển, cuộn chuột để thu phóng.' : 'Sử dụng con lăn chuột để phóng to/thu nhỏ.'}
        </p>
      </div>
    </div>
  );
}
