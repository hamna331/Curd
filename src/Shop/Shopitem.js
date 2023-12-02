import React from 'react';
import { useParams } from 'react-router-dom';
import Sdata from '../Shop/list';

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
    <div className="bg-dark py-5">
      <div className="container bg-light rounded">
        <div className="row pt-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{currentItem.title}</h5>
                <p className="card-text">Description: {currentItem.description}</p>
                <p className="card-text">Price: ${currentItem.price}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <img src={currentItem.imgsrc} className="rounded image-hover-border" alt={currentItem.title} />
            </div>
          </div>
        </div>

        <h2 className="text-center pt-5 pb-3">You May Also Like</h2>
        <div className="row">
          {relatedItems.map((product, index) => (
            <div key={index} className="col-6 col-md-3 col-lg-3 mb-4">
              <div className="card">
                <img src={product.imgsrc} className="rounded image-hover-border" style={{ height: "250px" }} alt="..." />
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
  );
}

export default ShopItem;
