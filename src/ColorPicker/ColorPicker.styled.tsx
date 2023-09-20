import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  display: inline-block;
`;

export const ColorList = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColorItem = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  border: 0;
  transition: transform 250ms linear;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
