import { FileText } from 'lucide-react';
import { assignments } from '@/app/data/assignments';
import ExerciseCard from './ExerciseCard';

export default function ExercisesSection() {
  return (
    <div className="bg-section-background rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-muted rounded-lg">
          <FileText className="h-5 w-5 text-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">Bài tập</h2>
          <p className="text-base text-muted-foreground">
            Đang hiển thị {assignments.length} bài tập
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assignments.map((assignment) => (
          <ExerciseCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
}
