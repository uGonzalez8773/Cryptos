import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Conteiner = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;

`;

const Image = styled.img`
  display: block;
  width: 120px;

`;

const TextResult = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const TextResultPrice = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;
const Result = ({ quote }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    quote;

  return (
    <Conteiner>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Crypto Image" />
      <div>
        <TextResultPrice>
          The price is: <span>{PRICE}</span>
        </TextResultPrice>
        <TextResult>
          Highest price of the day: <span>{HIGHDAY}</span>
        </TextResult>
        <TextResult>
          Lowest price of the day: <span>{LOWDAY}</span>
        </TextResult>
        <TextResult>
          Change percentage of last 24 hrs: <span>{CHANGEPCT24HOUR}</span>
        </TextResult>
        <TextResult>
          Last Update: <span>{LASTUPDATE}</span>
        </TextResult>
      </div>
    </Conteiner>
  );
};

Result.propTypes = {
  quote: PropTypes.object,
};

export default Result;
