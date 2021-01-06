import React from 'react';
import { useSelector } from "react-redux";
import Cart from './Cart';
import styled from 'styled-components'

const InfoCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Carts = () => {
  const state = useSelector(state => state.cities);

  return ( 
    <InfoCart>
      {state.map( city => (
          <Cart
            key={city.id}
            name={city.name}
            sys={city.sys}
            weather={city.weather}
            main={city.main}
          />
      ))}
    </InfoCart>
   );
}
 
export default Carts;