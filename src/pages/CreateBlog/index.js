import React, { useState } from 'react'
import { Button, Gap, Input, TextArea, Upload } from '../../components'
import { BLUE, RED } from '../../utils/colors/constansColor'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import './createblog.scss'
function CreateBlog() {
  const history = useHistory()

  const Sweet = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to save!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(`result sweetalert:`, result)
        Swal.fire(
          'Save',
          'Data was successfully saved',
          'success'
        )
      }
    })
  }

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
        <Button label="Save" background={BLUE} height={35} width="100%" onClick={() => Sweet()}
        />
      </div>
    </div >
  )
}

export default CreateBlog
