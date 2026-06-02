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
    <div className="bg-card rounded-lg p-6">
      <h2 className="text-base font-semibold text-foreground mb-4">Mục tiêu học tập</h2>
      <div className="relative">
        <div className="timeline-line" />
        <div className="space-y-4"></div>
        <div className="space-y-4">
          {objectives.map((obj, index) => (
            <div key={index} className="timeline-item">
              <p className="text-xs text-primary font-medium">{obj.period}</p>
              <p className="text-sm font-semibold text-foreground">{obj.title}</p>
              <p className="text-xs text-muted-foreground">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
