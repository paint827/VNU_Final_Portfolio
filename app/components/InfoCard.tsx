import { MapPin, Calendar, School, Mail, Facebook, Globe } from 'lucide-react';
import Link from 'next/link';

export default function InfoCard() {
  const info = [
    { icon: MapPin, label: 'Nơi sinh:', value: 'Ha Noi, Viet Nam', href: null },
    { icon: Calendar, label: 'Ngày sinh:', value: '08/08/2007', href: null },
    { icon: School, label: 'Lớp:', value: 'K70E-CE2', href: null },
    { icon: Mail, label: 'Email:', value: '25020781@vnu.edu.vn', href: 'mailto:25020781@vnu.edu.vn' },
  ];

  const social = [
    { icon: Facebook, label: 'Facebook:', value: 'Thanh Sơn', href: 'https://www.facebook.com/sownthnh' },
  ];

  return (
    <div className="bg-card rounded-lg p-6">
      <div className="space-y-3">
        {info.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </div>
            {item.href ? (
              <Link href={item.href} className="text-foreground hover:text-accent transition-colors">
                {item.value}
              </Link>
            ) : (
              <span className="text-foreground">{item.value}</span>
            )}
          </div>
        ))}
        
        <div className="border-t border-border my-3" />
        
        {social.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </div>
            <Link 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
            >
              {item.value}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
