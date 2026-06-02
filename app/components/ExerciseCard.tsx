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
      className="flex flex-col h-full bg-card rounded-lg p-4 hover:bg-card/80 transition-all group shadow-md hover:shadow-xl"
    >
      <div className="flex items-start gap-2 mb-2">
        <ExternalLink className="h-4 w-4 mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
        <h3 className="font-semibold text-foreground group-hover:text-foreground transition-colors">
          {assignment.title}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground mb-3 flex-1">
        {assignment.description}
      </p>
      <div className="flex items-center justify-between text-xs mt-auto">
        <div className="flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
          <span className="text-muted-foreground">{assignment.documentType}</span>
        </div>
        <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
          {assignment.Vietnamese}
        </span>
      </div>
    </Link>
  );
}
