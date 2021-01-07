function taoTheDiv() {

    // var divs = document.getElementsByTagName("div");

    // // for (var i = 0;; i++) {
    // tagDiv.innerHTML = "Đây là thẻ Div";
    // document.getElementById("txtKetQuaTheDiv").innerHTML
    // document.getElementById("txtKetQuaTheDiv").appendChild(tagDiv)


    for (var i = 1; i <= 10; i++) {
        // Vị trí chẵn => màu đỏ
        var tagDiv = document.createElement("div");
        // console.log(tagDiv);
        if (i % 2 == 0) {
            tagDiv.innerHTML = "Đây là thẻ số chẵn";
            tagDiv.style.height = "30px"
            tagDiv.style.backgroundColor = "red ";
            document.getElementById("txtKetQuaTheDiv").appendChild(tagDiv)
        } else { // Vị trí lẽ => màu xanh
            tagDiv.innerHTML = "Đây là thẻ số lẻ";
            tagDiv.style.color = "white"
            tagDiv.style.height = "30px"
            tagDiv.style.backgroundColor = "blue";
            // document.getElementById("txtKetQuaTheDiv").innerHTML
            document.getElementById("txtKetQuaTheDiv").appendChild(tagDiv)
        }
    }
}