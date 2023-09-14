//styles
import "./features.css";

//components
import { Feature } from "../../components/index";

const featuresData = [
  {
    title: "Generación de texto coherente",
    text: "GPT-3 puede generar texto coherente y de alta calidad en una variedad de estilos y tonos, lo que lo hace útil para tareas de generación de texto como redacción de contenido, traducción automática, resumen de texto, entre otros.",
  },
  {
    title: "Respuestas a preguntas",
    text: "Puede responder preguntas en lenguaje natural utilizando la información proporcionada en un contexto. Esto lo hace adecuado para sistemas de preguntas y respuestas.",
  },
  {
    title: "Traducción de idiomas",
    text: "GPT-3 puede traducir texto de un idioma a otro, lo que lo convierte en una herramienta útil para la traducción automática.",
  },
  {
    title: "Conversaciones naturales",
    text: "Puede mantener conversaciones en lenguaje natural, lo que lo hace útil para chatbots, asistentes virtuales y sistemas de atención al cliente.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          El futuro está a tu alcance, ¡actúa hoy mismo para hacerlo realidad!
          Da un paso hacia adelante y construye el mañana que deseas.
        </h1>
        <p>Solicite acceso anticipado para comenzar</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            key={item.title + index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
