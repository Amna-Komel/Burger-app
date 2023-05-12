import React, { useState } from 'react';
import './Body.css';

function Body() {
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState(0);

  const [count, setCount] = useState({
    Lettuce: 0,
    Bacon: 0,
    Meat: 0,
    Cheese: 0,
  });

  const ingredientsList = [
    { name: 'Lettuce', class: 'Lattuce', price: 10 },
    { name: 'Bacon', class: 'Bacon', price: 20 },
    { name: 'Meat', class: 'Meat', price: 30 },
    { name: 'Cheese', class: 'Cheese', price: 40 },
  ];

  const handleMorePrice = (ingredientName) => {
    const ingredient = ingredientsList.find((item) => item.name === ingredientName);
    setIngredients(prevIngredients => [...prevIngredients, ingredient]);
    setPrice(price + ingredient.price);
    setCount(prevCount => ({ ...prevCount, [ingredientName]: prevCount[ingredientName] + 1 }));
  };

  const handleLessPrice = (ingredientName) => {
    const lastIngredient = ingredients.find((item) => item.name === ingredientName);
    setIngredients(ingredients.filter((ing) => ing !== lastIngredient));
    setPrice(price - lastIngredient.price);
    setCount(prevCount => ({ ...prevCount, [ingredientName]: prevCount[ingredientName] - 1 }));
  };

  const divElements = ingredients.map((ingredient, index) => (
    <div key={index} className={ingredient.class}>
      {ingredient.class}
    </div>
  ));

  return (
    <div className='all'>
      <div className='upper'></div>
      <div className='ingredients'>{!ingredients ? 'No Ingredients Added': divElements}</div>
      <div className='lower'></div>
      <div className='footer'>
        <div className='price'>
          Current Price: {price}$
          <br />
        </div>
        <div className='border_box'>
          {ingredientsList.map((ingredient) => (
            <div key={ingredient.name}>
              {ingredient.name}:
              {count[ingredient.name] === 0 ? (
                <button className='less-disabled' disabled>
                  Less
                </button>
              ) : (
                <button className='less' onClick={() => handleLessPrice(ingredient.name)}>
                  Less
                </button>
              )}
              <button className='more' onClick={() => handleMorePrice(ingredient.name)}>
                More
              </button>
              <br />
            </div>
          ))}
          <button className='order' >   Order Now     </button>
        </div>
      </div>
    </div> 
  );
 }
export default Body;
