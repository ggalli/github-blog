import styled, { keyframes } from 'styled-components'

const wave = keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`

export const Skeleton = styled.div`
  width: 100%;
  height: 1rem;
  background-color: ${({ theme }) => theme['primary-500']};
  border-radius: 6px;
  position: relative;
  overflow: hidden;

  &::after {
    animation: ${wave} 2s linear 0.5s infinite;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme['primary-400']},
      transparent
    );
    opacity: 0.2;
    content: '';
    position: absolute;
    transform: translateX(-100%);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
`
