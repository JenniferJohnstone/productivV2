import * as React from "react"
import Timer from '../timer'

const IndexPage = () => {

  //initiates the timer 
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500);


  return (

    <>

      {/* importing bootstrap */}
      <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        integrity="undefined"
        crossorigin="anonymous"></link>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
        integrity="undefined"
        crossorigin="anonymous"></script>


      <main>

        <div className='d-flex flex-column justify-content-center' >
          <title>Productiv</title>
          <Timer expiryTimestamp={time} />
        </div>
      </main>

    </>
  )
}

export default IndexPage
