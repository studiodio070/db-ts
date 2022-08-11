import React from 'react'
// import bgCard from '../../assets/webside/_DSC7952aj.jpg'
import Title from './Title'

function Container() {
  return (
    <div className='card w-96 h-auto glass'>
      <figure>
        <img src={''} alt="davidwerk" />
      </figure>
      <div className="card-body">

        <Title
          title='David Bade'
          description='Beeldend Kunstenaar' />
      </div>



    </div>
  )
}

export default Container