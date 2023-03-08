import { keyframes } from '@chakra-ui/react';

const animateFromRight = keyframes`
  0% {
    transform: translateX(700px);
  }
  100% {
    transform: translateX(0);
  }
`;

const animateFromLeft = keyframes`
  0% {
    transform: translateX(-700px);
  }
  100% {
    transform: translateX(0);
  }
`;

const animateFromTop = keyframes`
  0% {
    transform: translateY(-700px);
  }
  100% {
    transform: translateY(0);
  }
`;

const animateFromBottom = keyframes`
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: translateY(0);
  }
`;

const animationTime = '2s';

export const animationFromTop = `${animateFromTop} ${animationTime} ease forwards`;
export const animationFromLeft = `${animateFromLeft} ${animationTime} ease forwards`;
export const animationFromRight = `${animateFromRight} ${animationTime} ease forwards`;
const animationFromBottom = `${animateFromBottom} ${animationTime} ease forwards`;
