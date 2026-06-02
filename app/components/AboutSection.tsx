import { User } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="bg-section-background rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-muted rounded-lg">
          <User className="h-5 w-5 text-muted-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">Giới thiệu</h2>
          <p className="text-base text-muted-foreground">Thông tin cá nhân</p>
        </div>
      </div>
      
      <div className="prose prose-base max-w-none text-foreground">
        <p className="text-base leading-relaxed text-muted-foreground mb-4">
          Xin chào! Tôi là <span className="text-foreground font-medium">Trần Thanh Sơn</span>, sinh viên năm nhất ngành Kỹ thuật Máy tính tại <span className="text-foreground font-medium">Trường Đại học Công nghệ - ĐHQGHN (UET)</span>, lớp <span className="text-foreground font-medium">K70E-CE2</span>.
        </p>
        
        <p className="text-base leading-relaxed text-muted-foreground mb-4">
          Tôi đam mê công nghệ thông tin, đặc biệt là phát triển phần mềm và trí tuệ nhân tạo. Hiện tại, tôi đang xây dựng nền tảng kiến thức về khoa học máy tính và lập trình, đồng thời học và thực hành với Python cũng như ngôn ngữ C ở mức cơ bản. Thông qua các dự án cá nhân và quá trình tự học, tôi luôn tìm kiếm cơ hội để nâng cao kỹ năng giải quyết vấn đề, tư duy lập trình và khả năng phát triển phần mềm.
        </p>

        <p className="text-base leading-relaxed text-muted-foreground mb-4">
          Tôi tin rằng việc học hỏi liên tục và không ngừng thử thách bản thân là chìa khóa để phát triển trong lĩnh vực công nghệ. Mục tiêu của tôi là trở thành một kỹ sư máy tính chuyên nghiệp, có khả năng tạo ra những sản phẩm hữu ích và mang lại giá trị cho cộng đồng.
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
            Ham học hỏi
          </span>
          <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
            Chủ động
          </span>
          <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
            Tư duy logic
          </span>
          <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
            Trách nhiệm
          </span>
        </div>
      </div>
    </div>
  );
}
