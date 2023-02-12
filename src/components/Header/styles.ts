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

  button {
    border: 0px;
    border-radius: 6px;
    padding: 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 0.25rem;
  }

  .locationButton {
    span {
      color: ${(props) => props.theme['purple-dark']};
    }

    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }

  .shopCartButton {
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
  }
`
