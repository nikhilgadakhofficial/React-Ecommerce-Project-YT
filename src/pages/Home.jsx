import React, { useContext } from 'react'
import styled from 'styled-components'
import { useProductContext } from '../context/productcontex';
import FeaturProducts from '../compontes/FeaturProducts';

function Home() {

const {name} = useProductContext()
  return <Wrapper>
  <FeaturProducts/>
  </Wrapper>
}

const Wrapper = styled.section`
height : 100vh;
`;

export default Home