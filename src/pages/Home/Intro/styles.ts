import styled from 'styled-components'

export const IntroContainer = styled.div`
  min-height: 34rem;
  width: 100%;
  margin: 5.75rem auto;

  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 3.5rem;

  @media screen and (max-width: 1024px) {
    margin: 2rem auto;
    flex-direction: column;
    align-items: center;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  gap: 4.125rem;

  margin-top: 2px;

  @media screen and (max-width: 1024px) {
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
`

export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 14.45rem 18.375rem;
  gap: 0.625rem 1.25rem;

  height: 5.25rem;
  max-width: 35.3rem;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
