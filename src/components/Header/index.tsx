import { ShoppingCart, MapPin } from 'phosphor-react'
import { HeaderContainer } from './styles'

import logo from '../../assets/Logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <button className="locationButton">
          <MapPin size={22} weight="fill" />
          <span>Belo Horizonte, MG</span>
        </button>
        <button className="shopCartButton">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
