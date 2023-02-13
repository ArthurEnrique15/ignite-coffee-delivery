import styled from 'styled-components'

export const IntroContainer = styled.div`
  height: 34rem;
  width: 100%;
  margin: 5.75rem auto;

  display: flex;
  flex-direction: column;
  align-content: center;

  gap: 4.125rem;

  .title {
    width: 36.75rem;

    display: flex;
    flex-direction: column;

    /* margin-bottom: 4.125rem; */

    h1 {
      color: ${({ theme }) => theme['base-title']};

      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 3rem;

      margin-bottom: 1rem;
    }

    span {
      color: ${({ theme }) => theme['base-subtitle']};

      font-size: 1.25rem;
    }
  }

  .description {
    display: grid;
    grid-template-columns: 14.45rem 18.375rem;
    gap: 0.625rem 1.25rem;

    height: 5.25rem;
    max-width: 35.3rem;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.75rem;

      height: 2rem;

      color: ${({ theme }) => theme['base-text']};

      button {
        border-radius: 999px;
        border: 0px;
        height: 2rem;
        width: 2rem;
        padding: 0.5rem;
        color: ${({ theme }) => theme.white};
      }

      .cartButton {
        background-color: ${({ theme }) => theme['yellow-dark']};
      }

      .packageButton {
        background-color: ${({ theme }) => theme['base-text']};
      }

      .timerButton {
        background-color: ${({ theme }) => theme.yellow};
      }

      .coffeeButton {
        background-color: ${({ theme }) => theme.purple};
      }
    }
  }

  img {
    position: absolute;
    display: flex;
    align-self: flex-end;
    width: 29.75rem;
    height: 22.5rem;
  }

  /* @media (max-width: 1024px) {

    img {
      position: relative;
      display: flex;
      align-self: center;
      width: 28.75rem;
      height: 21.5rem;
      margin-top: 4rem;
    }
  } */

  /* @media (max-width: 768px) {
    .title {
      display: block;
    }

    img {
      position: relative;
      display: flex;
      align-self: center;
      width: 20rem;
      height: 20rem;
      margin-top: 2rem;
    }
  } */
`
