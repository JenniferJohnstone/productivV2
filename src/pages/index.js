import * as React from "react"
import Timer from '../view/timer'
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => {

  //initiates the timer 
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500);

  const title = '<title>Productiv</title>'
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

      <Helmet>
        <title>Productiv</title>
        <meta name="description" content="A timer inspired by the Pomodoro technique, Productiv will help you stay focused for longer." />
        <meta name="keywords" cpntent="pomodoro, productivity, timer, focus,  technique" />
        <style type="text/css">{`
        body {
          overflow-x: hidden;
        }
    `}</style>
      </Helmet>



      <main>

        <div className='d-flex flex-column justify-content-center' >
          <Timer expiryTimestamp={time} />
        </div>
      </main>

    </>
  )
}

export default IndexPage
