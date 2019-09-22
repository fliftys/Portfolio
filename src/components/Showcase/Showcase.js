import styled from 'styled-components';

const Showcase = styled.div`
  background: #191a1d;
  height: 90vh;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);

  @media(max-width: 710px){
    clip-path: none;
  }
  @media(max-height: 670px){
    height: 100vh;
  }
  @media(max-height: 570px){
    height: 120vh;
  }
`;

export default Showcase;