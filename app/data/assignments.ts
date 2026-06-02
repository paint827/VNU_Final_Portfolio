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
      "Học cách sử dụng các công cụ phần mềm"
    ]
  },
  {
    id: "2",
    title: "Bài tập 2",
    Vietnamese: "Bài 2 - Mục 2.4",
    description: "Tìm kiếm và dàn bố thông tin học thuật",
    pdfFile: "tmpunozz3_baitaptuan2.pdf",
    externalLink: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fcdnlms.vnu.edu.vn%2Fdhqg.file.api%2Fuploads%2Flms%2Fdocument%2F25020781%2F20260404%2Ftmpunozz3_baitaptuan2.docx&wdOrigin=BROWSELINK",
    documentType: "DOCX",
    objectives: [
      "Tìm kiếm các kết quả bài tập thành phần",
      "Dàn bố các kết quả một cách logic và rõ ràng",
      "Lựa chọn thông tin quan trọng nhất"
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
      "Sử dụng AI một cách hiệu quả trong học tập"
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
      "Minh chứng về việc sử dụng công cụ quản lý dự án",
      "Hoàn thành các phần của dự án nhóm",
      "Hợp tác hiệu quả với các thành viên khác"
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
      "Trưng bày sản phẩm nội dung được hỗ trợ bởi AI",
      "Tìm kiếm độc lập trí tuệ và hỗ trợ từ AI",
      "Phân tích tác động của AI trong sáng tạo"
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
      "Tìm hiểu các vấn đề đạo đức của AI",
      "Áp dụng AI một cách có trách nhiệm",
      "Tham khảo ý kiến chuyên gia về sử dụng AI đạo đức"
    ]
  }
];
