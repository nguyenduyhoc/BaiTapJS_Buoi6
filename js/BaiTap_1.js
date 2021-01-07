document.getElementById("btnTinhSoNguyenDuong").addEventListener("click", function() {
    var tong = 0;
    var n = 0;
    while (tong < 10000) {
        tong += n;
        n++;
    }
    document.getElementById("tinhTongSoNguyenDuong").innerHTML = "Số nguyên dương nhỏ nhất là " + n + "<br />" + "Tổng là: " + tong;
});