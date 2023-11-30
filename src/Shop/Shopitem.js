import React from 'react';
import { useParams } from 'react-router-dom';
import Sdata from '../Shop/Shoplist';

function ShopItem() {
  const { Id } = useParams();
  const currentItem = Sdata.find((val) => val.id === parseInt(Id));

  if (!currentItem) {
    return <div>Item not found</div>;
  }

  const relatedItems = Sdata.filter(
    (item) =>
      item.category === currentItem.category && item.id !== currentItem.id
  );

  return (
    <div className="row">
      {/* Main Item */}
      <div className="col-lg-6">
        <div className="card">
          <img src={currentItem.imgsrc} className="card-img-top" alt={currentItem.title} />
          <div className="card-body">
            <h5 className="card-title">{currentItem.title}</h5>
            <p className="card-text">Description: {currentItem.description}</p>
            <p className="card-text">Price: ${currentItem.price}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      </div>

      <div className="container-fluid box h-100">
        <div className="container py-5">
          <h2 className="text-center text-dark">You May Also Like</h2>
          <div className="row mt-44">
            {relatedItems.map((product, index) => (
              <div key={index} className="col-6 col-md-3 col-lg-3 mb-4">
                <div className="card">
                  <img src={product.imgsrc} className="card-img-top" style={{height: "250px"}} alt="..." />
                  <div className="card-body">
                    <p className="card-title">{product.title}</p>
                    <p className="card-price">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
