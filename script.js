// Fungsi untuk menambahkan pemain ke localStorage dan memperbarui tabel
function tambahPemain() {
    // Ambil nilai dari form
    const nama = document.getElementById('nama').value;
    const telepon = document.getElementById('telepon').value;
    const umur = document.getElementById('umur').value;
    const alamat = document.getElementById('alamat').value;
    const jenisKelamin = document.getElementById('jenis_kelamin').value;
  
    if (nama && telepon && umur && alamat && jenisKelamin) {
      // Ambil daftar pemain yang sudah ada dari localStorage atau buat array baru
      const pemainList = JSON.parse(localStorage.getItem('pemainList')) || [];
  
      // Tambah pemain baru ke array
      pemainList.push({ nama, umur, jenisKelamin, alamat });
  
      // Simpan kembali array ke localStorage
      localStorage.setItem('pemainList', JSON.stringify(pemainList));
  
      // Reset form
      document.getElementById('formPendaftaran').reset();
  
      alert('Pemain berhasil didaftarkan!');
    } else {
      alert('Silakan lengkapi semua data.');
    }
  }
  
  // Fungsi untuk menampilkan daftar pemain dari localStorage ke tabel
  function tampilkanPemain() {
    const pemainList = JSON.parse(localStorage.getItem('pemainList')) || [];
    const tabelPemain = document.getElementById('tabelPemain');
  
    pemainList.forEach((pemain, index) => {
      const row = tabelPemain.insertRow();
      row.insertCell(0).textContent = index + 1;
      row.insertCell(1).textContent = pemain.nama;
      row.insertCell(2).textContent = pemain.umur;
      row.insertCell(3).textContent = pemain.jenisKelamin;
      row.insertCell(4).textContent = pemain.alamat;
    });
  }
  
  // Panggil fungsi tampilkanPemain jika halaman adalah daftar pemain
  if (window.location.pathname.includes('daftarpemain.php')) {
    tampilkanPemain();
  }
  