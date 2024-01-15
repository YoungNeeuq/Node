# Node
1. HTTP protocol
   - HTTP (Hypertext Transfer Protocol) là một giao thức truyền tải dữ liệu được sử dụng để truyền tải thông tin trên Internet.
   - HTTP hoạt động theo mô hình yêu cầu/phản hồi (request/response). Request gồm các phương thức chính sau :
      + GET : lấy dữ liệu về
      + POST : gửi dữ liệu lên
      + PUT : update dữ liệu
      + DELETE : xóa dữ liệu
   - Nói chung, HTTP là giao thức cơ bản và quan trọng trong việc truyền tải thông tin qua Internet.
2. SSR & CSR
   a. SSR (Server-Side Rendering) :
       - Quá trình render HTML và JavaScript diễn ra ở phía máy chủ (server).
       - Khi một yêu cầu được gửi từ trình duyệt của người dùng, máy chủ tạo ra một phiên bản hoàn chỉnh của trang web và gửi nó về cho trình duyệt.
       - Ưu điểm :
         + Request nhanh
       - Nhược điểm :
         + Thao tác sẽ bị reload trang
    b. CSR (Client-Side Rendering) :
       - Trình duyệt của người dùng phải thực hiện quá trình render HTML và JavaScript.
       - Khi người dùng truy cập một trang web, máy chủ chỉ cần gửi một trang HTML cơ bản và một số tập tin JavaScript. Và trình duyệt sẽ đọc têp JS này để render dữ liệu.
       - Ưu điểm :
          + Thao tác không bị reload trang ( trải nghiệm smooth hơn )
       - Nhược điểm :
          + Request lần đầu chậm
