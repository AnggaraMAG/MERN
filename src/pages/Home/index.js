import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import { BLUE } from '../../utils/colors/constansColor'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import "./home.scss"
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_DATA_BLOG } from '../../config/Redux/constans'
import { setBlogs } from '../../config/Redux/actions/actionsBlog'

const URI = 'http://localhost:4000/'



const Home = () => {
  const history = useHistory()
  // const [data, setData] = useState([])

  const { data, name } = useSelector(state => state.addBlog)
  const stateglobal = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(`stateglobal`, stateglobal)
  useEffect(() => {
    dispatch(setBlogs(2, 2))
  }, [dispatch])
  return (
    <div className="home-wrapper">
      <Gap height={15} />
      <div className="create-wrapper">
        <Button label="Add content" background={BLUE} height={30} borderRadius={3} onClick={() => history.push("/create-blog")} />
      </div>
      <Gap height={25} />
      <h1>{name}</h1>
      <div className="content-wrapper">
        {data.map((n) => {
          return < BlogItem
            key={n._id}
            image={`${URI}${n.image}`}
            content={n.content}
            createdAt={n.createdAt}
            author={n.author.name}
          />
        })}
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
