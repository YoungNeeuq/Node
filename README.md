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
#SQL : Các lệnh cơ bản

   1.SELECT - Truy vấn dữ liệu:
      a.Hiển thị tất cả dữ liệu từ một bảng:
         SELECT * FROM ten_bang;
      b.Hiển thị một số cột cụ thể từ một bảng:
         SELECT column1, column2 FROM ten_bang;
      c.Sử dụng điều kiện WHERE để lọc dữ liệu:
         SELECT * FROM ten_bang WHERE dieu_kien;
   
   2.INSERT - Thêm dữ liệu mới:
      INSERT INTO ten_bang (column1, column2) VALUES (gia_tri1, gia_tri2);
   
   3.UPDATE - Cập nhật dữ liệu:
      UPDATE ten_bang SET column1 = gia_tri_moi WHERE dieu_kien;
   
   4.DELETE - Xóa dữ liệu:
      DELETE FROM ten_bang WHERE dieu_kien;
   
   5.CREATE TABLE - Tạo bảng mới:
      CREATE TABLE ten_bang (
          column1 datatype,
          column2 datatype,
          ...
      );
   
   6.ALTER TABLE - Thay đổi cấu trúc bảng:
      a.Thêm cột mới:
         ALTER TABLE ten_bang ADD COLUMN ten_cot datatype;
      b.Đổi tên cột:
         ALTER TABLE ten_bang RENAME COLUMN cu_ten TO moi_ten;
   
   7.DROP TABLE - Xóa bảng:
      DROP TABLE ten_bang;
