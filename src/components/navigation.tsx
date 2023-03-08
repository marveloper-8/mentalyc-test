// styles
import { NavigationStyle } from '@/styles/components'
import { AssetsStyle } from '@/styles/general';
// resources
import logo from '../assets/icons/logo.svg'

const NavigationComponent = () => (
  <NavigationStyle.wrapper>
    <AssetsStyle.logo src={logo} alt='Mentalyc' />
  </NavigationStyle.wrapper>
)

export default NavigationComponent;