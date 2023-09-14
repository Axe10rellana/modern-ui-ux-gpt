//styles
import "./whatGPT3.css";

//components
import { Feature } from "../../components/index";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="¿Qué es GPT-3?"
          text={`GPT-3, que significa "Generative Pre-trained Transformer" 3, es un modelo de lenguaje desarrollado por OpenAI. Es la tercera versión de la serie GPT y se basa en una arquitectura de red neuronal llamada Transformer. GPT-3 es conocido por su capacidad para generar texto coherente y de alta calidad en respuesta a una variedad de entradas de texto.`}
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Las oportunidades se extienden mucho más allá de lo que puedas
          concebir.
        </h1>
        <p>Explore la biblioteca</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Diseña chatbots conversacionales y servicios de atención al cliente más eficientes con la capacidad de comprender y responder de manera natural a las consultas de los usuarios."
        />
        <Feature
          title="Generación de Contenido:"
          text="Crea artículos, blogs, historias y más con la ayuda de GPT-3 para obtener textos envolventes y de alta calidad en cuestión de minutos."
        />
        <Feature
          title="Asistencia en Programación"
          text="Aprovecha el poder de GPT-3 para escribir código, solucionar problemas técnicos y mejorar tus habilidades de programación."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
