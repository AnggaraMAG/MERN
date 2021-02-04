import React from 'react'
import { BlogItem, Button, Gap } from '../../components'
import { BLUE } from '../../utils/colors/constansColor'
import "./home.scss"

function Home() {
  return (
    <div className="home-wrapper">
      <Gap height={15} />
      <div className="create-wrapper">
        <Button label="Create Blog" background={BLUE} height={30} borderRadius={3} />
      </div>
      <Gap height={25} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="home-pagination">
        <Button label="Previous" background={BLUE} width="100%" />
        <Gap width={20} />
        <Button label="Next" background={BLUE} width="100%" height={30} />
      </div>
    </div>
  )
}

export default Home
