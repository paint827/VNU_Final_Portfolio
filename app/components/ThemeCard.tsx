'use client';

import { LayoutGrid } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type Theme = 'light' | 'dark';

const themes = [
  { id: 'light' as Theme, name: 'Sáng' },
  { id: 'dark' as Theme, name: 'Tối' },
];

export default function ThemeCard() {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setThemeState(savedTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  const currentTheme = themes.find(t => t.id === theme) || themes[1];

  if (!mounted) {
    return (
      <div className="bg-card rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-foreground">Giao diện</h2>
            <p className="text-sm text-muted-foreground">Sáng</p>
          </div>
          <div className="p-2 rounded-md">
            <LayoutGrid className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 relative" ref={dropdownRef}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-foreground">Giao diện</h2>
          <p className="text-sm text-muted-foreground">{currentTheme.name}</p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Đổi giao diện"
        >
          <LayoutGrid className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-6 mt-2 w-40 bg-popover border border-border rounded-md shadow-lg z-50">
          <div className="py-1">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors ${
                  theme === t.id ? 'text-accent font-medium' : 'text-foreground'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
