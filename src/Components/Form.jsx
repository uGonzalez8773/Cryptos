import styled from "@emotion/styled";
import useSelectCrypto from "../hooks/useSelectCrypto";
import { coins } from "../data/coins";
import { useEffect, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #747dfe;
    cursor: pointer;
  }
`;

const Form = ({ setCoins }) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setEror] = useState(false);

  const [coin, SelectCoins] = useSelectCrypto("Choose your coin", coins);
  const [crypto, SelectCrypto] = useSelectCrypto("Choose your crypto", cryptos);

  useEffect(() => {
    const apiCall = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const response = await fetch(url);
      const result = await response.json();
      const arrayCryptos = result.Data.map((crypto) => {
        const object = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return object;
      });
      setCryptos(arrayCryptos);
    };
    apiCall();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([coin, crypto].includes("")) {
      setEror(true);

      return;
    }
    setEror(false);
    setCoins({
      coin,
      crypto,
    });
  };

  return (
    <>
      {error && <Error>All fields are mandatory</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCoins />
        <SelectCrypto />

        <InputSubmit type="submit" value="quote" />
      </form>
    </>
  );
};

Form.propTypes = {
  setCoins: PropTypes.object,
};

export default Form;
