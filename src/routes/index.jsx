import Dropdown from '../components/Dropdown'
import Input from '../components/Input'
import Tab from '../components/Tab'
import Toggle from '../components/Toggle'
import styles from './Routes.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Input />
      <Dropdown />
    </div>
  )
}

export default App
