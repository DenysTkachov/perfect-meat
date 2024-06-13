import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReturnedProduct } from '../../redux/products/productsSlice';

function ButcherPage() {
  const [productType, setProductType] = useState('');
  const [meat, setMeat] = useState('');
  const [bones, setBones] = useState('');
  const [skins, setSkins] = useState('');
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.id);

  const handleAddProduct = () => {
    dispatch(addReturnedProduct({
      userId,
      product: {
        productType,
        meat: Number(meat),
        bones: Number(bones),
        skins: Number(skins),
      },
    }));
    setProductType('');
    setMeat('');
    setBones('');
    setSkins('');
  };

  return (
    <div>
      <h1>Butcher Page</h1>
      <select value={productType} onChange={(e) => setProductType(e.target.value)}>
        <option value="">Select Product</option>
        <option value="chicken">Chicken</option>
        <option value="duck">Duck</option>
        <option value="turkey">Turkey</option>
      </select>
      <input
        type="number"
        value={meat}
        onChange={(e) => setMeat(e.target.value)}
        placeholder="Meat (kg)"
      />
      <input
        type="number"
        value={bones}
        onChange={(e) => setBones(e.target.value)}
        placeholder="Bones (kg)"
      />
      <input
        type="number"
        value={skins}
        onChange={(e) => setSkins(e.target.value)}
        placeholder="Skins (kg)"
      />
      <button onClick={handleAddProduct}>Add Returned Product</button>
    </div>
  );
}

export default ButcherPage;