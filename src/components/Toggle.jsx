import { useState } from 'react'
import styles from './Toggle.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Toggle() {
  const [toggle, setToggle] = useState(true)

  const handleLeftToggle = () => {
    setToggle(true)
  }
  
  const handleRightToggle = () => {
    setToggle(false)
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>toggle</h1>

      <div className={styles.toggleWrapper}>
        <button type='button' className={styles.leftToggle} onClick={handleLeftToggle}>
          <span className={cx('textToggle', { textOnToggle: toggle })}>기본</span>
        </button>
        <button type='button' className={styles.rightToggle} onClick={handleRightToggle}>
          <span className={cx('textToggle', { textOnToggle: !toggle })}>상세</span>
        </button>

        <div className={cx('bgToggle', {bgLeftToggle: toggle, bgRightToggle: !toggle})} />
      </div>
    </div>
  )
}

export default Toggle
