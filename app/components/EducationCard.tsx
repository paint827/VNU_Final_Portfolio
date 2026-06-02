export default function EducationCard() {
  const education = [
    {
      period: '2024 - 2028',
      degree: 'Kỹ sư Kỹ thuật Máy tính',
      institution: 'Đại học Công nghệ - ĐHQGHN',
    },
    {
      period: '2022 - 2025',
      degree: 'Học sinh',
      institution: 'Trường THPT Quang Trung - Đống Đa',
    },
  ];

  return (
    <div className="bg-card rounded-lg p-6">
      <h2 className="text-base font-semibold text-foreground mb-4">Học vấn</h2>
      <div className="relative">
        <div className="timeline-line" />
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <p className="text-xs text-muted-foreground">{edu.period}</p>
              <p className="text-sm font-semibold text-foreground">{edu.degree}</p>
              <p className="text-xs text-muted-foreground">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
