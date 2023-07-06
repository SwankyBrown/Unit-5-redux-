import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

function Overview() {
    let currentDisplay = useSelector(selectDisplay)
  return (
    <div className='stack'>
        <h1>{currentDisplay.name.official}</h1>
        <h2>"{currentDisplay.name.common}"</h2>

        <table className='overview-table'>
            <tr>
                <td>Borders: </td>
                <td>{currentDisplay.borders
                ? currentDisplay.borders.map((e,i,arr) => {
                    if(i + 1 === arr.length) {
                        return `${e}`
                    } else {
                        return `${e}, `
                    }
                })
               : "N/A" }
               </td>
            </tr>
            <tr>
                <td>Capitol: </td>
                {currentDisplay.capital.map((e) => (
                    <td>{e}</td>
                ))}

            </tr>
            <tr>
            <td>Language: </td>
            <td>{currentDisplay.language}</td>
            </tr>

            <tr>
            <td>Independent:  </td>
            <td>{currentDisplay.independent ? "True" : "False"}</td>
            </tr>

            <tr>
            <td>Population: </td>
            <td>{currentDisplay.population}</td>
            </tr>

            <tr>
            <td>Continents: </td>
            <td>{currentDisplay.continents.map((e)=> (
                <td>{e}</td>
            ))}
            </td>
            </tr>

            <tr>
            <td>Abbreviation: </td>
            <td>{currentDisplay.flag}</td>
            </tr>

        </table>
    </div>
  )
}

export default Overview