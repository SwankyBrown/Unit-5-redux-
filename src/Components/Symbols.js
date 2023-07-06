import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { selectDisplay } from '../redux/slices/displayCountrySlice'


function Symbols() {
    const currentDisplay = useSelector(selectDisplay)
  return (
    <div className='symbols'>
        <div className='stack'>
            <h2> Flag of {currentDisplay.name.common}:</h2>
            {currentDisplay.flags ? (
                <img src={currentDisplay.flags.png}/>
            ): (
                "(No Data Found)"
            )}

        </div>
        <div className='stack'>
                <h2>Coat of Arms of {currentDisplay.name.common}:</h2>
                {currentDisplay.coatOfArms ? (
                    <img src={currentDisplay.coatOfArms.png} />
                ) : (
                    "(No Data Found)"
                )}
        </div>
    </div>
  )
}

export default Symbols