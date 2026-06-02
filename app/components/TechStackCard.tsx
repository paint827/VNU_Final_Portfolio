export default function TechStackCard() {
  const skills = [
    'Python',
    'C',
    'Linux',
  ];

  return (
    <div className="bg-card rounded-lg p-6">
      <h2 className="text-base font-semibold text-foreground mb-4">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
