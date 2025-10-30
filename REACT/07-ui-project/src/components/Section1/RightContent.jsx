import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
   console.log(props);
   
  return (
      <div id='right' className='h-full overflow-x-auto rounded-4xl flex flex-nowrap gap-10 p-6 w-2/3'>
      {/* <RightCard users={props.users} /> */}
      {props.users.map(function (elem,idx) {
        return <div key={idx}>
          <RightCard id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
        </div>
      })}

      </div>
  )
}

export default RightContent