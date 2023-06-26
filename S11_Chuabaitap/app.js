// Tìm phần tử tổn tại trong mảng

// let input = Number(prompt("Nhập số muốn tìm trong mảng"));
// let arr = [1, -2, 3, 4, 5, 6];
// for (let index = 0; index < arr.length; index++) {
//   if (input === arr[index]) {
//     console.log("Đã tìm thấy");
//     break;
//   } else {
//     console.log("Không tìm thấy");
//     break;
//   }
// }
// Kỹ thuật cắm cờ
// let check = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (input == arr[i]) {
//     check = i; // vừa lấy điều kiện kiểm tra tồn tại, vừa lấy được vị trị index của số cần tìm
//   }
// }

// if (check == -1) {
//   console.log("Không tìm thấy");
// } else {
//   console.log(`Đã tìm thấy ở vị trí ${check}`);
// }

// let store = ["Laptop", "Keyboard", "Mouse", "PC"];
// let cart = [
//   ["Laptop", 0],
//   ["Keyboard", 0],
//   ["Mouse", 0],
//   ["PC", 10],
// ];
// console.log(cart[3][1]);// Lấy ra số lượng của phần tử thứ 3 trong mảng cart
// let a = cart[1][0];
// console.log(a);

// Tạo một ứng dụng mua hàng trong store.
// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
// •	C – Cho người dùng nhập vào đồ dùng muốn mua, thêm đồ dùng vào mảng cart (nếu có cộng thêm 1). Sau đó in ra toàn bộ các phần tử trong cart
// •	R – In ra toàn bộ các phần tử trong cart
// •	U – Hỏi người dùng có muốn update số lượng có trong cart. Sau đó cho người dùng nhập số lượng muốn update. Tiến hành update và in ra toàn bộ các phần tử trong cart
// •	D – Hỏi người dùng sản phẩm muốn xóa khỏi cart. Tiến hành xóa và in ra toàn bộ các phần tử trong cart
// •	E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình ứng dụng giỏ hàng

// In kết quả của store và cart lên màn hình
// 1> In store
// console.log("Cửa hàng bán:");
// for (let i = 0; i < store.length; i++) {
//   console.log(`${i + 1}.${store[i]}`);
// }
// // 2. In cart
// console.log("Giỏ hàng của bạn gồm");
// for (let i = 0; i < cart.length; i++) {
//   console.log(`${i + 1}.${cart[i][0]}-${cart[i][1]}`);
// }
// let state = true;
// while (state) {
//   let input = prompt("Nhập vào C/R/U/D/E").toUpperCase();

//   if (input === "C") {
//     //   Cho người dùng nhập vào sản phẩm muốn mua
//     let addProduct = prompt("Nhập vào sản phẩm mua");
//     // Kiểm tra xem addProduct có tồn tại trong mảng store bằng kỹ thuật cắm cờ
//     let checkStore = -1;
//     for (let i = 0; i < store.length; i++) {
//       if (addProduct === store[i]) {
//         checkStore = i;
//       }
//     }
//     // Kiểm tra tồn tại thông qua biến check
//     if (checkStore == -1) {
//       console.log("Sản phẩm bạn tìm không tồn tại trong giỏ hàng");
//     } else {
//       // Tìm nó trong cart ở vị trí nào
//       // Do bài này vị trị index của store và cart là như nhau nên không cần kiểm tra
//       // Tăng số lượng lên 1 đơn vị ở vị trị index tìm thấy
//       cart[checkStore][1] += 1;
//       console.log("Giỏ hàng của bạn sau khi mua gồm");
//       for (let i = 0; i < cart.length; i++) {
//         console.log(`${i + 1}.${cart[i][0]}-${cart[i][1]}`);
//       }
//     }
//   } else if (input === "R") {
//     console.log("Giỏ hàng của bạn sau khi mua gồm");
//     for (let i = 0; i < cart.length; i++) {
//       console.log(`${i + 1}.${cart[i][0]}-${cart[i][1]}`);
//     }
//   } else if (input === "U") {
//     // Hỏi người dùng vị trị sản phẩm muốn update
//     let updateIndex = Number(prompt("Nhập vào vị trí muốn thay đổi số lượng"));
//     // Nhập vào số lượng muốn thay đổi
//     let updateNumber = Number(prompt("Nhập vào số lượng muốn update"));
//     cart[updateIndex - 1][1] = updateNumber;
//     //   In ra kết quả của giỏ hàng
//     console.log("Giỏ hàng của bạn sau khi update gồm");
//     for (let i = 0; i < cart.length; i++) {
//       console.log(`${i + 1}.${cart[i][0]}-${cart[i][1]}`);
//     }
//   } else if (input === "D") {
//     // Xóa khỏi giỏ hàng
//     //   Cho người dùng nhập vào vị trí muốn xóa trong cart
//     let deleteIndex = Number(prompt("Nhập vào vị trí muốn xóa"));
//     cart[deleteIndex - 1][1] = 0;
//     //   In ra kết quả của giỏ hàng
//     console.log("Giỏ hàng của bạn sau khi delete gồm");
//     for (let i = 0; i < cart.length; i++) {
//       console.log(`${i + 1}.${cart[i][0]}-${cart[i][1]}`);
//     }
//   } else if (input === "E") {
//     console.log("Cảm ơn đã mua hàng");
//     state = false;
//   } else {
//     console.log("Anh nhập lại hộ em");
//   }
// }

// Bài tập lms
// let arr = [];
// console.log("Kiểm tra phần tử index 0 của mảng arr", arr[0]);
// Nhập 5 giá trị số nguyên cho mảng từ bàn phím và thêm vào mảng arr
// let a = prompt("Nhập 5 số nguyên"); //string
// Bước 1: Chuyển string thành dữ liệu mảng(sử dụng split(","))
// let newArr = a.split(",");
// Bước 2: Sử dụng vòng lặp for để ép kiểu string của từng phần tử thành kiểu number
// Sau đó gán từng phẩn tử của mảng arr bằng phần tử của mảng newArr
// for (let i = 0; i < newArr.length; i++) {
//   arr[i] = Number(newArr[i]);
// }
// Hiển thị giá trị các phần tử của mảng
// console.log("Sau khi thêm", arr);
// In các phần tử có giá trị chẵn và tính tổng
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log("Các phần tử chẵn là:", arr[i]);
//     sum = sum + arr[i];
//   }
// }
// console.log(`Tong cac phan tu chan la: ${sum}`);
// Bài 3
// In giá trị các phẩn tử trong mảng là số nguyên tố
// Số nguyên tố là gì? là số bắt đầu từ 2 và chỉ có 2 ước là 1 và chính nó
// let arr = [2, -2, 3, 9, 100, 20, 1, 7];=> function lam lai
// Cho nguoi dung nhap vao 1 so, moi nguoi kiem tra so day co phai la so nguyen to khong?
// let input = Number(prompt("Nhap vao 1 so bat ky"));
// let check = false;
// // Kiem tra so do co lon hon 2 khong
// if (input < 2) {
//   console.log("Day khong phai la so nguyen to");
// } else {
//   //Khoi lenh else la input >=2
//   // Su dung vong lap for de duyet qua cac số trong dãy số từ 2 đến input
//   for (let i = 2; i < input; i++) {
//     // Điều kiện là input chia hết cho i va khac 2, neu dung gan lai bien check bang true
//     if (input % i == 0 && input != 2) {
//       check = true;
//     }
//   }
//   // Ra ngoai vong lap for kiem tra dieu kien cua bien check
//   if (check == false) {
//     console.log("Day la so nguyen to");
//   } else {
//     console.log("Day khong phai la so nguyen to");
//   }
// }

// Tim min max cua mang
// let arr = [1, 54, 76, -89, 33, 600];
// Cách 1: Không sử dụng hàm có sẵn
// Bước 1: Khởi tạo max bằng arr ở vị trí index 0
// let max = arr[0]; //1
// let min = arr[0];
// //Lan 1: max <arr[1]=> max =arr[1] //54
// //Lan 2: max <arr[2] => max =arr[2] //76
// // Lan 3: max > arr[3]=> khong gan thi max giu nguyen
// // Bước 2: Sử dụng vòng lặp for để duyệt qua từng phần tử của mảng
// for (let i = 0; i < arr.length; i++) {
//   // Bước 3: Nếu như max <arr[i] thì tôi sẽ gán lại max = arr[i]
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// // Bước 4 In ra kết quả
// console.log(max);
// console.log(min);
// Cách 2: Sử dụng hàm có sẵn sort()
// console.log(
//   "Sử dụng hàm sort",
//   arr.sort(function (a, b) {
//     return a - b;
//   })
// );
// Cách 3: Sắp xếp mảng tử bé đến lớn không dùng hàm sort()
// let arr = [1, 54, -89, 660, 76, 89];
// let temp;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       temp = arr[j];
//       arr[j] = arr[i];
//       arr[i] = temp;
//       // Lần 1: i =0 arr[i]=1 / j=1 arr[j]=54 => temp=54 / arr[j] = 1 ; arr[i] =54
//       // Lần 2: i =1 arr[i]=54 /j=2 arr[j]=76 => temp=76 / arr[j] = 54; arr[i]=76
//       // Lần 3; i =2 arr[i]=76/j=3 arr[j]=-89 =>
//     }
//   }
// }
// console.log("Sau khi sắp xếp", arr);

// Tìm số lớn thứ 2 trong mảng sử dụng 1 vòng lặp for
// Sắp xếp các phần tử trong mảng mà chỉ sử dụng 1 vòng lặp for
