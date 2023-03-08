import Image from 'next/image'
import styled from "styled-components";
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'
import TextField from "@mui/material/TextField";

export const AssetsStyle = {
  logo: styled(Image)`
    width: 56px;
  `,
  section: styled.section`
    padding: 36px 25vw;
    @media screen and (max-width: 1200px){
      padding: 36px 96px;
    };
    @media screen and (max-width: 800px){
      padding: 36px 20px;
    };
  `,
  info: styled.p`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `,
  faqIcon: styled(AiOutlineQuestionCircle)`
    color: var(--violet-color);
  `,
  deleteIcon: styled(HiOutlineTrash)<any>`
    color: var(--red-color-2);
    margin-left: 30%;
    cursor: pointer;
    @media screen and (max-width: 800px){
      margin-left: 20px;
    };
    ${props => `
        ${props.desktop && `
          @media screen and (max-width: 800px){
            display: none;
          };
        `};
    `};
  `,
  text: styled(TextField)`
    color: var(--violet-color);
  `,
  progressBar: styled.progress`
    border-radius: 8px;
    height: 24px;
    border: none;
    overflow: hidden;
    flex: 1;
    @media screen and (max-width: 800px){
      width: 80%;
      margin-right: 10px;
    };
    outline: none;
    color: var(--green-color-2);
    background-color: red;
    &::-webkit-progress-value {
      background-color: var(--green-color-2);
      transition: width 0.5s ease-in-out;
    };
    &::-webkit-progress-bar {
      background-color: var(--grey-color-3);
      transition: width 0.5s ease-in-out;
    }
  `,
}