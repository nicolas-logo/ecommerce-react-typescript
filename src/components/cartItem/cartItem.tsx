import { Button } from "@material-ui/core";
// types
import { CartItemType, CartItemProps } from "../../types/types";
// styles
import { Wrapper } from "./cartItem.styles";

const CartItem: React.FC<CartItemProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          {" "}
          -{" "}
        </Button>
        <p>{item.quantity}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          {" "}
          +{" "}
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;
