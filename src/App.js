import React from 'react';
import './App.css';
import Card from './components/Card';
import FindCards from './components/FindCards';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      cards: [],
      hasTrunfo: '',
    };
  }

  handle = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  validaDisable = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const card1 = parseInt(cardAttr1, 10);
    const card2 = parseInt(cardAttr2, 10);
    const card3 = parseInt(cardAttr3, 10);

    const attrMax = 90;
    const validaMaxMin = 3;
    const maxSomaAttr = 210;

    const attr1 = card1 >= 0 && card1 <= attrMax;
    const attr2 = card2 >= 0 && card2 <= attrMax;
    const attr3 = card3 >= 0 && card3 <= attrMax;
    const somaAttr = card1 + card2 + card3;

    const validaAttr = attr1 + attr2 + attr3 === validaMaxMin && somaAttr <= maxSomaAttr;

    const validaMax = 4;
    const name = cardName !== '';
    const description = cardDescription !== '';
    const image = cardImage !== '';
    const rare = cardRare !== '';
    const validador = name + description + image + rare !== validaMax;

    if (validador === false && validaAttr === true) return false;
    return true;
  }

  resetaEstado = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
    });
  }

  salvaCarta = () => {
    const { cardTrunfo } = this.state;
    const cardNovo = this.state;
    const hasTrunfoState = { hasTrunfo: true };
    if (cardTrunfo === true) this.setState(hasTrunfoState);
    this.setState(({ cards }) => ({
      cards: [...cards, cardNovo],
    }));
    this.resetaEstado();
  }

  removeCarta = ({ target }) => {
    const id = parseInt(target.parentNode.id, 10);
    const { cards, hasTrunfo } = this.state;
    this.setState({ cards });
    if (hasTrunfo === true) this.setState({ hasTrunfo: false });
    cards.splice(id, 1);
  }

  carta = (arrayCartas) => (
    <Card
      cardName={ arrayCartas.cardName }
      cardDescription={ arrayCartas.cardDescription }
      cardAttr1={ arrayCartas.cardAttr1 }
      cardAttr2={ arrayCartas.cardAttr2 }
      cardAttr3={ arrayCartas.cardAttr3 }
      cardImage={ arrayCartas.cardImage }
      cardRare={ arrayCartas.cardRare }
      cardTrunfo={ arrayCartas.cardTrunfo }
    />)

  render() {
    const { cards, hasTrunfo } = this.state;

    return (
      <div>
        <div className="nova-carta-container">
          <div className="form-container">
            <h4>Adicionar nova carta</h4>
            <Form
              { ...this.state }
              onInputChange={ this.handle }
              isSaveButtonDisabled={ this.validaDisable() }
              onSaveButtonClick={ this.salvaCarta }
              hasTrunfo={ hasTrunfo }
            />
          </div>
          <div className="card-container">
            <h5>Pré-visualização</h5>
            { this.carta({ ...this.state })}
          </div>
        </div>
        <FindCards
          arrayCards={ cards }
          removeCarta={ this.removeCarta }
        />
      </div>
    );
  }
}

export default App;
