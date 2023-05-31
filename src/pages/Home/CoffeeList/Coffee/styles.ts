import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 100%;
  height: 19.375rem;

  background-color: ${({ theme }) => theme['base-card']};

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  padding: 0 1.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: calc(0px - 1.25rem);
  }

  .description {
    color: ${({ theme }) => theme['base-label']};
    font-size: 0.875rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 0.75rem;
  margin-bottom: 1rem;

  gap: 0.25rem;

  span {
    text-transform: uppercase;
    color: ${({ theme }) => theme['yellow-dark']};
    background-color: ${({ theme }) => theme['yellow-light']};
    border-radius: 100px;

    font-weight: 700;
    font-size: 0.625rem;

    padding: 0.25rem 0.5rem;
  }
`

export const TitleContainer = styled.div`
  color: ${({ theme }) => theme['base-subtitle']};

  font-family: 'Baloo 2';

  font-weight: 700;
  font-size: 1.25rem;

  margin-bottom: 0.5rem;
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.0625rem;

  gap: 0.5rem;
`

export const PriceContainer = styled.div`
  /* width: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start; */

  margin-right: 1.5rem;

  span {
    color: ${({ theme }) => theme['base-text']};
  }

  span:first-child {
    font-size: 0.875rem;
  }

  span:last-child {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
  }
`

export const PriceCountContainer = styled.div`
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

export const ChangeAmountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme.purple};
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme['purple-dark']};
  }
`

export const AddItemsButton = styled.button`
  background-color: ${({ theme }) => theme['purple-dark']};
  border-radius: 6px;
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.purple};
  }
`
