import React from "react";
import "../styles/normativa.css";

const Normativa = () => {
  return (
    <div className="normativa-container">
      <h2>Normativa del Evento</h2>
      <div className="contenido-normativa">
        <div className="norma">
          <h3>1. Requisitos de Participación</h3>
          <p>Todos los participantes deben seguir la normativa de la federación española de ciclismo.</p>
          <p>La bicicleta debe estar en perfecto estado de funcionamiento. Los participantes deberán realizar una revisión de seguridad de la bicicleta antes de la carrera (cadena engrasada, cambios y frenos en perfecto funcionamiento, neumáticos en buen estado, etc.).</p>
          <p>El uso de casco es obligatorio.</p>
          <p>El dorsal debe ir en la zona baja espalda del competidor.</p>
        </div>

        <div className="norma">
          <h3>2. Ayuda y Regulaciones de Competencia</h3>
          <p>Los participantes no pueden aceptar ayuda de cualquier persona que sea ajena a la organización de la carrera. Todo personal del equipo organizativo llevará una camiseta del equipo organizativo la cual ponga “ORGANIZACIÓN” y una tarjeta de organizador.</p>
          <p>Se debe seguir tanto el balizamiento en la entrada de las ciudades como el GPS cuando los participantes vayan por carreteras.</p>
        </div>

        <div className="norma">
          <h3>3. Edad y Conocimiento de Reglas de Tráfico</h3>
          <p>Los participantes deben ser mayores de 18 años antes de que comience el evento.</p>
          <p>Todos los participantes deben tener conocimiento sobre el reglamento general de circulación aunque no dispongan de permiso de conducción, ya que la carrera puede compartir carretera con vehículos y hay que respetarlos.</p>
        </div>

        <div className="norma">
          <h3>4. Reglas de Equipos</h3>
          <p>Los integrantes del equipo deben ir juntos, con una separación máxima de dos minutos entre integrantes del equipo. Si no se cumple esto, ese equipo será descalificado.</p>
        </div>

        <div className="norma">
          <h3>5. Velocidad y Vehículos de Apoyo</h3>
          <p>Todo participante debe circular a un mínimo de 10 km/h, nunca superando al coche guía ni al coche escoba.</p>
        </div>

        <div className="norma">
          <h3>6. Emergencias</h3>
          <p>En caso de emergencias, contactar con el número de emergencias en el evento: <strong>648 95 06 60</strong>.</p>
        </div>

        <div className="norma">
          <h3>7. Atención Médica</h3>
          <p>En caso de necesitar atención médica o en general, el participante se colocará a un lado del pelotón y se dejará rebasar por todo el pelotón hasta el final, donde se colocará en el arcén y será atendido por el equipo organizador en el coche de cierre del pelotón. De ser necesario, llamará al número de asistencia en evento: <strong>648 95 06 60</strong>.</p>
        </div>

        <div className="norma">
          <h3>8. Manejo de Desperdicios</h3>
          <p>Cualquier desperdicio de geles de hidratación, botellas, etc., durante la carrera podrá ser tirado en puntos específicos de cada etapa, los cuales estarán señalizados a lo largo de cada trayecto, tanto al inicio como al final de estos puntos. Todo desperdicio que no sea depositado en estas zonas conllevará la inmediata descalificación junto con su correspondiente sanción por parte de las autoridades competentes.</p>
        </div>

        <div className="norma">
          <h3>9. Recinto Final y Comienzo de Etapas</h3>
          <p>El último punto también se aplica en el recinto del final y comienzo de cada etapa, donde también habrá contenedores y basuras para poder deshacerse del desperdicio.</p>
        </div>
      </div>
    </div>
  );
};

export default Normativa;
