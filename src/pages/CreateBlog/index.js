import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button, Gap, Input, TextArea, Upload } from '../../components'
import { sendFormtoAPI, setForm, setImagePreview } from '../../config/Redux/actions/createBlogAction'
import { BLUE, RED } from '../../utils/colors/constansColor'
import './createblog.scss'



const URI = 'http://localhost:4000/v1/blog'

const CreateBlog = () => {
  const history = useHistory()
  const { form, imagePreview } = useSelector(state => state.createBlog)
  console.log(`form:`, form)
  const { title, image, content } = form
  const dispatch = useDispatch()

  const _onSubmit = async () => {
    sendFormtoAPI(form)
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0]
    dispatch(setForm('image', file))
    dispatch(setImagePreview(URL.createObjectURL(file)))

  }

  const handleClose = () => {
    // setForm(`title`, "")
    dispatch({ type: "reset" })
    history.push('/')
  }

  return (
    <div className="blog-wrapper">
      <div className="title-create-wrapper">
        <ToastContainer />
        <p className="tittle-create">Created Blog</p>
      </div>
      <Input label="Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
      <Gap height={55} />
      <div className="text-photo-wrapper">
        <TextArea width="100%" rows={13} value={content} onChange={(e) => dispatch(setForm('content', e.target.value))} />
        <Gap width={50} />
        <Upload name={image} img={imagePreview} onChange={(e) => onImageUpload(e)} />
      </div>
      <Gap height={50} />
      <div className="buttons-wrapper">
        <Button label="Cancel" background={RED} height={35} width="100%" onClick={
          handleClose} />
        <Gap width={50} />
        <Button label="Save" background={BLUE} height={35} width="100%" onClick={_onSubmit}
        />
      </div>
    </div >
  )
}

export default CreateBlog
