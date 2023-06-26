import React from 'react'
import PropTypes from 'prop-types'

export default function User({ user = { name: 'Vasyl' } }) {
  // console.log('user', user)
  return (
    <div>
      {user.name} {user.name.length > 15 ? <strong>It's a very long name</strong> : <span style={{ color: 'red' }} > It's a short name</span>}
    </div >
  )
}

User.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    name: PropTypes.string.isRequired,
    // surname: PropTypes.string.isRequired
  }),
  // optionalBigInt: PropTypes.bigint,
  // optionalBool: PropTypes.bool,
  // optionalFunc: PropTypes.func,
}
