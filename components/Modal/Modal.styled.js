import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 465px;
`;

export const InnerModalWrapper = styled.div`
  display: inline-block;
  background-color: white;
  border-radius: 24px;
  padding: 68px 32px;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  img {
    position: absolute;
    right: 0;
    bottom: -50px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  margin-top: 0;
  color: white;
`;

export const SubTitle = styled.h2`
  margin: 0;
  margin-bottom: 32px;
  color: #2f527b;
`;

export const Content = styled.div``;

export const Answers = styled.ul``;

export const AnswerWrapper = styled.li``;
