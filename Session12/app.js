// Hàm - Function
// 1. Hàm là gì?
// - Hàm là một khối lệnh thực hiện 1 nhiệm vụ cụ thể (tính tổng, kiểm tra số nguyên tố, tìm chẵn lẻ)
// - Hàm có thể được tái sử dụng để giúp nâng cao hiệu suất và dể bào trì (maintaince)
// 2. Phân loại hàm
//  Có 2 dạng: Hàm được xây dựng sẵn và Hàm tự định nghĩa
// - Hàm có sẵn: split(); sort(); map(); concat();..
// - Hàm tự định nghĩa: là hàm mà người dùng tự xây dựng
// 3. Các tính chất của hàm
// - Thực thi và định nghĩa(khởi tạo)
// - Hàm không tự thực thi khi định nghĩa
// - Hàm chỉ thực thi khi gọi
// - Hàm có thể nhận vào 1 hay nhiều tham số
// - Hàm có thể trả về 1 giá trị (return)
// *** Mọi câu lệnh sau từ khóa return ở trong khối code đó sẽ bị vô hiệu hóa (không có tác dụng)
function tinhTong(a, b) {
  return 0;
}
console.log(tinhTong(1, 2));
// 4. Cách khai báo hàm
// - Declaration function (có thể thực thi trước khi khởi tạo - hoisting (chuyển mọi khai báo lên đầu tiên))
// VD:
// Bước định nghĩa hàm
// Khi định nghĩa hàm thì gọi là tham số (parameter)
// hello("Hello chi Thủy", "Hello Hoàng", "Hello Bách");
// function hello(message1, message2, a) {
//   console.log(a);
//   console.log(message1);
//   console.log(message2);
// }
// Gọi hàm
// Khi goi thi truyen doi so (argument)
// - Expression function (không thể thực thi trước khi khởi tạo nó)
// Sử dụng từ khóa var,let,const
// var people = function (message1, message2) {
//   console.log(message1);
//   console.log(message2);
// };
// people("Hello Thảo", "Hello Anh Khôi");
// - Arrow function (ES6)
