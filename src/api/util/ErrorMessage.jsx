import React from 'react'

export function ErrorMessage({ errorMsg }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center', width: '100%', margin: 0 }}>
        Oops! Something went wrong
      </h2>
      {'\n'}
      <div style={{ width: '100%'}}>
        We apologize for the inconvenience. Our team is working to resolve the issue as soon as possible.
        Please try again later or contact our support team if the problem persists. Thank you for your patience and understanding

      </div>
      {'\n'}
      <b style={{ width: '100%', marginTop: '30px', display: 'block' }}>{errorMsg}</b>
    </div>
  )
}
