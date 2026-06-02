export interface Assignment {
  id: string;
  title: string;
  Vietnamese: string;
  description: string;
  pdfFile: string;
  externalLink: string;
  documentType: string;
  objectives?: string[];
}

export const assignments: Assignment[] = [
  {
    id: "1",
    title: "Bài tập 1",
    Vietnamese: "Bài 1 - Mục 1.4",
    description: "Thao tác cơ bản với tệp tin và thư mục",
    pdfFile: "tmpqfykv9_bai1.pdf",
    externalLink: "https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/25020781/20260324/tmpqfykv9_bai1.pdf",
    documentType: "PDF",
    objectives: [
      "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows (có thể điều chỉnh cho macOS/Linux)."
    ]
  },
  {
    id: "2",
    title: "Bài tập 2",
    Vietnamese: "Bài 2 - Mục 2.4",
    description: "Tìm kiếm và đánh giá thông tin học thuật",
    pdfFile: "tmpunozz3_baitaptuan2.pdf",
    externalLink: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fcdnlms.vnu.edu.vn%2Fdhqg.file.api%2Fuploads%2Flms%2Fdocument%2F25020781%2F20260404%2Ftmpunozz3_baitaptuan2.docx&wdOrigin=BROWSELINK",
    documentType: "DOCX",
    objectives: [
      "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy."
    ]
  },
  {
    id: "3",
    title: "Bài tập 3",
    Vietnamese: "Bài 2 - Mục 3.4",
    description: "Viết Prompt hiệu quả cho các tác vụ học tập",
    pdfFile: "tmpyg7pqj_bai3.pdf",
    externalLink: "https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/25020781/20260409/tmpyg7pqj_bai3.pdf",
    documentType: "PDF",
    objectives: [
      "Tạo các Prompt có hiệu quả",
      "So sánh Prompt ban đầu và Prompt cải tiến",
      "Sử dụng AI một cách hiệu quả trong học tập",
      "Phát triển kỹ năng viết prompt hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập."
    ]
  },
  {
    id: "4",
    title: "Bài tập 4",
    Vietnamese: "Bài 3 - Mục 4.4",
    description: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    pdfFile: "tmpz0gmtd_bai-tap-3.pdf",
    externalLink: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fcdnlms.vnu.edu.vn%2Fdhqg.file.api%2Fuploads%2Flms%2Fdocument%2F25020781%2F20260503%2Ftmpz0gmtd_bai-tap-3.docx&wdOrigin=BROWSELINK",
    documentType: "PDF",
    objectives: [
      "Thành thạo các công cụ hợp tác trực tuyến và thể hiện năng lực quản lý, điều phối cá nhân trong dự án nhóm."
    ]
  },
  {
    id: "5",
    title: "Bài tập 5",
    Vietnamese: "Bài 2 - Mục 5.4",
    description: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    pdfFile: "tmpbyzx0f_battap_tranthanhson.pdf",
    externalLink: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fcdnlms.vnu.edu.vn%2Fdhqg.file.api%2Fuploads%2Flms%2Fdocument%2F25020781%2F20260505%2Ftmpbyzx0f_battap_tranthanhson.docx&wdOrigin=BROWSELINK",
    documentType: "DOCX",
    objectives: [
      "Thành thạo việc sử dụng các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số."
    ]
  },
  {
    id: "6",
    title: "Bài tập 6",
    Vietnamese: "Bài 4 - Mục 6.4",
    description: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    pdfFile: "tmpkjcb2y_25020781_tranthanhson_trachnhiemai.pdf",
    externalLink: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fcdnlms.vnu.edu.vn%2Fdhqg.file.api%2Fuploads%2Flms%2Fdocument%2F25020781%2F20260525%2Ftmpkjcb2y_25020781_tranthanhson_trachnhiemai.docx&wdOrigin=BROWSELINK",
    documentType: "PDF",
    objectives: [
      "Phát triển kỹ năng sử dụng AI có trách nhiệm và đạo đức trong học tập và nghiên cứu."
    ]
  }
];
