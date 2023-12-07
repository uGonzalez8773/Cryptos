import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Text = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`;

const Error = ({ children }) => {
  return <Text>{children}</Text>;
};

Error.propTypes = {
  children: PropTypes.node,
};

export default Error;
