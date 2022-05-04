import Tab from '../components/Tab'
import Toggle from '../components/Toggle'
import styles from './Routes.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
    </div>
  )
}

export default App
