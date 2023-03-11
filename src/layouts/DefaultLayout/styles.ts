import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10rem;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;

    html {
      font-size: 87.5%;
    }
  }
`
