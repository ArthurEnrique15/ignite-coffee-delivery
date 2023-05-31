import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 100%;
  height: 6.5rem;

  gap: 1.25rem;

  padding: 0.75rem 0.25rem 1rem;

  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  margin-bottom: 0.75rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  @media screen and (max-width: 500px) {
    padding: 0.75rem 0 1rem;
  }
`

export const CoffeeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.5rem;

  width: 100%;
`

export const NamePriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`

export const PriceText = styled.span`
  color: ${({ theme }) => theme['base-text']};
  font-weight: 700;
`

export const ProductActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  svg {
    transition: 0.2s;
    color: ${({ theme }) => theme.purple};
  }

  svg:hover {
    cursor: pointer;
    color: ${({ theme }) => theme['purple-dark']};
  }
`

export const ProductCountContainer = styled.div`
  width: 4.5rem;
  height: 2rem;

  background-color: ${({ theme }) => theme['base-button']};

  border-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 0.25rem;
  padding: 0.5rem;

  span {
    color: ${({ theme }) => theme['base-title']};
    padding: 0.25rem;
  }
`

export const RemoveProductButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  width: 5.6875rem;
  height: 2rem;

  border-radius: 6px;

  padding: 0 0.5rem;

  background-color: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};

  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['base-hover']};
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
