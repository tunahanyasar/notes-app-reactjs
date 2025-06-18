import { useState, useEffect } from 'react'; // React hooks'ları import ediliyor
import SearchBar from './SearchBar'; // Arama bileşeni import ediliyor
import NoteForm from './NoteForm'; // Not ekleme formu bileşeni import ediliyor
import NoteList from './NoteList'; // Not listesi bileşeni import ediliyor
import '../App.css'; // CSS stillerini import ediliyor

/**
 * ===============================
 * ANA NOT UYGULAMASI BİLEŞENİ
 * ===============================
 * Notları saklar, filtreleme işlemlerini yönetir
 * ve diğer bileşenleri bir araya getirir
 */
const NoteApp = () => {
  /* ====== STATE TANIMLARI ====== */
  // Tüm notları saklayan state
  const [notes, setNotes] = useState([]);
  // Arama metnini saklayan state
  const [searchText, setSearchText] = useState('');
  // Filtrelenmiş notları saklayan state
  const [filteredNotes, setFilteredNotes] = useState([]);

  /* ====== EFFECT HOOKS ====== */
  useEffect(() => {
    // Arama metni veya notlar değiştiğinde filtreleme işlemi yapılır
    setFilteredNotes(
      notes.filter((note) =>
        // Not içeriğinde arama metni geçiyorsa filtrelenen listeye eklenir
        note.content.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [notes, searchText]); // Bağımlılık dizisi - notes veya searchText değiştiğinde useEffect çalışır

  /* ====== EVENT HANDLERS ====== */
  // Yeni not ekleme fonksiyonu
  const addNote = (newNote) => {
    setNotes([...notes, newNote]); // Mevcut notlara yeni not eklenir
  };

  // Not silme fonksiyonu
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id)); // id'si eşleşmeyen notlar saklanır
  };

  /* ====== RENDER ====== */
  return (
    <div className="note-app">
      <h1 className="app-title">Note App</h1>
      {/* Arama bileşeni - arama metni ve set fonksiyonu gönderilir */}
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {/* Not ekleme form bileşeni - not ekleme fonksiyonu gönderilir */}
      <NoteForm addNote={addNote} />
      {/* Not listesi bileşeni - filtrelenmiş notlar ve silme fonksiyonu gönderilir */}
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
};

export default NoteApp;