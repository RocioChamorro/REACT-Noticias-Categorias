import React, { Component } from "react";
import PropTypes from "prop-types";
class Formulario extends Component {
  state = {
    categoria: "general"
  };
  cambioCategoria = e => {
    this.setState(
      {
        //como segundo parámetro se le puede pasar un colback para qu actualice de INMEDIATO
        categoria: e.target.value
      },
      () => {
        this.props.consultarNoticia(this.state.categoria);
      }
    );
    //pasarlo a la pagina principal, actualizar el state de APP
  };
  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Encuentra Noticias por Categorías</h2>
            <div className="input-field col s12 m8 offset-m2">
              <select onChange={this.cambioCategoria}>
                <option value="general">General</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencias</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnología</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Formulario.propTypes = {
    consultarNoticia : PropTypes.func.isRequired
}

export default Formulario;
