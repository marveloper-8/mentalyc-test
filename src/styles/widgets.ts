import styled from "styled-components";
// resources
import { AiOutlineClose } from 'react-icons/ai';

export const ButtonStyle = {
  wrapper: styled.button<any>`
    ${props => `
      border-radius: 8px;
      background: var(${props.invalid ? '--grey-color-3' : '--gradient-violet-color'});
      text-align: center;
      padding: 8px 16px;
      border: 0;
      outline: none;
      display: block;
      color: var(--white-color);
      ${props.short ? 'margin: auto' : 'width: 100%'};
      ${!props.invalid && 'cursor: pointer'};
      ${props.alt && 'margin-top: 30px'};
    `};
  `,
};

export const ModalStyle = {
  wrapper: styled.section`
    padding: 32px 72px 16px 72px;
    align-self: center;
    font-family: Montserrat;
    text-align: center;
    @media screen and (max-width: 800px){
      padding: 32px 20px 16px 20px;
    };
  `,
  close: styled(AiOutlineClose)`
    float: right;
    cursor: pointer;
  `,
  title: styled.h3`
    margin-top: 20px;
  `,
  subtitle: styled.p`
    color: var(--grey-color);
    margin: 10px 0;
  `,
};