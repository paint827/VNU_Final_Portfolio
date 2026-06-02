import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ExternalLink, Download, Target } from 'lucide-react';
import { assignments } from '@/app/data/assignments';
import Footer from '@/app/components/Footer';

interface AssignmentDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return assignments.map((assignment) => ({
    id: assignment.id,
  }));
}

export default async function AssignmentDetailPage({ params }: AssignmentDetailPageProps) {
  const { id } = await params;
  const assignment = assignments.find((a) => a.id === id);

  if (!assignment) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background py-8 pb-0 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 text-sm"
        >
          <ChevronLeft size={16} />
          Quay lại
        </Link>

        <div className="bg-card rounded-lg p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full mb-3">
                {assignment.title}
              </span>
              <h1 className="text-2xl font-bold text-foreground mb-0.5">
                {assignment.Vietnamese}
              </h1>
              <p className="text-muted-foreground text-sm mb-2 italic opacity-75">Tài liệu gốc được cung cấp dưới dạng {assignment.documentType}</p>
              <p className="text-muted-foreground">{assignment.description}</p>
            </div>
          </div>
        </div>

        {assignment.objectives && assignment.objectives.length > 0 && (
          <div className="bg-card rounded-lg p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Mục tiêu bài tập</h2>
            </div>
            <ul className="space-y-2">
              {assignment.objectives.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-sm font-bold">•</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-card rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Tài liệu</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={assignment.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Mở Link gốc<span className="text-sm font-normal">({assignment.documentType})</span>
            </a>
            <a
              href={assignment.pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-md text-sm hover:bg-muted transition-colors"
            >
              <Download className="h-4 w-4" />
              Tải xuống <span className="text-muted-foreground text-sm font-normal">(dạng PDF)</span>
            </a>
          </div>
        </div>

        <div className="bg-card rounded-lg overflow-hidden">
          <div className="p-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Xem trước tài liệu <span className="text-muted-foreground text-sm font-normal">(dạng PDF)</span></h2>
          </div>
          <div className="aspect-[4/3] bg-muted flex items-center justify-center">
            <iframe
              src={assignment.pdfFile}
              className="w-full h-full"
              title={assignment.Vietnamese}
            />
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Nếu không xem được tài liệu, vui lòng sử dụng nút &quot;Mở link gốc&quot; hoặc &quot;Tải xuống&quot; ở trên.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
