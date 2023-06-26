import React, { useEffect } from 'react'

export default function Timer({ time = new Date('11.11.2000 09:41'), tick = () => false }) {

  useEffect(() => {
    console.log('DID MOUNT')
    return () => {
      console.log('WILL UNMOUNT')
      clearInterval(window.timer)
    }
  }, [])

  // componentDidMount() {
  //     console.log('componentDidMount')
  //     // this.timer = setInterval(() => {
  //     //   this.props.tick('hello')
  //     // }, 1000)
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }
  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  //   // clearInterval(this.timer)
  // }
  return (
    <h1 onClick={() => tick()}>{time.toLocaleTimeString()}</h1>
  )
}
