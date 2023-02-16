import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6.5rem;

  padding: 2rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 0.75rem;
    height: 2.375rem;
  }

  .locationButton {
    border: 0px;
    border-radius: 6px;
    padding: 0.5rem;

    display: flex;
    align-items: center;

    gap: 0.25rem;

    span {
      color: ${(props) => props.theme['purple-dark']};
    }

    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }

  .shopCartButton {
    border: 0px;
    border-radius: 6px;

    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};

    transition: 0.2s;
  }

  .shopCartButton:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.yellow};
  }

  .itemsAmount {
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2px;

    margin-top: calc(0px - 1rem);
    margin-right: calc(0px - 2rem);

    width: 1.15rem;
    height: 1.15rem;

    border-radius: 100%;

    font-weight: 700;
    font-size: 0.75rem;

    color: ${(props) => props.theme.white};
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
