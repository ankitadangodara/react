import React ,{memo}from 'react'

const Childofusecallback = (item,fun) => {
    console.log('child comp calling')
  return (
    <div>
  <h1>i am a child of usecallback</h1>
    </div>
  )
}

export default memo(Childofusecallback)