import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  border: #000 solid 1px;
  width: 100%;
  max-width: 960px;
  height: 20vh;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  border: #00f solid 1px;
  max-width: 960px;
  width: 100%;
  height: 80vh;
`;

export const Footer = styled.div`
  background: #000;
  max-width: 960px;
  width: 100%;
  height: 40vh;
  max-height: 160px;
`;
