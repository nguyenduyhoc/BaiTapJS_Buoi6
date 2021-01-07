document.getElementById("btnGiaiThua").addEventListener('click', function() {
    var n = parseFloat(document.getElementById("txtGiaiThua").value);
    var ketQua = 1
    for (var i = 1; i <= n; i++) {
        ketQua = ketQua * i
    }
    document.getElementById("txtKetQuaGiaiThua").innerHTML = "Kết quả: " + ketQua;
})