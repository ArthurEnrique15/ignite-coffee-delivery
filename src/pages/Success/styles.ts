import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.75rem;

  width: 100%;

  .successTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 0.25rem;
  }

  .successTitle h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;

    color: ${({ theme }) => theme['yellow-dark']};
  }

  .successTitle span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  .successContent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }

  .panelBorder {
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

    height: 16.875rem + 1px;
    width: 32.875rem + 1px;
  }

  .successPanel {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 2rem;

    padding: 2.5rem;

    border-radius: 6px 36px;
    background-color: ${({ theme }) => theme.white};

    height: 16.875rem;
    width: 32.875rem;
  }

  .panelLine {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .panelLine button {
    width: 2rem;
    height: 2rem;
    border-radius: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.white};
  }

  .addressButton {
    background-color: ${({ theme }) => theme.purple};
  }

  .timerButton {
    background-color: ${({ theme }) => theme.yellow};
  }

  .moneyButton {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }

  .panelText {
    display: flex;
    flex-direction: column;

    color: ${({ theme }) => theme['base-text']};
  }

  .panelText .bold {
    font-weight: 700;
  }
`
