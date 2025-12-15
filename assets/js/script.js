// --- JAVASCRIPT LOGIC ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(element) {
    // Mencari tag img di dalam container yang diklik
    const img = element.querySelector('img');
    
    // Cek jika image src valid (bukan placeholder kosong/error)
    if (img && img.src && img.style.opacity !== '0') {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Mencegah scroll saat lightbox aktif
    } else {
        alert("Belum ada gambar screenshot yang dipasang di sini :)");
    }
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Mengembalikan scroll
}

// Menutup dengan tombol Escape
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});