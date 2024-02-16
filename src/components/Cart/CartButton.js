import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/UI-Slice';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const Quantity = useSelector((state) => state.cart.totalQuantity)
  const toggleCart =()=>{
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{Quantity}</span>
    </button>
  );
};

export default CartButton;
