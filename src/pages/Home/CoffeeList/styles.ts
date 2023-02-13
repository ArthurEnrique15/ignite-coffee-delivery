import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  margin-bottom: 10rem;
  margin-top: 2rem;

  .listTitle {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  }

  .coffeeList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 2rem;

    margin-top: 3.375rem;
  }
`
