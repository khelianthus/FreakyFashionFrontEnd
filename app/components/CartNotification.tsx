import React from 'react';

interface CartNotificationProps {
    cartQuantity: number;
  }

  const CartNotification: React.FC<CartNotificationProps> = ({ cartQuantity }) => {
  return (
    <span className="basket-notification ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
      {cartQuantity}
    </span>
  );
};

export default CartNotification;