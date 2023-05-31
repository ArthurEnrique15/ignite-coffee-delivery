import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 3.5rem;

  min-height: 34rem;
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 5rem;

  max-width: 70rem;

  @media screen and (max-width: 1024px) {
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;

    gap: 2rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  gap: 4.125rem;

  @media screen and (max-width: 1200px) {
    gap: 2rem;
  }
`

export const ImageContainer = styled.div`
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      object-fit: contain;
    }
  }
`

export const TitleContainer = styled.div`
  max-width: 36.75rem;

  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme['base-title']};

    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;

    margin-bottom: 1rem;
  }

  span {
    color: ${({ theme }) => theme['base-subtitle']};

    font-size: 1.25rem;
  }

  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 2rem;
    }

    span {
      font-size: 1rem;
    }
  }
`

export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem 1.25rem;

  height: 5.25rem;

  font-size: 0.875rem;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;

    height: 12rem;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  height: 2rem;

  color: ${({ theme }) => theme['base-text']};
`

export const BaseButton = styled.button`
  border-radius: 999px;
  border: 0px;
  height: 2rem;
  width: 2rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.white};
`

export const CartButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme['yellow-dark']};
`

export const PackageButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme['base-text']};
`

export const TimerButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.yellow};
`

export const CoffeeButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.purple};
`
