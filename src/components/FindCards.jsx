import PropTypes from 'prop-types';
import React from 'react';
import Cards from './Cards';

class FindCards extends React.Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      inputRare: '',
    };
  }

  filtro = () => {
    const { arrayCards } = this.props;
    const { inputName, inputRare, checked } = this.state;
    let arrayFiltro = arrayCards;

    if (checked) {
      arrayFiltro = arrayFiltro.filter((card) => card.cardTrunfo);
      return arrayFiltro;
    }

    if (inputRare === 'todas') return arrayFiltro;

    if (inputName !== '') {
      arrayFiltro = arrayCards.filter((card) => card.cardName.includes(inputName));
    }

    if (inputRare !== '') {
      arrayFiltro = arrayFiltro.filter((card) => card.cardRare === inputRare);
    }

    return arrayFiltro;
  }

  handle = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { removeCarta } = this.props;
    const arrayFiltro = this.filtro();

    return (
      <div className="filter-cards">
        <div className="filter-saved-container">
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Nome</span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              data-testid="name-filter"
              onChange={ this.handle }
              name="inputName"
            />
          </div>

          <select
            className="form-select"
            data-testid="rare-filter"
            name="inputRare"
            onChange={ this.handle }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>

          <div className="form-check form-switch">
            <label
              className="form-check-label"
              htmlFor="checkbox"
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox"
                name="checked"
                onChange={ this.handle }
              />
              <p>Super Trunfo</p>
            </label>
          </div>

        </div>
        <div className="cards-saved-container">
          {arrayFiltro.map((carta, i) => (
            <div key={ i } id={ i } className="cards-saved">
              <Cards card={ carta } key={ i } />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ removeCarta }
                className="btn btn-outline-primary"
              >
                Excluir
              </button>
            </div>))}
        </div>

      </div>

    );
  }
}

FindCards.propTypes = {
  arrayCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeCarta: PropTypes.func.isRequired,
};

export default FindCards;
