import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    patient_id: "",
    age: "",
    gender: "",
    sample_type: "",
    measurement: "",
    unit: "",
    reference_range: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = "https://mon-backend.onrender.com"; // Remplace par ton vrai lien Render

const response = await fetch(`${API_URL}/add_sample/`, { 
,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message || "Échantillon ajouté avec succès !");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Gestion des analyses biomédicales</h1>
      <form onSubmit={handleSubmit}>
        <input name="patient_id" placeholder="ID Patient" onChange={handleChange} required />
        <input name="age" type="number" placeholder="Âge" onChange={handleChange} required />
        <input name="gender" placeholder="Genre" onChange={handleChange} required />
        <input name="sample_type" placeholder="Type d'échantillon" onChange={handleChange} required />
        <input name="measurement" type="number" step="0.01" placeholder="Mesure" onChange={handleChange} required />
        <input name="unit" placeholder="Unité" onChange={handleChange} required />
        <input name="reference_range" placeholder="Valeur de référence" onChange={handleChange} required />
        <button type="submit">Ajouter l'échantillon</button>
      </form>
    </div>
  );
}

export default App;
