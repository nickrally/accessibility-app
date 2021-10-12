import Backdrop from "./Backdrop";
import Modal from "./Modal";
import "./ShoppingCart.scss";

const ShoppingCart = ({ confirm, cancel }) => {
  return (
    <>
      <Backdrop />
      <Modal>
        <ul>
          <li>cheap shit</li>
          <li>more cheap shit</li>
          <li>random shit</li>
        </ul>
        <p>Are you sure you want this buy this?</p>
        <button onClick={confirm}>Yes</button>
        <button onClick={cancel}>No</button>
      </Modal>
    </>
  );
};

export default ShoppingCart;
