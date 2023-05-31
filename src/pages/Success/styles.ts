import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.75rem;

  width: 100%;
  max-width: 70rem;

  margin-top: 10rem;

  @media screen and (max-width: 1100px) {
    margin-top: 5rem;
  }
`

export const SuccessTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.25rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;

    color: ${({ theme }) => theme['yellow-dark']};
  }

  span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const SuccessContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media screen and (max-width: 1100px) {
    flex-direction: column;

    gap: 1rem;

    div {
      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
`

export const SuccessContentBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.yellow},
    ${({ theme }) => theme.purple}
  );

  border-radius: 6px 36px;

  padding: 1px;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

export const SuccessPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;

  padding: 2.5rem;

  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.white};

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

export const SuccessPanelRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;
`

const BaseSuccessLineButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.white};
`

export const AddressButton = styled(BaseSuccessLineButton)`
  background-color: ${({ theme }) => theme.purple};
`

export const TimerButton = styled(BaseSuccessLineButton)`
  background-color: ${({ theme }) => theme.yellow};
`

export const MoneyButton = styled(BaseSuccessLineButton)`
  background-color: ${({ theme }) => theme['yellow-dark']};
`

export const RowText = styled.div`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme['base-text']};

  .bold {
    font-weight: 700;
  }
`
