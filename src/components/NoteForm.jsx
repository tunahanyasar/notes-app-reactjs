import { useState } from 'react'; // React useState hook'unu import ediliyor

/**
 * ===============================
 * NOT EKLEME FORMU BİLEŞENİ
 * ===============================
 * Yeni not eklemek için form içeren bileşen
 * Not içeriği girişi ve renk seçimi sağlar
 */
const NoteForm = ({ addNote }) => {
  // addNote: Ana bileşenden gelen, yeni not eklemek için kullanılan fonksiyon
  
  /* ====== STATE TANIMLARI ====== */
  // Not içeriğini tutan state
  const [content, setContent] = useState('');
  // Seçilen rengi tutan state, varsayılan olarak siyah
  const [selectedColor, setSelectedColor] = useState('#333');
  
  /* ====== SABİT DEĞERLER ====== */
  // Kullanılabilir renk seçenekleri dizisi
  const colors = [
    '#333', '#42d392', '#2dd4bf', '#a3e635', '#facc15', 
    '#fb923c', '#f87171', '#ec4899', '#a78bfa', '#ef4444'
  ];

  /* ====== EVENT HANDLERS ====== */
  // Form gönderildiğinde çalışan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini önler
    
    // İçerik boşsa işlemi durdur
    if (!content.trim()) return;
    
    // Yeni not nesnesi oluştur
    const newNote = {
      id: Date.now(), // Benzersiz bir id oluştur
      content, // Not içeriği
      color: selectedColor // Seçilen renk
    };
    
    addNote(newNote); // Notu ekle
    setContent(''); // İçerik alanını temizle
  };

  /* ====== RENDER ====== */
  return (
    <div className="note-form-container">
      {/* Not ekleme formu */}
      <form onSubmit={handleSubmit} className="note-form">
        {/* Not içeriği giriş alanı */}
        <textarea
          placeholder="Notunuzu buraya yazın..." // Textarea ipucu metni
          value={content} // Textarea değeri state'ten geliyor
          onChange={(e) => setContent(e.target.value)} // İçerik değiştiğinde state güncellenir
          className="note-content-input"
        ></textarea>
        <div className="note-form-actions">
          {/* Renk seçimi alanı */}
          <div className="color-selector">
            {/* Mevcut renkleri döngüyle listele */}
            {colors.map(color => (
              <button
                key={color} // React için benzersiz key
                type="button" // Form submit'i tetiklemesin
                className={`color-btn ${selectedColor === color ? 'active' : ''}`} // Aktif renk için özel class
                style={{ backgroundColor: color }} // Renk stil olarak uygulanır
                onClick={() => setSelectedColor(color)} // Renk seçildiğinde state güncellenir
              ></button>
            ))}
          </div>
          {/* Not ekleme butonu */}
          <button type="submit" className="add-note-btn">EKLE</button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;