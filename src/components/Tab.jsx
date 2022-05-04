import styles from './Tab.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'

const TAB_GROUP = ['감자', '고구마', '카레라이스']

const cx = classNames.bind(styles)

function Tab() {
  const [temp, setTemp] = useState(TAB_GROUP[0])

  const handleClickTab = (e) => {
    const {value} = e.currentTarget
    setTemp(value)
  }


  return (
    <div>
      <h1 className={styles.title}>Tab</h1>
      <div className={styles.tabWrapper}>
        {TAB_GROUP.map((tabItem) => (
          <button key={`tabItem-${tabItem}`} type='button' value={tabItem} onClick={handleClickTab} className={cx(styles.tab, {temp: tabItem === temp})}>{tabItem}</button>
      ))}
        <div className={cx(styles.bottomColor, {
          bottomLeftColor: temp === '감자',
          bottomCenterColor: temp === '고구마',
          bottomRightColor: temp === '카레라이스',
        })} />
      </div>
    </div>
  )
}

export default  Tab