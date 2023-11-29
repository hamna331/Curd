import React from 'react';
import { useParams } from 'react-router-dom';
import Sdata from '../Shop/Shoplist';

function ShopItem() {
  const { Id } = useParams();
  const item = Sdata.find((val) => val.id === parseInt(Id));

  if (!item) {
    // Handle case where item is not found
    return <div>Item not found</div>;
  }

  return (
    <>
      <h2>Shop Item</h2>
      <h2>{item.title}</h2>
      {/* Display other details as needed */}
    </>
  );
}

export default ShopItem;
