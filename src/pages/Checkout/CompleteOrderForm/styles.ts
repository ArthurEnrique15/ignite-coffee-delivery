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

  p {
    display: flex;
    gap: 0.75rem;
  }

  input {
    height: 2.625rem;
    color: ${(props) => props.theme['base-text']};

    background-color: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};

    padding: 0.75rem;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }
`
