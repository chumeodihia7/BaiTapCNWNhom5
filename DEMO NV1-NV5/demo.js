function oneclick(){
    document.getElementById("text").style.color="blue";
}
function ocl(){
    document.getElementById("text").style.color="pink";
}
function dbcl(){
    alert("Hello");
}
// function ocl1(){
//     var ten = document.getElementById("tên").value;
//     var gioitinh = document.getElementById("gioitinh").value;
//     if(!ten){
//         alert("vui long nhap ten");
//         return;
//     }
//     var x="ten: "+ ten + "<br> gioi tinh: "+ gioitinh;
//     document.getElementById("ketqua").innerHTML=x;
    
// }
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn gửi biểu mẫu mặc định

    // Lấy giá trị từ ô văn bản và email
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;

    // Kiểm tra xem tên và email đã được điền chưa
    if (name.trim() === "" || email.trim() === "") {
        document.getElementById("message").textContent = "Vui lòng điền đầy đủ thông tin.";
    } else {
        document.getElementById("message").textContent = `Tên: ${name}, Email: ${email}, Giới tính: ${gender}`;
    }
});
