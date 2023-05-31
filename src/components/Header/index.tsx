import { useContext } from 'react'
import { ShoppingCart, MapPin } from 'phosphor-react'
import {
  HeaderContainer,
  ItemsAmount,
  LocationContainer,
  ShopCartButton,
  HeaderButtonsContainer,
} from './styles'

import logo from '../../assets/Logo.png'
import { ShopCartContext } from '../../contexts/ShopCartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { shopCart } = useContext(ShopCartContext)

  const itemsCount = shopCart.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <HeaderButtonsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Belo Horizonte, MG</span>
        </LocationContainer>
        <NavLink to="/checkout">
          <ShopCartButton>
            {itemsCount > 0 ? <ItemsAmount>{itemsCount}</ItemsAmount> : ''}
            <ShoppingCart size={22} weight="fill" />
          </ShopCartButton>
        </NavLink>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
