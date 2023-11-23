console.log("hello world");
function tampilkanGambar(id){
// sembunyikan semua gambar 
document.querySelectorAll('.skinimg').forEach(img => {
    img.style.opacity = 0;
    img.style.transition = 'opacity 1.5s ease-in-out';

});

// menampilkan gambar terpilih setelah 1.5 detik 
setTimeout(() => {
    document.getElementById('gambar1').style.display = id === 'gambar1' ? 'block' : 'none';
    document.getElementById('gambar2').style.display = id === 'gambar2' ? 'block' : 'none';
    document.getElementById('gambar3').style.display = id === 'gambar3' ? 'block' : 'none';
    document.getElementById('gambar4').style.display = id === 'gambar4' ? 'block' : 'none';

    //set opacity untuk animasi masuk
    document.querySelectorAll('.skinimg').forEach(img => {
        img.style.opacity = 1;
    });
}, 400);
};