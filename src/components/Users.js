import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import User from './User'


export default function Users() {

  // const [userName, setUserName] = useState('Vasyl')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([])
  // console.log('users', users)
  const [time, setTime] = useState(new Date())
  const [showTimer, setShowTimer] = useState(true)

  useEffect( () => {
    console.log('useEffect')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }, [])

  useEffect(() => {
    window.timer = setInterval(() => {
      // tick()
    }, 1000)
  }, [])

  // componentDidMount() {
  //   // console.log('componentDidMount')
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ users: data, userName: 'Petro' }, () => {
  //         // console.log('this.state users', this.state)
  //       })
  //     })

  //     // this.timer = setInterval(() => {
  //     //   this.tick()
  //     // }, 1000)
  // }  
  // componentDidUpdate() {
  //   // console.log('componentDidUpdate')
  // }  
  // componentWillUnmount() {
  //   // console.log('componentWillUnmount')
  //   clearInterval(this.timer)
  // }

  const tick = (a, b) => {
    setTime(new Date())
  }

  const onClick = (a) => {
    // console.log('a', a)
    setCounter(counter + 1)
  }

  // console.log('this.state', this.state)
  return (
    <>
      <div>Users</div>
      {
        showTimer ?
          <Timer time={time} tick={tick} /> :
          null
      }
      <h1>{counter}</h1>
      <button onClick={onClick}>Increase</button>
      <button onClick={() => setShowTimer(false)}>Remove timer</button>
      <button onClick={() => setShowTimer(true)}>Show timer</button>
      {/* <button onClick={() => { clearInterval(this.timer) }}>remove timer</button> */}

      {
        users?.map(user => {
          return <User user={user} key={user.id} />
        })
      }
    </>
  )
}
