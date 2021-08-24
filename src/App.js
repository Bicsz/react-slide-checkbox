import React                from 'react'

import Component        from 'components/Component'

class App extends React.Component {
  constructor(props){
    super(props)
    this.input={}

  
  }
  render() {
    return (
      <Component onChange={(value)=>{debugger}} text='123' accentColor='red'/>
    )
  }
}

export default App