import Image from "../../assets/img/Plant-Card1.png"

const Reason = () => {
  return (
    <div className="Reason">
      <div className="Reason-Card">
        <div className="Reason-Contents">
          <h1>
            We Provide Excellent <br /> Services For You
          </h1>
          <p>
            Set the scene and welcome loved <br /> ones with thoughtful touches
            of greenery. <br />
            Enjoy online delivery on your order.
          </p>
          <ul className="Reason-Points">
            <li>Garden Care</li>
            <li>Plant Renovation</li>
            <li>Seed Supply</li>
            <li>Watering Garden</li>
          </ul>
        </div>
        <div className="Reason-Image">
          <img src={Image} />
        </div>
      </div>
    </div>
  )
}

export default Reason
