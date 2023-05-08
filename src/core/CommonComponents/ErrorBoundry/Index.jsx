import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error(error, errorInfo)
    // Update state to indicate an error has occurred
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI to display when an error has occurred
      return <h1 style={{width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Something went wrong.</h1>
    }
    // Render the children components as normal
    return this.props.children
  }
}

export default ErrorBoundary
