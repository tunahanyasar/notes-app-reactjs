import React from 'react'; // React kütüphanesini import ediliyor

/**
 * ===============================
 * TEKİL NOT BİLEŞENİ
 * ===============================
 * Her bir notu ayrı kart olarak gösteren bileşen
 * Not içeriği ve silme butonu içerir
 */
const Note = ({ note, onDelete }) => {
  // note: Gösterilecek not nesnesi (içerik ve renk bilgilerini içerir)
  // onDelete: Notu silmek için kullanılan fonksiyon
  
  return (
    // Not kartı - arka plan rengi not nesnesinden alınır
    <div className="note" style={{ backgroundColor: note.color }}>
      {/* Not başlık kısmı - sağ üstte silme butonu içerir */}
      <div className="note-header">
        <div></div> {/* Boş div - silme butonunu sağa yaslayan dolgu elemanı */}
        {/* Silme butonu */}
        <button 
          className="delete-note-btn" 
          onClick={() => onDelete(note.id)} // Butona tıklandığında notu siler
          style={{ color: 'white' }} // Buton rengi beyaz
        >
          <i className="fas fa-times"></i> {/* X ikonu */}
        </button>
      </div>
      {/* Not içerik kısmı */}
      <div className="note-content">
        {/* Not metni - rengi beyaz */}
        <p style={{ color: 'white' }}>{note.content}</p>
      </div>
    </div>
  );
};

export default Note;