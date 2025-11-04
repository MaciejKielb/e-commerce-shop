import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) {
    return <div className='checkout-page'>Your cart is empty</div>;
  }

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Total: ${cartTotal.toFixed(2)}</span>
    </div>
  );
};

export default Checkout;
