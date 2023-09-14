//styles
import "./blog.css";

//components
import { Article } from "../../components/index";

//images
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Actualmente, estamos presenciando una serie de eventos significativos
          que nos han llevado a crear un artículo en nuestro blog para
          compartirlos.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 05, 2023"
            title="La Evolución de Internet desde sus Orígenes a la Era Actual"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Ago 25, 2023"
            title="El Auge de la Inteligencia Artificial: Avances, Desafíos y Oportunidades"
          />
          <Article
            imgUrl={blog03}
            date="Jul 23, 2023"
            title="Estrategias de Seguridad Informática para Mantener tu Información a Salvo"
          />
          <Article
            imgUrl={blog04}
            date="Jun 13, 2021"
            title="Desvelando los Secretos de la Computación Cuántica: Avances y Desafíos"
          />
          <Article
            imgUrl={blog05}
            date="May 09, 2023"
            title="Cómo Proteger tu Privacidad y Evitar Estafas en Línea"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
