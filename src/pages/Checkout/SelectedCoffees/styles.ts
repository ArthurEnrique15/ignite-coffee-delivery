import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  width: 28rem;

  .title {
    color: ${(props) => props.theme['base-subtitle']};

    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;

    margin-bottom: 1rem;
  }

  .panel {
    background-color: ${({ theme }) => theme['base-card']};

    border-radius: 6px 36px;

    padding: 2.5rem;
  }

  .priceDescription {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    margin: 1.5rem 0;
  }

  .priceDescription div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .lesserText {
    font-weight: 400;
    color: ${({ theme }) => theme['base-text']};
  }

  .lesserText span:first-child {
    font-size: 0.875rem;
  }

  .bigText {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  .finishOrderButton {
    width: 100%;
    height: 2.875rem;

    border-radius: 6px;

    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.yellow};

    text-transform: uppercase;

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;

    transition: 0.2s;
  }

  .finishOrderButton:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
