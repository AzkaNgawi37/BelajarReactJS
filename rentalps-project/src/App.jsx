import { useState } from 'react'
import './App.css'

function Greeting() {
  return (
    <div className="greeting">
      <h1>Rental PS Center</h1>
      <p>Kelola antrean pelanggan dengan cepat dan mudah.</p>
    </div>
  );
}

function RentalCard({ nama, ps, durasi, tipe }) {
  return (
    <div className={`rental-card ${tipe === 'VIP' ? 'vip-border' : ''}`}>
      <div className="card-info">
        <div className="card-header">
          <h3>{nama}</h3>
          <span className={`badge ${tipe === 'VIP' ? 'badge-vip' : 'badge-reg'}`}>{tipe}</span>
        </div>
        <p><strong>Konsol:</strong> PlayStation {ps}</p>
        <p><strong>Durasi:</strong> {durasi} Jam</p>
      </div>
    </div>
  );
}

function App() {
  const [showForm, setShowForm] = useState(false);
  const [rentals, setRentals] = useState([
    { nama: "Budi", ps: "5", durasi: "2", tipe: "VIP" },
    { nama: "Andi", ps: "3", durasi: "5", tipe: "Reguler" }
  ]);

  const [formData, setFormData] = useState({ 
    nama: '', 
    ps: '5', 
    durasi: '1', 
    tipe: 'Reguler' 
  });

  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nama && formData.durasi) {
      setRentals([...rentals, formData]);
      setShowForm(false);
      setFormData({ nama: '', ps: '5', durasi: '1', tipe: 'Reguler' });
    }
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        <Greeting />

        <div className="action-bar">
          <h2>Daftar Antrean</h2>
          <button className="btn btn-add" onClick={() => setShowForm(true)}>
            + Tambah Rental
          </button>
        </div>

        <div className="list-container">
          {rentals.map((item, index) => (
            <RentalCard 
              key={index} 
              nama={item.nama} 
              ps={item.ps} 
              durasi={item.durasi} 
              tipe={item.tipe} 
            />
          ))}
        </div>

        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Booking Rental PS</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nama Pelanggan</label>
                  <input 
                    type="text" 
                    value={formData.nama}
                    onChange={(e) => setFormData({...formData, nama: e.target.value})}
                    placeholder="Contoh: Andi" 
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Pilih PS</label>
                    <select value={formData.ps} onChange={(e) => setFormData({...formData, ps: e.target.value})}>
                      <option value="2">PS 2</option>
                      <option value="3">PS 3</option>
                      <option value="4">PS 4</option>
                      <option value="5">PS 5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Durasi (Jam)</label>
                    <input 
                      type="number" 
                      value={formData.durasi}
                      onChange={(e) => setFormData({...formData, durasi: e.target.value})}
                      min="1"
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Tipe Paket</label>
                  <div className="radio-group">
                    <label>
                      <input type="radio" name="tipe" value="Reguler" checked={formData.tipe === 'Reguler'} onChange={(e) => setFormData({...formData, tipe: e.target.value})} /> Reguler
                    </label>
                    <label>
                      <input type="radio" name="tipe" value="VIP" checked={formData.tipe === 'VIP'} onChange={(e) => setFormData({...formData, tipe: e.target.value})} /> VIP
                    </label>
                  </div>
                </div>

                <div className="modal-actions">
                  <button type="submit" className="btn btn-save">Konfirmasi Booking</button>
                  <button type="button" className="btn btn-cancel" onClick={() => setShowForm(false)}>Batal</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;