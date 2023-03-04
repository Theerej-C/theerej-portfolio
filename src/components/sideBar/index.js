import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubT from '../../assets/images/logo_sub.png'

import './index.scss'

const Sidebar = () => {
  return (
    <div class="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubT} alt="slobodon" />
      </Link>
    </div>
  )
}

export default Sidebar
