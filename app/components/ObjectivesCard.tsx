export default function ObjectivesCard() {
  const objectives = [
    {
      period: 'Năm 1 - 2',
      title: 'Xây dựng nền tảng',
      description: 'Học các môn cơ sở ngành, rèn luyện kỹ năng lập trình cơ bản',
    },
    {
      period: 'Năm 3 - 4',
      title: 'Chuyên sâu và thực hành',
      description: 'Nghiên cứu chuyên sâu, thực tập tại doanh nghiệp',
    },
  ];

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
      <h2 className="text-lg font-bold tracking-tight text-foreground mb-4">Mục tiêu học tập</h2>
      <div className="relative">
        <div className="timeline-line" />
        <div className="space-y-4"></div>
        <div className="space-y-4">
          {objectives.map((obj, index) => (
            <div key={index} className="timeline-item">
              <p className="text-sm text-primary font-medium">{obj.period}</p>
              <p className="text-base font-semibold text-foreground">{obj.title}</p>
              <p className="text-sm text-muted-foreground">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
