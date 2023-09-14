//styles
import "./header.css";

//assets
import people from "../../assets/images/people.png";
import ai from "../../assets/images/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Podemos crear algo realmente extraordinario utilizando GPT-3 de
          OpenAI.
        </h1>
        <p>
          ¿Alguna vez has soñado con tener a tu disposición una herramienta que
          amplíe los límites de la creatividad humana? GPT-3 de OpenAI es esa
          herramienta. Esta tecnología de procesamiento de lenguaje natural de
          vanguardia es capaz de entender y generar texto de una manera
          asombrosamente precisa y fluida.
        </p>
        <div className="gpt3__header-content__input">
          <input
            type="email"
            placeholder="Escribi tu correo"
            autoComplete="off"
            required
          />
          <button type="button">Empezar</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            En las últimas 24 horas, un total de 1,600 personas han solicitado
            acceder a una visita.
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
