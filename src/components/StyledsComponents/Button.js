import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #64d;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  :hover,
  :active {
    background-color: #024d;
  }
  & .icon {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }

  & .badge {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }

  &:hover .badge,
  &:active .badge {
    background-color: #92320c;
  }
`;
