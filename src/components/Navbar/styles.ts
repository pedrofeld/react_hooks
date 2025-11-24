
import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  background-color: #333;
`;

export const Container = styled.div`
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  .nav-links li a {
    color: #fff;
    text-decoration: none;
    font-size: 1em;
    transition: color 0.3s ease;

    &:hover {
      color: #00bcd4;
    }
  }
`;
