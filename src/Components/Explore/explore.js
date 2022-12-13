import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import Card from "../child/card.js"

// styling
import "../css/explore.css"
import "../css/card.css"

const Explore = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const cardData = useSelector((state) => state.counter.cardData)

  dispatch(setCurrentPath(location.state))

  return (
    <div className="Explore">
      <div className="Explore-Layer1">
        <h2>Explore</h2>
        <div className="Products">
          {cardData.map((item, i) => (
            <Card key={i} props={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore
