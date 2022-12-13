import { useNavigate } from "react-router-dom"

const Card = ({ props }) => {
  const nav = useNavigate()

  return (
    <button
      onClick={() => nav(`/Product/?id=${props.id}`, { state: "/Product" })}
    >
      <div className="Card">
        <div className="Test">
          <img className="Card-Image" src={props.images[0]} alt="product" />
        </div>
        <div className="Card-Contents">
          <h3>{props.title}</h3>
          <p>${props.price}</p>
        </div>
      </div>
    </button>
  )
}

export default Card
