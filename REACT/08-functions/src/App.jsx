import React from 'react'

const App = () => {

  const pageScrolling = (val) => {
    if (val > 0) {
      console.log('seedha scrolling');
    }
    else {
      console.log('ulta scrolling');
      
    }
  }

  return (
    <div onWheel={(elem) => {
      pageScrolling(elem.deltaY)
      // console.log(elem.deltaY);
      
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>

    </div>
  )
}

export default App