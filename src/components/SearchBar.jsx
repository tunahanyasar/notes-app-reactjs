import React from 'react'; // React kütüphanesini import ediliyor

/**
 * ===============================
 * ARAMA ÇUBUĞU BİLEŞENİ
 * ===============================
 * Notlar arasında arama yapmak için kullanılan
 * arama kutusu bileşeni
 */
const SearchBar = ({ searchText, setSearchText }) => {
  // searchText: Arama kutusundaki metin
  // setSearchText: Arama metnini güncelleyen fonksiyon
  
  return (
    <div className="search-container">
      <div className="search-bar">
        {/* Arama ikonu */}
        <i className="fas fa-search search-icon"></i>
        {/* Arama input alanı */}
        <input
          type="text"
          placeholder="Ara..." // Arama kutusundaki ipucu metni
          value={searchText} // Input değeri state'ten geliyor
          onChange={(e) => setSearchText(e.target.value)} // Metin değiştiğinde state güncellenir
        />
      </div>
    </div>
  );
};

export default SearchBar;