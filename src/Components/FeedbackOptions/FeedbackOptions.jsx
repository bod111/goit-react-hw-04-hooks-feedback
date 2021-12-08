import React from 'react'
import PropTypes from 'prop-types'
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onButtonClick }) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          className={styles.btn}
          key={option}
          type="button"
          name={option}
          onClick={onButtonClick}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes = {
options: PropTypes.array,
  onButtonClick: PropTypes.func,
}

export default FeedbackOptions
