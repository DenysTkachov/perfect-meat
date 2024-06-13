import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIssuedProduct, addReturnedProduct } from '../../redux/products/productsSlice';

function WeigherPage() {
  const [product, setProduct] = useState('');
  const [actionType, setActionType] = useState('issued');
  const [butcherId, setButcherId] = useState('');
  const dispatch = useDispatch();
  const butchers = useSelector((state) => state.auth.users.filter(user => user.role === 'butcher'));

  const handleAddProduct = () => {
    const action = actionType === 'issued' ? addIssuedProduct : addReturnedProduct;
    dispatch(action({ userId: butcherId, product }));
    setProduct('');
  };

  return (
    <div>
      <h1>Weigher Page</h1>
      <select value={butcherId} onChange={(e) => setButcherId(e.target.value)}>
        {butchers.map((butcher) => (
          <option key={butcher.id} value={butcher.id}>{butcher.name}</option>
        ))}
      </select>
      <input
        type="text"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Product"
      />
      <select value={actionType} onChange={(e) => setActionType(e.target.value)}>
        <option value="issued">Issued</option>
        <option value="returned">Returned</option>
      </select>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default WeigherPage;