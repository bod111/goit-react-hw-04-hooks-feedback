import React from 'react'
import PropTypes from 'prop-types'
import NotificationMessage from '../NotificationMessage/NotificationMessage'

const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <>
      {total === 0 && <NotificationMessage />}
      {total !== 0 && (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          {percent > 0 && <li>Positive feedback: {percent}%</li>}
        </ul>
      )}
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percent: PropTypes.number,
}

export default Statistics
