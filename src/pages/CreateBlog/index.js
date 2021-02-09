import React, { useState } from 'react'
import { Button, Gap, Input, TextArea, Upload } from '../../components'
import { BLUE, RED } from '../../utils/colors/constansColor'
import { useHistory } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import './createblog.scss'
function CreateBlog() {
  const [sweetWarning, setsweetWarning] = useState(false);
  const [sweetSucces, setsweetSucces] = useState(false);
  const history = useHistory()



  const _onConfirm = (param) => {
    if (param === 'confirm') {
      setsweetWarning(false);
      setsweetSucces(true);
    } else {
      setsweetWarning(false);
    }
  }

  return (
    <div className="blog-wrapper">
      <SweetAlert
        show={sweetSucces}
        success title="Good job!"
        onConfirm={() => setsweetSucces(false)}
        onCancel={() => setsweetSucces(false)}
      >
        You clicked the button!
      </SweetAlert>
      <SweetAlert
        show={sweetWarning}
        warning
        showCancel
        confirmBtnText="Yes Delete!"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="default"
        title="Are You Sure?"
        onConfirm={_onConfirm('confirm')}
        onCancel={_onConfirm('cancel')}
      >
        You will not be able to recover this imaginary file!
      </SweetAlert>
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
        <Button label="Save" background={BLUE} height={35} width="100%" onClick={() => setsweetWarning(true)} />
      </div>
    </div >
  )
}

export default CreateBlog
