import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import { BLUE } from '../../utils/colors/constansColor'
import { useHistory } from "react-router-dom"
import "./home.scss"
import { useDispatch, useSelector } from 'react-redux'
import { setBlogs } from '../../config/Redux/actions/actionsBlog'

const URI = 'http://localhost:4000/'



const Home = () => {
  const history = useHistory()
  const [counter, setCounter] = useState(1)
  const { data, name, page } = useSelector(state => state.getBlog)
  const dispatch = useDispatch()

  // console.log(`page :`, page)

  useEffect(() => {
    dispatch(setBlogs(counter))
  }, [counter, dispatch])

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
  }

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1)
  }
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
        <Button label="Previous" background={BLUE} width="100%" onClick={previous} height={30} />
        <Gap width={70} />
        <p style={{ height: 30, marginTop: 4, fontWeight: 'bold' }}>{page.currentPage}/{page.totalPage}</p>
        <Gap width={70} />
        <Button label="Next" background={BLUE} width="100%" height={30} onClick={next} />
      </div>
    </div>
  )
}

export default Home
