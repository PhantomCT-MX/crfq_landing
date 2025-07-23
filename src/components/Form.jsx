import React, { useState } from "react";
import styles, { layout } from "../style"; // Estilos globales

// Simulación de disponibilidad traída desde una API
const disponibilidad = {
  "2025-07-24": ["10:00", "11:00", "15:00"],
  "2025-07-25": ["09:30", "13:00", "16:30"],
  "2025-07-26": ["08:00", "12:00"],
};

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    mensaje: "",
    fecha: "",
    hora: "",
  });

  const fechasDisponibles = Object.keys(disponibilidad);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFechaSeleccionada = (fecha) => {
    setFormData((prev) => ({
      ...prev,
      fecha,
      hora: "", // Reset hora si cambia la fecha
    }));
  };

  const handleHoraSeleccionada = (hora) => {
    setFormData((prev) => ({
      ...prev,
      hora,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Gracias, tu cita ha sido registrada.");
  };

  return (
    <section id="formulario" className={`${layout.section}`}>
      <div className="w-full max-w-[680px] mx-auto bg-[#1a1a1a] p-8 rounded-2xl shadow-lg">
        <h2 className={`${styles.heading2} text-center mb-8`}>
          Agenda tu cita
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 font-poppins">
          {/* Nombre */}
          <div className="flex flex-col">
            <label className="text-white mb-2 text-sm">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej. Juan Pérez"
              required
              className="bg-[#2a2a2a] text-white p-4 rounded-xl outline-none placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col">
            <label className="text-white mb-2 text-sm">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ej. 55 1234 5678"
              required
              className="bg-[#2a2a2a] text-white p-4 rounded-xl outline-none placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Servicio */}
          <div className="flex flex-col">
            <label className="text-white mb-2 text-sm">Servicio</label>
            <select
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              required
              className="bg-[#2a2a2a] text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">Selecciona una opción</option>
              <option value="Rehabilitación Deportiva">
                Rehabilitación Deportiva
              </option>
              <option value="Terapia Manual">Terapia Manual</option>
              <option value="Ejercicios Terapéuticos">
                Ejercicios Terapéuticos
              </option>
              <option value="Masoterapia">Masoterapia</option>
            </select>
          </div>

          {/* Fechas disponibles */}
          <div className="flex flex-col">
            <label className="text-white mb-3 text-sm">Selecciona fecha</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {fechasDisponibles.map((fecha) => (
                <button
                  key={fecha}
                  type="button"
                  onClick={() => handleFechaSeleccionada(fecha)}
                  className={`p-3 rounded-lg border text-sm ${
                    formData.fecha === fecha
                      ? "bg-cyan-500 text-black border-cyan-400"
                      : "bg-[#2a2a2a] text-white border-[#333]"
                  } hover:border-cyan-400 transition`}
                >
                  {new Date(fecha).toLocaleDateString("es-MX", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </button>
              ))}
            </div>
          </div>

          {/* Horarios disponibles */}
          {formData.fecha && (
            <div className="flex flex-col mt-5">
              <label className="text-white mb-3 text-sm">
                Selecciona horario
              </label>
              <div className="flex flex-wrap gap-3">
                {disponibilidad[formData.fecha].map((hora) => (
                  <button
                    key={hora}
                    type="button"
                    onClick={() => handleHoraSeleccionada(hora)}
                    className={`py-2 px-4 rounded-lg text-sm ${
                      formData.hora === hora
                        ? "bg-cyan-500 text-black"
                        : "bg-[#2a2a2a] text-white hover:border-cyan-400"
                    }`}
                  >
                    {hora}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Comentarios */}
          <div className="flex flex-col">
            <label className="text-white mb-2 text-sm">Comentarios (opcional)</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              placeholder="¿Quieres contarme algo más?"
              className="bg-[#2a2a2a] text-white p-4 rounded-xl outline-none placeholder-gray-400 resize-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <button
            type="submit"
            disabled={!formData.fecha || !formData.hora}
            className="w-full bg-gradient-to-br from-[#9dedf0] via-[#5ce1e6] to-[#33bbcf] text-[#0f0f0f] font-semibold py-4 px-6 rounded-xl text-lg hover:shadow-lg transition duration-300 disabled:opacity-50"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
