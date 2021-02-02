import React from 'react'
import { LoginBG, RegisterBG } from '../../assets'
import { Button, Input, Gap, Link } from '../../components'
import './register.scss'

function Register() {
  console.log(`loginbg :`, RegisterBG)
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
        <Button label="Register" color="primary" style={{ width: '100%', fontSize: 'bold', height: '45px' }} />
        <Gap height={20} />
        <Link title="You have account? Click Here" />
      </div>
    </div>
  )
}

export default Register
