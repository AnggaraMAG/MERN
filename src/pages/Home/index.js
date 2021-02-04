import React from 'react'
import { BlogItem, Button, Gap } from '../../components'
import { BLUE } from '../../utils/colors/constansColor'
import "./home.scss"

function Home() {
  return (
    <div className="home-wrapper">
      <Gap height={15} />
      <div className="create-wrapper">
        <Button label="Create Blog" background={BLUE} height={30} />
      </div>
      <div className="content-wrapper">
        <BlogItem />
      </div>
    </div>
  )
}

export default Home
