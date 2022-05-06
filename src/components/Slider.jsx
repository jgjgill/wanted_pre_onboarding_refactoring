import { useState } from 'react'
import styles from './Slider.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const SLIDER_GROUP = [1,25,50,75,100]

function Slider() {
  const [slider, setSlider] = useState(1)

  const handleChangeInput = (e) => {
    setSlider(e.currentTarget.value)
  }
  console.log(slider)
  
  const handleChangeSlider = (e) => {
    setSlider(e.currentTarget.value)
  }

  const handleClickOption = (e) => {
    setSlider(e.currentTarget.value)
  }
  
  return (
    <div>
      <h1 className={styles.title}>Slider</h1>
      
      <div className={styles.slierWrapper}>
        <div className={styles.sliderInputWrapper}>
          <input type='text' value={slider} onChange={handleChangeInput} className={styles.sliderInput} />
          <span className={styles.inputPercent}>%</span>
        </div>

        <div className={styles.sliderRangeWrapper}>
          <input type='range' list='slider' min='1' max='100' value={slider} onChange={handleChangeSlider} className={cx('sliderRange', {baseBackgrounRange: !(slider >= 1) })}/>    
          <div className={styles.sliderBackground} style={{'--slider': `${slider}%`}} />
          <div className={styles.circleContainer}>
            {SLIDER_GROUP.map((item) => (
              <div key={`sliderCircle-${item}`} value={item} className={cx('sliderCircle', {onCircleColor: item <= slider})} />
          ))}
          </div>
        </div>

        <div className={styles.sliderOptionList}>
          {SLIDER_GROUP.map((item) => (
            <button key={`sliderOption-${item}`} type='button' value={item} className={styles.sliderOption} onClick={handleClickOption}>{item}%</button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Slider