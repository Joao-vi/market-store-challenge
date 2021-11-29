import styled from "@emotion/styled";

export const SelectButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 5px 10px;
  gap: 5px;

  background-color: #230f5b;
  color: #fff;
  font-family: "Roboto";
  font-weight: 500;
`;

export const SelectDropDown = styled.div`
  position: absolute;
  top: 38px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  background-color: #230f5b;
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  label {
    cursor: pointer;
    padding: 5px 0 5px 10px;

    font-weight: 500;
    transition: filter 0.2 ease;
    &:hover {
      filter: opacity(0.7);
    }
  }
  input {
    display: none;
  }
`;
