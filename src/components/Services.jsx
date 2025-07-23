import styles, { layout } from "../style";
import Button from "./Button";

const Services = () => (
  <section id="services" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Servicios pensados <br className="sm:block hidden" />
        para tu bienestar físico.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        Te ofrezco atención personalizada en diferentes áreas de la
        fisioterapia. Cada tratamiento está enfocado en mejorar tu movilidad,
        aliviar el dolor y ayudarte a sentirte mejor día a día.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <div className="flex flex-col items-start bg-[#1f1f1f] p-6 rounded-xl shadow-md w-full max-w-md">
        <h3 className="font-poppins font-semibold text-white text-[22px] leading-[30px] mb-4">
          Áreas de atención
        </h3>
        <ul className="list-disc list-inside text-dimWhite space-y-2">
          <li>Rehabilitación deportiva y post-quirúrgica</li>
          <li>Terapia manual y movilización</li>
          <li>Ejercicios terapéuticos guiados</li>
          <li>Masoterapia y relajación muscular</li>
        </ul>
      </div>

      <div className="mt-8 self-start">
        <Button styles={`mt-10`} text="Agenda tu cita" />
      </div>
    </div>
  </section>
);

export default Services;
