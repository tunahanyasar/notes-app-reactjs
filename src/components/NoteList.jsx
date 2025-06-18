import React from 'react'; // React kütüphanesini import ediliyor
import Note from './Note'; // Not bileşenini import ediliyor

/**
 * ===============================
 * NOT LİSTESİ BİLEŞENİ
 * ===============================
 * Eklenen notları listeleyen bileşen
 * Boş liste durumunda bilgi mesajı gösterir
 */
const NoteList = ({ notes, deleteNote }) => {
  // notes: Gösterilecek notlar dizisi
  // deleteNote: Not silme fonksiyonu
  
  /* ====== BOŞ KONTROL ====== */
  // Eğer hiç not yoksa bilgi mesajı göster
  if (notes.length === 0) {
    return (
      <div className="empty-notes">
        <p>Not eklenmedi</p>
      </div>
    );
  }

  /* ====== RENDER ====== */
  return (
    <div className="note-list">
      {/* Notları döngüyle listele */}
      {notes.map((note) => (
        // Her not için Note bileşenini göster
        <Note 
          key={note.id} // React için benzersiz key
          note={note} // Not verisi
          onDelete={deleteNote} // Silme fonksiyonu
        />
      ))}
    </div>
  );
};

export default NoteList;