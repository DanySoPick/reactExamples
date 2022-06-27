import './App.css';
import { useReducer } from 'react';

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  },
  {
    emoji: '🍌',
    name: 'banana',
    price: 4
  }
];

function App() {

  function cartReducer(state, action) {
    switch (action.type) {
      case 'add':
        return [...state, action.name];
      case 'remove':
        const productIndex = state.indexOf(action.name)
        if (productIndex < 0) {
          return state;
        }
        const update = [...state]
        update.splice(update.indexOf(action.name), 1);
        return update;
      default:
        return state;
    }
  }

  const [cart, setCart] = useReducer(cartReducer, []);

  function add(product) {
    const { name } = product;
    setCart({name, type: 'add'});
  }

  function remove(product) {
    const { name } = product;
    setCart({name, type: 'remove'});
  }


  function getTotal(cart) {
    return cart.length === 0 ? 0 :
      cart.map(name => products.find(product => product.name === name).price).reduce((total, itemPrice) => total + itemPrice);
  }

  return (
    <div className="wrapper">
      <div> Shopping Cart: {cart.length} total items  </div>
      <div> Total: {getTotal(cart)} EUR</div>
      <div>
        {products.map(product => (
          <div key={product.name}>
            <div className="product">
              <span role="img" aria-label={product.name}>{product.emoji}</span>
            </div>
            <button onClick={() => add(product)}>Add</button>{" "}
            <button onClick={() => remove(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;