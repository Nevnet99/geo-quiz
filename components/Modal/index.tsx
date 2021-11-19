import React, { FC } from 'react';
import {
  Wrapper,
  Title,
  SubTitle,
  InnerModalWrapper,
  Header,
  Content,
  Answers,
  AnswerWrapper,
} from './Modal.styled.js';

import { Props } from './types';

const Modal: FC<Props> = ({ title, question, image, answers }: Props) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      {image && <img src={image?.src} alt="" />}
    </Header>
    <InnerModalWrapper>
      <SubTitle>{question}</SubTitle>

      <Content>Example Content</Content>

      {answers && (
        <Answers>
          {answers.map(({ text }, index) => (
            <AnswerWrapper key={index}>
              <p>{text}</p>
            </AnswerWrapper>
          ))}
        </Answers>
      )}
    </InnerModalWrapper>
  </Wrapper>
);

export default Modal;
