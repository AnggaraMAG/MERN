import React from 'react'
import { Button, Gap, Input, TextArea, Upload } from '../../components'
import { BLUE, RED } from '../../utils/colors/constansColor'
import { useHistory } from 'react-router-dom'
import './createblog.scss'
function CreateBlog() {
  const history = useHistory()
  return (
    <div className="blog-wrapper">
      <div className="title-create-wrapper">
        <p className="tittle-create">Created Blog</p>
      </div>
      <Input label="Title" />
      <Gap height={55} />
      <div className="text-photo-wrapper">
        <TextArea width="100%" rows={13} />
        <Gap width={50} />
        <Upload />
      </div>
      <Gap height={50} />
      <div className="buttons-wrapper">
        <Button label="Cancel" background={RED} height={35} width="100%" onClick={() => history.push('/')} />
        <Gap width={50} />
        <Button label="Save" background={BLUE} height={35} width="100%" />
      </div>
    </div>
  )
}

export default CreateBlog
