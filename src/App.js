import React, { Component } from "react";
import Search from "./components/Search";
import Result from "../src/components/Result";
class App extends Component {
  state = {
    data: "",
    img: [],
    page: "",
  };

  scroll = () => {
    const element = document.querySelector(".jumbotron");
    element.scrollIntoView("smooth", "start");
  };
  previousPage = () => {
    // Leer state de la pagina actual
    //Restar uno a la pagina actual
    //Agregar cambio al state
    //Si la pagina es 1, ya no ir hacia atras
    let page = this.state.page;
    if (page === 1) return null;
    page -= 1;
    console.log(page);
    this.setState({ page }, () => {
      this.searchApi();
    });
  };
  nextPage = () => {
    // Leer state de la pagina actual
    //Sumar uno a la pagina actual
    //Agregar cambio al state
    let page = this.state.page;
    page += 1;
    this.setState({ page }, () => {
      this.searchApi();
      this.scroll();
    });
  };
  searchApi = () => {
    const filter = this.state.data;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=30363421-0d5ecb064f916bf0fd22c6526&q=${filter}&per_page=30&page=${page}`;
    // console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ img: data.hits }));
  };

  dataSearch = (data) => {
    this.setState(
      {
        data: data,
        page: 1,
      },
      () => {
        this.searchApi();
        this.scroll();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Search dataSearch={this.dataSearch} />
        </div>
        <div className="row justify-content-center">
          <Result
            img={this.state.img}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
