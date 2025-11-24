
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  border: 1px solid #000;
  padding: 30px;
  max-width: 500px;
  text-align: left;
  border-radius: 8px;
  font-size: 1rem;

  h2 {
    margin-bottom: 15px;
  }

  ul {
    padding: 0;
    margin: 10px 0;
  }

  li {
    margin: 5px 0;
  }
`;
