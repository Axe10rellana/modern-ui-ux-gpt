//styles
import "./possibility.css";

//assets
import possibilityImage from "../../assets/images/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="Possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Solicite acceso anticipado para comenzar</h4>
        <h1 className="gradient__text">
          Las oportunidades se extienden mucho más allá de lo que puedas
          concebir.
        </h1>
        <p>
          Si estás ansioso por explorar las capacidades revolucionarias de GPT-3
          antes que nadie, te invitamos a solicitar acceso anticipado. Únete a
          nosotros y comienza a experimentar un futuro donde la creatividad y la
          innovación están al alcance de tus manos. ¿Estás listo para desatar el
          potencial sin límites de GPT-3? ¡Solicita tu acceso anticipado y sé
          parte de la revolución ahora mismo!
        </p>
        <h4>Solicite acceso anticipado para comenzar</h4>
      </div>
    </div>
  );
};

export default Possibility;
