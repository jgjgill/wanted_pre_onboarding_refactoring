import styles from './Tab.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'

const TAB_GROUP = ['감자', '고구마', '카레라이스']

const cx = classNames.bind(styles)

function Tab() {
  const [selectedTab, setSelectedTab] = useState(TAB_GROUP[0])

  const handleClickTab = (e) => {
    const {value} = e.currentTarget
    setSelectedTab(value)
  }


  return (
    <div>
      <h1 className={styles.title}>Tab</h1>
      <div className={styles.tabWrapper}>
        {TAB_GROUP.map((tabItem) => (
          <button
            key={`tabItem-${tabItem}`}
            type='button'
            value={tabItem}
            onClick={handleClickTab}
            className={cx(styles.tab, {seletedTab: tabItem === selectedTab})}
            >
            {tabItem}
          </button>
      ))}
        <div className={cx(styles.bottomColor, {
          bottomLeftColor: selectedTab === '감자',
          bottomCenterColor: selectedTab === '고구마',
          bottomRightColor: selectedTab === '카레라이스',
        })} />
      </div>
    </div>
  )
}

export default  Tab