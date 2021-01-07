// document.getElementById("btnTongPhuongTrinh").addEventListener('click', function() {
//     var x = parseInt(document.getElementById("txtSoX").value);
//     var n = parseInt(document.getElementById("txtSoN").value);
//     // var tong = 0;
//     // var luyThua = 1;

//     // for (var i = 1; i <= n; i++) {
//     //     luyThua = x ** luyThua;
//     //     tong += luyThua

//     // }
//     console.log(tong)
// })


function tongphuongtrinh(event) {
    event.preventDefault()
    var x = parseFloat(document.getElementById("txtSoX").value);
    var n = parseFloat(document.getElementById("txtSoN").value);
    var tongPhuongTrinh = tinhTong(x, n)
    document.getElementById("txtTongPhuongTrinh").innerHTML = "Kết quả: " + tongPhuongTrinh;

}

function tinhTong(a, b) {
    var tong = 0;
    var luyThua = 1;
    if (a < 0 || b < 0) {
        return tong = " Mời bạn nhập lại";
    } else {
        for (var i = 1; i <= b; i++) {
            luyThua = a ** i;
            tong += luyThua
        }
        return tong
    }


}