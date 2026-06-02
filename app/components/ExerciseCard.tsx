import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { Assignment } from '@/app/data/assignments';

interface ExerciseCardProps {
  assignment: Assignment;
}

const typeColors: Record<string, string> = {
  PDF: 'bg-blue-500',
  DOCX: 'bg-green-500',
  XLSX: 'bg-emerald-500',
  PPTX: 'bg-orange-500',
};

export default function ExerciseCard({ assignment }: ExerciseCardProps) {
  const dotColor = typeColors[assignment.documentType] || 'bg-gray-500';

  return (
    <Link
      href={`/bai-tap/${assignment.id}`}
      className="flex flex-col h-full bg-card rounded-2xl p-5 hover:bg-card/80 transition-all group shadow-sm border border-border/50 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex items-start gap-2 mb-2">
        <ExternalLink className="h-5 w-5 mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
        <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-foreground transition-colors">
          {assignment.title}
        </h3>
      </div>
      <p className="text-base text-muted-foreground mb-3 flex-1">
        {assignment.description}
      </p>
      <div className="flex items-center justify-between text-sm mt-auto">
        <div className="flex items-center gap-1.5">
          <span className={`w-3 h-3 rounded-full ${dotColor}`} />
          <span className="text-muted-foreground">{assignment.documentType}</span>
        </div>
        <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
          {assignment.Vietnamese}
        </span>
      </div>
    </Link>
  );
}
