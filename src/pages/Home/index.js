import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import { BLUE } from '../../utils/colors/constansColor'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import "./home.scss"

function Home() {
  const history = useHistory()
  const [data, setData] = useState([])
  const URI = 'http://localhost:4000/'
  useEffect(() => {
    axios.get('http://localhost:4000/v1/blogs')
      .then((res) => {
        const API = res.data
        setData(API.data)
      })
      .catch((err) => {
        console.log(`err:`, err)
      })
  }, [])
  return (
    <div className="home-wrapper">
      <Gap height={15} />
      <div className="create-wrapper">
        <Button label="Add content" background={BLUE} height={30} borderRadius={3} onClick={() => history.push("/create-blog")} />
      </div>
      <Gap height={25} />
      <div className="content-wrapper">
        {data.map((n) => {
          console.log(`dataaa:`, n)
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
