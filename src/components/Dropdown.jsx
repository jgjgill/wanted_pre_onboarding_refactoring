import { useEffect, useRef, useState } from 'react'
import { ChevronDownImage, SearchImage } from '../assets/svgs'
import styles from './Dropdown.module.scss'

const DROPDOWN_GROUP = [
  'BTCUSD.PERP',
  'ETHUSD.PERP',
  'BCHUSD.PERP',
  'LTCUSD.PERP',
  'XRPUSD.PERP',
  '1000SHIBUSD.PERP',
]

function Dropdown() {
  const [dropdownValue, setDropdownValue] = useState('All Symbols')
  const [dropdownToggle, setDropdownToggle] = useState(false)
  const [dropdownList, setDropdownList] = useState(DROPDOWN_GROUP)
  const [inputValue, setInputValue] = useState()
  
  const handleClickDropDown = () => {
      setDropdownToggle(prev => !prev)
    return null
  }

  const handleChangeInput = (e) => {
    setInputValue(e.currentTarget.value)
  }

  const handleResetDropdown = () => {
    setDropdownValue('All Symbols')
    setDropdownToggle(prev => !prev)
    setInputValue()
  }

  const handleSelectDropdwon = (e) => {
    setDropdownValue(e.currentTarget.value)
    setDropdownToggle(prev => !prev)
    setInputValue()
  }

  const dropdownBarRef = useRef()
  const dropdownRef = useRef()

  useEffect(() => {
    if (inputValue) {
      setDropdownList(DROPDOWN_GROUP.filter((dropdownItem) => dropdownItem.includes(inputValue.toUpperCase())))
    } else {
      setDropdownList(DROPDOWN_GROUP)
    }
  }, [inputValue])

  useEffect(() => {
    function handleClickOut(e) {
      if (dropdownRef.current && !dropdownBarRef.current.contains(e.target) && !dropdownRef.current.contains(e.target))
      setDropdownToggle(false)
    }
    
    document.addEventListener('mousedown', handleClickOut)

    return () =>document.removeEventListener('mousedown', handleClickOut)

  }, [dropdownRef, dropdownBarRef])

  return (
    <div>
      <h1 className={styles.title}>Dropdown</h1>

      <div className={styles.dropdownWrapper}>
        <button type='button' ref={dropdownBarRef} className={styles.dropdownMain} onClick={handleClickDropDown}>
          <span className={styles.dropdownResultText}>{dropdownValue}</span>
          <ChevronDownImage className={styles.downArrowIcon} />
        </button>

        {dropdownToggle && (
          <div className={styles.dropdownSearchWrapper} ref={dropdownRef}>
            <div className={styles.dropdownSearch}>
              <input type="text" className={styles.dropdownInput} placeholder='Search Symbol' onChange={handleChangeInput} />
              <SearchImage className={styles.searchIcon} />
            </div>

            <ul className={styles.dropdownList}>
              <li>
                <button type='button' onClick={handleResetDropdown}>All Symbols</button>
              </li>

              {dropdownList.map((droptownItem) => (
                <li key={`dropdownItem-${droptownItem}`}>
                  <button type='button' value={droptownItem} onClick={handleSelectDropdwon}>{droptownItem}</button>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  )
}

export default Dropdown