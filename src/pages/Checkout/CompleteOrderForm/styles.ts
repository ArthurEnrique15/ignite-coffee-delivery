import styled from 'styled-components'

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;
  gap: 0.75rem;

  .addressIcon {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .paymentIcon {
    color: ${(props) => props.theme.purple};
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`

export const TitleContainer = styled.div`
  color: ${(props) => props.theme['base-subtitle']};

  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;

  margin-bottom: 0.25rem;
`

export const FormPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px;

  padding: 1.5rem;
`

export const FormHeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  .headerText {
    display: flex;
    flex-direction: column;

    span:first-child {
      color: ${(props) => props.theme['base-subtitle']};
    }

    span:last-child {
      color: ${(props) => props.theme['base-text']};

      font-size: 0.875rem;
    }
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    display: flex;
    gap: 0.75rem;
  }

  input {
    width: 12.5rem;
    height: 2.625rem;
    color: ${(props) => props.theme['base-text']};

    background-color: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    padding: 0.75rem;

    transition: 0.1s;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }

  input:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  .fullInput {
    width: 100%;
  }

  .federalUnitInput {
    width: 3.75rem;
  }

  @media screen and (max-width: 500px) {
    p {
      flex-direction: column;
    }

    input {
      width: 100%;
    }

    .federalUnitInput {
      width: 100%;
    }
  }
`

export const PaymentOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.75rem;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    background-color: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

export const PaymentOptionLabel = styled.label`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  padding: 1rem;

  border: 1px solid transparent;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  transition: 0.1s;

  div {
    width: 1rem;
    height: 1rem;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  span {
    font-size: 0.75rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};

    text-transform: uppercase;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['base-hover']};
  }

  &:hover span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media screen and (max-width: 500px) {
    padding: 0.5rem;

    div {
      width: 1.25rem;
      height: 1.25rem;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`
