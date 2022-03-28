import React, { useContext } from 'react'

// Context
import { globalContext } from '../../stateContext/stateContexts'

// Style
import LoginPageStyle from './LoginPageStyle.scss'

const LoginPage = ({
  onFormSubmit,
  onUserEmail,
  onUserPassword,
  onUserName,
}) => {
  const { userEmail, userPassword, userName } = useContext(globalContext)

  return (
    <div className='Login-container'>
      <h1>log in</h1>
      <form onSubmit={onFormSubmit} className='form-container'>
        <label className='label-log-in' htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          value={userName}
          required
          onChange={(e) => onUserName(e.target.value)}
        />

        <label className='label-log-in' htmlFor='email'>
          Email address
        </label>
        <input
          type='email'
          value={userEmail}
          required
          onChange={(e) => onUserEmail(e.target.value)}
        />

        <label className='label-log-in' htmlFor='password'>
          password
        </label>
        <input
          type='password'
          required
          value={userPassword}
          onChange={(e) => onUserPassword(e.target.value)}
        />

        <button>log in</button>
      </form>
    </div>
  )
}

export default LoginPage
