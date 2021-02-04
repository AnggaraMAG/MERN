import React from 'react'
import { LoginBG } from '../../assets'
import { Button, Input, Gap, Links } from '../../components'
import { BLUE } from '../../utils/colors/constansColor'
import { useHistory } from 'react-router-dom'
import './register.scss'

function Register() {
  // console.log(`loginbg :`, RegisterBG)
  const history = useHistory()
  return (
    <div className="main-page">
      <div className="left">
        {/* <p >Register page</p> */}
        <img src={LoginBG} className="bg-image" alt={LoginBG} />

      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Name" />
        <Gap height={40} />
        <Input label="Email" />
        <Gap height={40} />
        <Input label="Password" />
        <Gap height={60} />
        <Button label="Register" width="100%" background={BLUE} onClick={() => history.push('/')} height={48} />
        <Gap height={20} />
        <Links title="You have account? Click Here" onClick={() => history.push('/login')} />
      </div>
    </div>
  )
}

export default Register
