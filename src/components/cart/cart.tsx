import CartItem from "../cartItem/cartItem";
// styles
import { Wrapper } from "./cart.styles";
// types
import { CartItemType, CartProps } from "../../types/types";

export const Cart: React.FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calculateTotal = (items: CartItemType[]) => {
    return items.reduce((ack, item) => ack + item.price * item.quantity, 0);
  };
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};
