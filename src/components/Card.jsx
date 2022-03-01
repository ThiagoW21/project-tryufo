/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    this.state = { ...this.props };

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card-container">
        <div className="card-border">
          <div className="card">
            <div className="card-name-image-container">
              <div className="card-name">
                <h1 id="card-name" data-testid="name-card">{cardName}</h1>
              </div>
              <img
                src={ cardImage === '' ? 'https://king.host/blog/wp-content/uploads/2021/05/javascript-para-iniciantes-1-1280x720.png' : cardImage }
                alt={ cardName }
                data-testid="image-card"
              />
            </div>

            <p className="desc" data-testid="description-card">{cardDescription}</p>

            <div className="cards-attr">
              <div className="card-attr">
                <label htmlFor="attr1-card">
                  <span>Attr01..................................................</span>
                  <p
                    className="card-value"
                    id="attr1-card"
                    data-testid="attr1-card"
                  >
                    {cardAttr1}

                  </p>
                </label>
              </div>
              <div className="card-attr">
                <label htmlFor="attr2-card">
                  <span>Attr02..................................................</span>
                  <p
                    className="card-value"
                    id="attr2-card"
                    data-testid="attr2-card"
                  >
                    {cardAttr2}

                  </p>
                </label>
              </div>
              <div className="card-attr">
                <label htmlFor="attr3-card">
                  <span>Attr03..................................................</span>
                  <p
                    className="card-value"
                    id="attr3-card"
                    data-testid="attr3-card"
                  >
                    {cardAttr3}

                  </p>
                </label>
              </div>
            </div>

            <div className="card-espec">
              { cardRare !== '' ? <p data-testid="rare-card">{ cardRare }</p> : ''}

              {cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
