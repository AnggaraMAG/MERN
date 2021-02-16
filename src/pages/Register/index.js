import React, { useState, useRef } from 'react'
import { LoginBG } from '../../assets'
import { Button, Input, Gap, Links } from '../../components'
import { BLUE } from '../../utils/colors/constansColor'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import './register.scss'

const Register = () => {
  const history = useHistory()
  const [showPassword, setShowPassword] = useState(false);
  const password = useRef({});
  console.log(`password`, password)
  const { handleSubmit, errors: fieldsErrors, watch, register } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  });
  console.log(`password`, watch('password'))
  console.log(`fieldsErrors`, fieldsErrors)
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const onSubmit = (data) => {
    console.log(`data`, data)
    if (data !== null) {
      console.log(`data succes`, data)
      // history.push('/')
    } else {
      console.log(`failed`, data)
    }
  };
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBG} className="bg-image" alt={LoginBG} />
      </div>
      <div className="right" >
        <p className="title">Register</p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
          <Input
            label="Name"
            name="name"
            inputRef={register({
              required: 'Name cannot be empty!'
            })}
            helperText={fieldsErrors.name ? fieldsErrors.name.message : null}
            error={!!fieldsErrors.name}
          />
          <Gap height={58} />
          <Input
            label="Email"
            name="email"
            inputRef={register({
              required: 'email cannot be empty!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email address'
              }
            })}
            helperText={fieldsErrors.email ? fieldsErrors.email.message : null}
            error={!!fieldsErrors.email}
          />
          <Gap height={58} />
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            inputRef={register({
              required: 'password cannot be empty!',
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
              }
            })}
            helperText={fieldsErrors.password ? fieldsErrors.password.message : null}
            error={!!fieldsErrors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Gap height={58} />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            autoComplete="current-password"
            inputref={register({
              message: "The passwords do not match",
              validate: value =>
                value === watch('password')
            })}
            helperText={fieldsErrors.confirmPassword ? fieldsErrors.confirmPassword.message : null}
            error={!!fieldsErrors.confirmPassword}
          />
          <Gap height={58} />
          <Button label="Register" width="100%" background={BLUE}
            height={48} type="submit" />
        </form>
        <Gap height={20} />
        <Links title="You have account? Click Here" onClick={() => history.push('/login')} />
      </div>
    </div>
  )
}

export default Register
