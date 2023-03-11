import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  margin-bottom: 10rem;
  margin-top: 2rem;

  .listTitle {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
  }
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;

  margin-top: 3.375rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
