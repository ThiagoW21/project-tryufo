import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Cards extends React.Component {
  carta = (arrayCartas, key) => (
    <div className="card-list">
      <Card
        cardName={ arrayCartas.cardName }
        cardDescription={ arrayCartas.cardDescription }
        cardAttr1={ arrayCartas.cardAttr1 }
        cardAttr2={ arrayCartas.cardAttr2 }
        cardAttr3={ arrayCartas.cardAttr3 }
        cardImage={ arrayCartas.cardImage }
        cardRare={ arrayCartas.cardRare }
        cardTrunfo={ arrayCartas.cardTrunfo }
        preview
        key={ key }
      />
    </div>)

  render() {
    const { card, key } = this.props;
    return (<div>{this.carta(card, key)}</div>);
  }
}

Cards.propTypes = {
  card: PropTypes.arrayOf(PropTypes.object).isRequired,
  key: PropTypes.bool.isRequired,
};

export default Cards;
