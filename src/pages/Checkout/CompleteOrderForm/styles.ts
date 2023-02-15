import styled from 'styled-components'

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;

  .title {
    color: ${(props) => props.theme['base-subtitle']};

    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;

    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .formPanel {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: ${(props) => props.theme['base-card']};

    border-radius: 6px;

    padding: 1.5rem;
  }

  .formHeader {
    display: flex;
    gap: 0.5rem;
  }

  .formHeaderText {
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

  .addressIcon {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .paymentIcon {
    color: ${(props) => props.theme.purple};
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .inputs p {
    display: flex;
    gap: 0.75rem;
  }

  .inputs input {
    width: 12.5rem;
    height: 2.625rem;
    color: ${(props) => props.theme['base-text']};

    background-color: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    padding: 0.75rem;

    transition: 0.1s;
  }

  .inputs input::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }

  .inputs input:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  .inputs .fullInput {
    width: 100%;
  }

  .inputs .federalUnitInput {
    width: 3.75rem;
  }

  .paymentOptions {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 0.75rem;
  }

  .paymentOptions label {
    width: 100%;
    height: 3.1875rem;

    display: flex;
    justify-content: flex-start;
    gap: 0.75rem;

    padding: 1rem;

    border: 1px solid transparent;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};
    transition: 0.1s;
  }

  .paymentOptions label svg {
    color: ${(props) => props.theme.purple};
  }

  .paymentOptions label span {
    font-size: 0.75rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};

    text-transform: uppercase;
  }

  .paymentOptions label:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['base-hover']};
  }

  .paymentOptions label:hover span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  .paymentOptions input[type='radio'] {
    display: none;
  }

  .paymentOptions input[type='radio']:checked + label {
    background-color: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};
  }
`
