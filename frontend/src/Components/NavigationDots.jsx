/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const NavigationDots = ({active}) => {
  return (
      <div className='app__navigation'>
           {["home", "about", "skills", "works" ,"contact"].map((items,index) => (
          
          
               <a href={`#${items}`}
                   key={items + index}
                   className='app__navigation-dot'
                   style={active === items ? {backgroundColor : '#313BAC' } : {} }
               
              />
            
        ))}

    </div>
  )
}

export default NavigationDots