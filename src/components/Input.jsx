import styles from './Input.module.scss'
import {CheckCircleImage, EyeImage,EyeOffImage} from '../assets/svgs'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function check(email) {
  const EMAIL_CHECK = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  return !!EMAIL_CHECK.test(email)
}

function Input() {
  const [email, setEmail] = useState()
  const [emailCheck, setEmailCheck] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordVisibilityToggle, setpasswordVisibilityToggle] = useState(false)

  const passwordRef = useRef()

  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value)
  }

  const handleBlurEmail = () => {
    email && !emailCheck ? setEmailError(true) : setEmailError(false)
  }

  const handlePasswordVisibilityCheck = () => {
    setpasswordVisibilityToggle((prev) => !prev)
  }

  useEffect(() => {
    setEmailCheck(check(email))
  }, [email])
  
  useEffect(() => {
    passwordRef.current.type = passwordVisibilityToggle ? 'text' : 'password'
  }, [passwordVisibilityToggle])
  
  return (
    <div>
      <h1 className={styles.title}>Input</h1>

      <div className={styles.inputWrapper}>
        <div className={styles.emailInputWrapper}>
          <label htmlFor="email">E-mail</label>
          <div className={styles.emailInput}>
            <input type="text" name='email' id='email' onChange={handleChangeEmail} onBlur={handleBlurEmail} placeholder='E-mail'/>

            <div className={styles.emailIcon}>
              <CheckCircleImage className={cx(styles.checkCircle, {successEmailCheckCircle: emailCheck})} />
            </div>
          </div>
          {emailError && (
            <span className={styles.emailErrorText}>Invalid e-mail address.</span>
          )}
        </div>

        <div className={styles.passwordInputWrapper}>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordInput}>
            <input type="password" ref={passwordRef} name='password' id='password' placeholder='Password'/>

            <button type='button' className={styles.passwordIcon} onClick={handlePasswordVisibilityCheck}>
              {passwordVisibilityToggle ? <EyeImage className={styles.eye} /> : <EyeOffImage className={styles.eyeOff} />}
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default  Input