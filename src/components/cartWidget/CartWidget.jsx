/*const CartWidget = () => {
  return <div>CartWidget</div>;
};

export default CartWidget;

const CartWidget = ({ itemCount }) => {
  return <button>CartWidget: {itemCount}</button>;
};

export default CartWidget; */

import PropTypes from 'prop-types';

const CartWidget = ({ itemCount }) => {
  return <button>CartWidget: {itemCount}</button>;
};

// Validación de props con PropTypes
CartWidget.propTypes = {
  itemCount: PropTypes.number.isRequired, // itemCount es obligatorio y debe ser un número
};

export default CartWidget;
