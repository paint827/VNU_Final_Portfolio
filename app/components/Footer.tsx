import { Heart, Link } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card mt-8 py-6">
      <div className="flex justify-center items-center gap-1 text-sm text-muted-foreground">
        <span>Made with</span>
        <Heart className="h-4 w-4 fill-red-500 text-red-500" />
        <span>by</span>
        <span className="text-accent">
          <a href="https://www.facebook.com/sownthnh" target="_blank" rel="noopener noreferrer">
            Trần Thanh Sơn
          </a>
        </span>
      </div>
    </footer>
  );
}
