var keyword = document.getElementById("keyword");
var cari = document.getElementById("tombol-cari");
var container = document.getElementById("container");

//tambahkan event ketika keyword ditulis
keyword.addEventListener('keyup', function () {
    // console.log(keyword.value);
    // alert('ok');

    //buat objek ajax
    var xhr = new XMLHttpRequest();

    //cek kesiapan ajax
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // console.log(xhr.responseText);

            container.innerHTML = xhr.responseText;
        }
    }

    //eksekusi ajax ansincrounus true, sincronus false
    xhr.open('GET', 'koding/mahasiswa.php?keyword=' + keyword.value, true);
    xhr.send();

});