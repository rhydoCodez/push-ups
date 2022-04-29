import { useState } from "react"

const PerformanceCard = () => {
  const [aboveSeventyFive, setAboveSeventyFive] = useState<number>(12)
  const [fiftyToSeventy, setFiftyToSeventy] = useState<number>(2)
  const [belowForty, setBelowForty] = useState<number>(39)

  return (
    <div className="performance__card">
      <div>
        <h4>Students that scored</h4>
        <h5>Above 75%</h5>
        <p>{aboveSeventyFive}</p>
      </div>
      <div>
        <h4>Students that scored</h4>
        <h5>50% - 75%</h5>
        <p>{fiftyToSeventy}</p>
      </div>
      <div>
        <h4>Students that scored</h4>
        <h5>Below 40%</h5>
        <p>{belowForty}</p>
      </div>
    </div>
  )
}

export default PerformanceCard
