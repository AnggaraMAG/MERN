import React from 'react'
import { RegisterBG } from '../../assets'
import { Button, Input, Gap, Links } from '../../components'
import { BLUE } from '../../utils/colors/constansColor'
import { useHistory } from 'react-router-dom'

function Login() {
  const history = useHistory()
  return (
    <div className="main-page">
      <div className="left">
        {/* <p >Register page</p> */}
        <img src={RegisterBG} className="bg-image" alt={RegisterBG} />

      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" />
        <Gap height={40} />
        <Input label="Password" />
        <Gap height={60} />
        <Button label="Login" width="100%" background={BLUE} onClick={() => history.push('/')} height={48} />
        <Gap height={20} />
        <Links title="You don't have account? Click here" onClick={() => history.push('/register')} />
      </div>
    </div>
  )
}

export default Login
