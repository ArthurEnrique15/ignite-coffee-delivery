import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;

  position: fixed;
  top: 0;
  right: 0;

  padding: 1rem 10rem;

  background-color: ${({ theme }) => theme.white};

  @media screen and (max-width: 900px) {
    gap: 1rem;
    padding: 0.75rem 1rem;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;

  gap: 0.25rem;

  svg {
    min-width: 1rem;
  }

  span {
    color: ${(props) => props.theme['purple-dark']};
  }

  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['purple-light']};

  @media screen and (max-width: 425px) {
    span {
      display: none;
    }
  }
`

export const ShopCartButton = styled.button`
  border: 0px;
  border-radius: 6px;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.yellow};
  }
`

export const ItemsAmount = styled.span`
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
`
