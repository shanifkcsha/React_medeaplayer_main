import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
        <div className='row p-5'>
          <div className="col d-flex flex-column justify-content-center">
            <h1 className='text-white'>Media player 2024</h1>
            <p>Explore media player for youtube video upload and management.you can add and manage videos, categories and even </p>
            <div>
              <Link to='/dash' className='btn btn-success border border-white'>
                Explore <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </Link>
            </div>
          </div>
          <div className="col">
            <img src="https://png.pngtree.com/background/20230617/original/pngtree-minimalistic-3d-rendering-of-a-media-player-interface-with-search-bar-picture-image_3698089.jpg" className='img-fluid border border-white' alt="cover photo"  />
          </div>
        </div>
      </div>
      {/* card section */}
      <div className='mt-2 p-5'>
        <h2 className='text-center text-white'>Features</h2>
        <div className='d-flex mt-3 justify-content-between'>

          <div className="card border border-white" style={{ width: '18rem' }}>
            <img className="card-img-top" src="https://cdn.dribbble.com/users/3635718/screenshots/7163576/media/2a7c89c5fe7a8316fa0cbadb71719940.gif" style={{ height: "250px" }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-white">Upload Video</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card border border-white" style={{ width: '18rem' }}>
            <img className="card-img-top " src="https://camo.githubusercontent.com/c3f096893b5f0f1c34e950a714a3b1a652f47c050ba8f89a95d4db9ebebc2aa1/68747470733a2f2f6d69722d73332d63646e2d63662e626568616e63652e6e65742f70726f6a6563745f6d6f64756c65732f646973702f33316139373235383733373035392e356130373730356234623536352e676966" style={{ height: "250px" }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-white">Watch Video</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card border border-white" style={{ width: '18rem' }}>
            <img className="card-img-top" src="https://i.gifer.com/embedded/download/7Skn.gif" style={{ height: "250px" }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-white">View History</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div className='mt-5 d-flex justify-content-center align-items-center p-5'>
          <div className='col'>
            <h2 className='text-white'>Simple , Fast & Secure</h2>
            <p style={{ textAlign: "justify" }} className='text-white'>media player 2024 is used to upload video and watch video.it is very easy to use and maintain.</p>
          </div>
          <div className='col'>
            <iframe className='border border-white' width="560" height="315" src="https://www.youtube.com/embed/vDMyIZ2nsS0?si=lU_oHwmC8FVeHwmT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
