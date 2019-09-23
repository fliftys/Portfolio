import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <span className="loader"><span className="loader-inner"></span></span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: #191a1d;
  background: #121316;
  overflow: hidden;
  animation: loadingToBottom 4s forwards;
  animation-delay: 2.5s;


  .loader {
  display: block;
  position: relative;
  top: 45%;
  left: 45%;
  transform: translate(0, 3rem);
  width: 40px;
  height: 40px;
  border: 4px solid rgba(232,17,35, 1);
  animation: loader 2s infinite ease;
  box-shadow: 0px 0px 50px 10px rgba(232,17,35,1);
}

.loader-inner {
  display: inline-block;
  width: 100%;
  background-color: rgba(232,17,35, 1);
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
}

@keyframes loadingToBottom{
  0%{
    transform: translateY(0);
  }

  50%{
    transform: translateY(3000px);
  }
  100%{
    height: 0;
    transform: translateY(3000px);
  }

}

`;

export default Loading;

