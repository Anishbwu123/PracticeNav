import React, { useState } from 'react';
import { View } from 'react-native';
import Home from './Home'; // The Home component where you display the cart icon 
import Dineout from '../Routes/FoodScreen/Dineout';// The component with the add to cart button

const ParentComponent = () => {
  // Cart count state and handler are managed here
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Pass cartCount and handleAddToCart as props to both components */}
      <Home cartCount={cartCount} />
      <Dineout handleAddToCart={handleAddToCart} />
    </View>
  );
};

export default ParentComponent;
