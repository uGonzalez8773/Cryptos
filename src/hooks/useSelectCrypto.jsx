import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const useSelectCrypto = (label, options) => {

  const [state, setState] = useState('');

  const SelectCoin = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={ e => setState( e.target.value )}
      >
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [ state, SelectCoin];
};

export default useSelectCrypto;
