import { Target, CheckCircle } from 'lucide-react';

export default function PortfolioGoalsSection() {
  const goals = [
    'Vận dụng kiến thức từ học phần "Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo" vào một dự án thực tế',
    'Thiết kế và phát triển một Digital Portfolio chuyên nghiệp trên nền tảng web',
    'Xây dựng một nền tảng giới thiệu bản thân phục vụ học tập và định hướng nghề nghiệp lâu dài',
    'Tích hợp các sản phẩm và bài tập đã thực hiện thành một hệ thống thống nhất, trực quan và dễ sử dụng',
  ];

  return (
    <div className="bg-section-background rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-muted rounded-lg">
          <Target className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Mục tiêu của Portfolio này</h2>
          <p className="text-sm text-muted-foreground">Dự án cá nhân - Bài tập</p>
        </div>
      </div>
      
      <div className="space-y-3">
        {goals.map((goal, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">{goal}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-2 p-4 bg-muted/50 rounded-lg border border-border">
        <p className="text-xs text-muted-foreground italic">
          Portfolio này không chỉ là một bài tập học phần mà còn là một công cụ hữu ích để tôi giới thiệu bản thân, năng lực và những thành quả học tập của mình trong tương lai. Dự án được xây dựng bằng cách tổng hợp và tích hợp các bài tập, sản phẩm từ nhiều chương học khác nhau vào một hệ thống thống nhất, qua đó thể hiện quá trình học tập, phát triển kỹ năng và khả năng vận dụng kiến thức vào thực tế.
        </p>
      </div>
    </div>
  );
}
