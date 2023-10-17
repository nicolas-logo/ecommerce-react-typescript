import Button from "@material-ui/core/Button";
// types
import { ItemProps } from "../../types/types";
// styles
import { Wrapper } from "./item.styles";

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title}></img>
    <div>
      <h3>{item.title}</h3>
      <p>{item.description.slice(0, 200) + " ..."}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
