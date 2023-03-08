import styled from "styled-components";

export const NavigationStyle = {
  wrapper: styled.nav`
    padding: 24px 25vw;
    border-bottom: 2px solid var(--violet-color);
    @media screen and (max-width: 1200px){
      padding: 24px 96px;
    };
    @media screen and (max-width: 800px){
      padding: 24px 20px;
      text-align: center;
    };
  `,
};

export const CardStyle = {
  wrapper: styled.div`
    padding: 8px 35px;
    display: flex;
    align-items: center;
    border: 1px solid var(--grey-color-4);
    border-radius: 16px;
    @media screen and (max-width: 800px){
      padding: 8px 15px;
    };
  `,
  count: styled.span`
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background-color: var(--violet-color-2);
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 8px;
    color: var(--white-color);
  `,
  details: styled.div`
    text-align: left;
    margin-top: 20px;
    width: 70vw;
    &::last-child{
      margin-bottom: 30px;
    };
  `,
  detailsTitle: styled.h4`
    margin-bottom: 5px;
  `,
};

export const TableStyle = {
  wrapper: styled.table`
    width: 100%;
  `,
  tr: styled.tr<any>`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    ${props => `
      ${props.alt ? `
        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 12px 40px;
        margin-bottom: 5px;
        @media screen and (max-width: 800px){
          padding: 8px 15px;
        };
      ` : `
        padding: 20px 0;
      `};
    `};
  `,
  th: styled.th<any>`
    flex: 1;
    text-align: left;
    ${props => `
        ${props.desktop && `
          @media screen and (max-width: 800px){
            display: none;
          };
        `};
    `};
  `,
  td: styled.td<any>`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    ${props => `
        ${props.desktop && `
          @media screen and (max-width: 800px){
            display: none;
          };
        `};
    `};
  `,
};