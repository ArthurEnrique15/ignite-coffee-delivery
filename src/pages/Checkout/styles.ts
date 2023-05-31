import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 2rem;

  margin-top: 2.5rem;
  width: 100%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`
