import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SelectedCoffeesTitle = styled.div`
  color: ${(props) => props.theme['base-subtitle']};

  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;

  margin-bottom: 1rem;
`

export const SelectedCoffeesPanel = styled.div`
  background-color: ${({ theme }) => theme['base-card']};

  border-radius: 6px 36px;

  padding: 2.5rem;

  margin-bottom: 2rem;
`

export const LesserTextRow = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme['base-text']};

  span:first-child {
    font-size: 0.875rem;
  }
`

export const BigTextRow = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme['base-subtitle']};
`

export const OrderValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin: 1.5rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FinishOrderButton = styled.button`
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

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
