import React from 'react'
import { BlogItem, Button, Gap } from '../../components'
import { BLUE } from '../../utils/colors/constansColor'
import { useHistory } from "react-router-dom"
import "./home.scss"

function Home() {
  const history = useHistory()
  return (
    <div className="home-wrapper">
      <Gap height={15} />
      <div className="create-wrapper">
        <Button label="Add content" background={BLUE} height={30} borderRadius={3} onClick={() => history.push("/create-blog")} />
      </div>
      <Gap height={25} />
      <div className="content-wrapper">
        <BlogItem onClick={() => history.push('/detail-blog')} />
        <BlogItem onClick={() => history.push('/detail-blog')} />
        <BlogItem onClick={() => history.push('/detail-blog')} />
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
