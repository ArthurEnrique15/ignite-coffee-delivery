import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 23rem;
  height: 6.5rem;

  gap: 1.25rem;

  padding: 0.5rem 0.25rem 1.25rem;

  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  margin-bottom: 0.75rem;

  .coffeeInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 0.5rem;

    margin: 1px 0;
  }

  .coffeeImg {
    width: 4rem;
    height: 4rem;
  }

  .productActions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .productActions svg {
    transition: 0.2s;
    color: ${({ theme }) => theme.purple};
  }

  .productActions svg:hover {
    cursor: pointer;
    color: ${({ theme }) => theme['purple-dark']};
  }

  .productCount {
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
  }

  .removeProduct {
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
  }

  .removeProduct:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['base-hover']};
    color: ${({ theme }) => theme['base-subtitle']};
  }

  .price {
    display: flex;
    height: 100%;
    width: 100%;
    text-align: right;
    justify-content: flex-end;

    color: ${({ theme }) => theme['base-text']};
    font-weight: 700;
  }
`
