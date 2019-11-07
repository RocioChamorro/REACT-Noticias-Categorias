import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticia from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {
    noticias: []
  };
  /*es recomendable que el llamado de una API se haga en el sgte. método del cilo de vida*/
  componentDidMount() {
    this.consultarNoticia();
  }
  consultarNoticia = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=72e33197eaf24cc4bedf23c11fb45553`;

    const respuesta = await fetch(url); //retorna una promesa, la promesa es asignada a "respuesta", con await le decimos q js se detenga hasta en cuando encuentre await hasta q resuelva esta promesa, le decimos q se detenga y no continue hasta q se resueva, es decir hasta q nos dé el resultado.
    const noticias = await respuesta.json();
    console.log(noticias);
    this.setState({
      noticias: noticias.articles
    });
  };
  render() {
    return (
      <Fragment>
        <Header 
          titulo='Noticias REACT API'
        />
        <Formulario
          consultarNoticia={this.consultarNoticia}
        />
        <div className="container white contenedor-noticias">
          <ListaNoticia
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
