# 📄 Dokumentasi Portfolio Fakhriadi Rasyaad

## 📋 Daftar Isi
1. [Pengenalan Project](#pengenalan-project)
2. 2. [Struktur Project](#struktur-project)
   3. 3. [Teknologi yang Digunakan](#teknologi-yang-digunakan)
      4. 4. [Instalasi & Setup](#instalasi--setup)
         5. 5. [Fitur Utama](#fitur-utama)
            6. 6. [Penjelasan Code](#penjelasan-code)
               7. 7. [Panduan Penggunaan](#panduan-penggunaan)
                  8. 8. [Deployment](#deployment)
                    
                     9. ---
                    
                     10. ## 🎯 Pengenalan Project
                    
                     11. **Portfolio Fakhriadi Rasyaad** adalah website portofolio modern yang dirancang untuk menampilkan profil, prestasi, pengalaman, dan proyek dari seorang mahasiswa Teknik Telekomunikasi di Universitas Telkom.
                    
                     12. ### Fitur Utama:
                     13. - ✨ Desain responsif dan modern
                         - - 🎨 Navigasi halus dengan efek animasi
                           - - 📱 Mobile-friendly dengan menu toggle
                             - - 🎭 Efek 3D pada card saat hover
                               - - 📜 Smooth scroll ke bagian halaman
                                 - - ⬆️ Tombol "Back to Top"
                                   - - 🖼️ Modal untuk menampilkan sertifikat
                                    
                                     - **URL Live:** https://fakhriadi-rasyaad.vercel.app
                                    
                                     - ---

                                     ## 📁 Struktur Project

                                     ```
                                     Portfolio/
                                     ├── index.html              # Halaman utama (Beranda)
                                     ├── Project.html            # Halaman daftar proyek
                                     ├── Sertifikat.html         # Halaman sertifikat dengan modal
                                     ├── cv.html                 # Halaman CV
                                     ├── scripts.js              # File JavaScript utama
                                     ├── css/
                                     │   └── styles.css          # File CSS utama
                                     ├── gambar/                 # Folder untuk gambar dan logo
                                     ├── cv/                     # Folder untuk file CV
                                     ├── mark/                   # Folder markdown (dokumentasi)
                                     ├── readme/                 # Folder readme
                                     ├── webfonts/               # Folder untuk web fonts
                                     ├── .vscode/                # Konfigurasi VS Code
                                     ├── vercel.json             # Konfigurasi Vercel deployment
                                     └── .gitattributes          # Git attributes
                                     ```

                                     ---

                                     ## 🛠️ Teknologi yang Digunakan

                                     | Teknologi | Versi | Kegunaan |
                                     |-----------|-------|----------|
                                     | **HTML5** | - | Struktur halaman |
                                     | **CSS3** | - | Styling dan layout responsif |
                                     | **JavaScript (Vanilla)** | ES6+ | Interaktivitas dan efek |
                                     | **Vercel** | - | Platform deployment |

                                     **Font & Resources:**
                                     - Font: Web Fonts (custom)
                                     - - Icons: SVG inline
                                       - - Images: PNG format
                                        
                                         - ---

                                         ## 💻 Instalasi & Setup

                                         ### Prasyarat
                                         - Browser modern (Chrome, Firefox, Safari, Edge)
                                         - - Text editor (VS Code, Sublime Text, dll)
                                           - - Git (opsional, untuk clone repository)
                                            
                                             - ### Langkah-langkah Instalasi
                                            
                                             - **1. Clone Repository**
                                             - ```bash
                                               git clone https://github.com/FakhriadiRasyaad/Portofolio.git
                                               cd Portofolio
                                               ```

                                               **2. Buka File Local**
                                               - Buka `index.html` dengan double-click
                                               - - Atau gunakan Live Server extension di VS Code
                                                
                                                 - **3. Struktur File Penting**
                                                 - - Pastikan folder `css/`, `gambar/`, `js/` ada di root
                                                   - - File `scripts.js` dan CSS harus di tempat yang benar
                                                    
                                                     - ---

                                                     ## ✨ Fitur Utama

                                                     ### 1. Navigasi Responsif
                                                     - Menu navigasi fixed dengan efek scroll
                                                     - - Mobile menu toggle untuk perangkat kecil
                                                       - - Smooth scroll ke setiap section
                                                        
                                                         - ### 2. Hero Section
                                                         - - Konten utama dengan gradient text
                                                           - - Call-to-action button
                                                             - - Parallax effect saat scroll
                                                              
                                                               - ### 3. About Section
                                                               - - Informasi personal dan akademis
                                                                 - - Daftar pendidikan (S1, S2)
                                                                   - - Keterampilan pribadi
                                                                     - - Statistik singkat
                                                                      
                                                                       - ### 4. Achievements Section
                                                                       - - Grid card untuk prestasi
                                                                         - - Emoji untuk visual indicator
                                                                           - - Tag untuk kategori
                                                                            
                                                                             - ### 5. Experience Timeline
                                                                             - - Timeline vertikal pengalaman profesional
                                                                               - - Daftar tanggung jawab untuk setiap posisi
                                                                                 - - Link eksternal untuk referensi
                                                                                  
                                                                                   - ### 6. Contact Section
                                                                                   - - Social media links (GitHub, LinkedIn, Instagram, dll)
                                                                                     - - Email link
                                                                                       - - Layout sosial yang menarik
                                                                                        
                                                                                         - ### 7. Interactive Features
                                                                                         - - 3D card hover effect
                                                                                           - - Modal untuk sertifikat
                                                                                             - - Back to top button
                                                                                               - - Scroll reveal animation
                                                                                                
                                                                                                 - ---

                                                                                                 ## 🧠 Penjelasan Code Utama

                                                                                                 ### JavaScript Features (scripts.js)

                                                                                                 **Mobile Menu Toggle**
                                                                                                 ```javascript
                                                                                                 const mobileMenu = document.getElementById('mobile-menu');
                                                                                                 const navLinks = document.querySelector('.nav-links');

                                                                                                 mobileMenu.addEventListener('click', function() {
                                                                                                   navLinks.classList.toggle('active');
                                                                                                 });
                                                                                                 ```

                                                                                                 **Smooth Scroll untuk Anchor Links**
                                                                                                 ```javascript
                                                                                                 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                                                                                                   anchor.addEventListener('click', function(e) {
                                                                                                     const target = document.querySelector(this.getAttribute('href'));
                                                                                                     if (target) {
                                                                                                       e.preventDefault();
                                                                                                       window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
                                                                                                     }
                                                                                                   });
                                                                                                 });
                                                                                                 ```

                                                                                                 **3D Card Hover Effect**
                                                                                                 ```javascript
                                                                                                 const cards = document.querySelectorAll('.card');
                                                                                                 cards.forEach(card => {
                                                                                                   card.addEventListener('mousemove', function(e) {
                                                                                                     const rect = this.getBoundingClientRect();
                                                                                                     const rotateX = (e.clientY - rect.top - rect.height/2) / 10;
                                                                                                     const rotateY = (rect.width/2 - (e.clientX - rect.left)) / 10;

                                                                                                     this.style.transform =
                                                                                                       `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                                                                                                   });
                                                                                                 });
                                                                                                 ```

                                                                                                 **Parallax Effect untuk Hero Section**
                                                                                                 ```javascript
                                                                                                 window.addEventListener('scroll', function() {
                                                                                                   const scrolled = window.pageYOffset;
                                                                                                   const heroContent = document.querySelector('.hero-content');
                                                                                                   if (heroContent) {
                                                                                                     heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                                                                                                     heroContent.style.opacity = 1 - (scrolled / 600);
                                                                                                   }
                                                                                                 });
                                                                                                 ```

                                                                                                 **Intersection Observer untuk Reveal Animation**
                                                                                                 ```javascript
                                                                                                 const observer = new IntersectionObserver(function(entries) {
                                                                                                   entries.forEach(entry => {
                                                                                                     if (entry.isIntersecting) {
                                                                                                       entry.target.style.opacity = '1';
                                                                                                       entry.target.style.transform = 'translateY(0)';
                                                                                                     }
                                                                                                   });
                                                                                                 }, { threshold: 0.1 });
                                                                                                 ```

                                                                                                 ---

                                                                                                 ## 📖 Panduan Penggunaan

                                                                                                 ### Cara Mengedit Content

                                                                                                 **1. Edit Teks**
                                                                                                 - Buka file HTML dengan text editor
                                                                                                 - - Cari section yang ingin diubah
                                                                                                   - - Edit text langsung di HTML
                                                                                                    
                                                                                                     - **2. Edit Gambar**
                                                                                                     - - Ganti gambar di folder `gambar/`
                                                                                                       - - Update path di HTML: `src="gambar/nama-file.png"`
                                                                                                        
                                                                                                         - **3. Edit Warna/Styling**
                                                                                                         - - Buka `css/styles.css`
                                                                                                           - - Ubah CSS variables di `:root`
                                                                                                             - - Contoh: `--primary`, `--secondary`, etc
                                                                                                              
                                                                                                               - **4. Menambah Proyek Baru**
                                                                                                               - ```html
                                                                                                                 <div class="project-card" data-category="design">
                                                                                                                   <img src="gambar/project.jpg" alt="Project Name">
                                                                                                                   <h4>Nama Proyek</h4>
                                                                                                                   <p>Deskripsi singkat</p>
                                                                                                                   <span class="tag">Tag</span>
                                                                                                                 </div>
                                                                                                                 ```
                                                                                                                 
                                                                                                                 ---
                                                                                                                 
                                                                                                                 ## 🚀 Deployment
                                                                                                                 
                                                                                                                 ### Deploy ke Vercel (Sudah Dikonfigurasi)
                                                                                                                 
                                                                                                                 **Status:** ✅ Deployed successfully
                                                                                                                 - Platform: Vercel
                                                                                                                 - - Branch: main
                                                                                                                   - - URL: https://fakhriadi-rasyaad.vercel.app
                                                                                                                    
                                                                                                                     - **Cara Deploy Manual:**
                                                                                                                     - ```bash
                                                                                                                       # Install Vercel CLI
                                                                                                                       npm install -g vercel

                                                                                                                       # Login ke Vercel
                                                                                                                       vercel login

                                                                                                                       # Deploy project
                                                                                                                       vercel
                                                                                                                       ```
                                                                                                                       
                                                                                                                       ### Deploy Alternatif
                                                                                                                       - **GitHub Pages:** Aktifkan di settings repository
                                                                                                                       - - **Netlify:** Connect GitHub repository untuk auto-deploy
                                                                                                                        
                                                                                                                         - ---
                                                                                                                         
                                                                                                                         ## 🐛 Troubleshooting
                                                                                                                         
                                                                                                                         | Problem | Solusi |
                                                                                                                         |---------|--------|
                                                                                                                         | Images tidak muncul | Cek path file gambar, pastikan folder `gambar/` ada |
                                                                                                                         | Script tidak jalan | Pastikan `scripts.js` di-load sebelum `</body>` |
                                                                                                                         | CSS tidak ter-apply | Clear cache (Ctrl+Shift+Delete) atau hard refresh |
                                                                                                                         | Mobile menu tidak responsive | Pastikan viewport meta tag ada di `<head>` |
                                                                                                                         
                                                                                                                         ---
                                                                                                                         
                                                                                                                         ## 📊 Performance Tips
                                                                                                                         
                                                                                                                         1. **Optimize Images:** Gunakan format WebP atau compress PNG/JPG
                                                                                                                         2. 2. **Lazy Loading:** Images dengan `data-src` akan di-load saat visible
                                                                                                                            3. 3. **Debounce Events:** Scroll events sudah di-debounce
                                                                                                                               4. 4. **Minimize CSS/JS:** Gunakan minifier tools
                                                                                                                                 
                                                                                                                                  5. ---
                                                                                                                                 
                                                                                                                                  6. ## 👥 Author & Contact
                                                                                                                                 
                                                                                                                                  7. **Author:** Fakhriadi Rasyaad
                                                                                                                                 
                                                                                                                                  8. **Contact:**
                                                                                                                                  9. - 📧 Email: fakhriadi06ras@gmail.com
                                                                                                                                     - - 🔗 GitHub: https://github.com/FakhriadiRasyaad
                                                                                                                                       - - 💼 LinkedIn: https://www.linkedin.com/in/fakhriadi-rasyaad-b3a42b245/
                                                                                                                                         - - 📸 Instagram: https://www.instagram.com/fakhriadi_rasyaad/
                                                                                                                                           - - 💬 Line: https://line.me/ti/p/7JhwWxiOXL
                                                                                                                                            
                                                                                                                                             - **Lisensi:** © 2026 Fakhriadi Rasyaad. Hak cipta dilindungi.
                                                                                                                                            
                                                                                                                                             - ---
                                                                                                                                             
                                                                                                                                             ## 🎓 Resources
                                                                                                                                             
                                                                                                                                             - [MDN HTML5 Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
                                                                                                                                             - - [MDN CSS3 Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
                                                                                                                                               - - [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
                                                                                                                                                 - - [Vercel Documentation](https://vercel.com/docs)
                                                                                                                                                  
                                                                                                                                                   - ---
                                                                                                                                                   
                                                                                                                                                   **Last Updated:** 18 Januari 2026 | **Versi:** 2.0
                                                                                                                                                   
                                                                                                                                                   📝 **Note:** Untuk informasi lebih detail tentang setiap fitur dan penjelasan code, silakan lihat file dokumentasi lengkap di folder `/mark` atau `/readme`.
