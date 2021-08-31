import React, { createContext } from 'react'
import CompB from './CompB'
const Bio = createContext()
const CompA = () => {
    return (
        <div>
            {/* <Bio.Provider value={`from ${'A'} Component`}> */}
            <Bio.Provider value={'from A Component'}>

                <h1>Hello
                    <span style={{ color: 'red' }}> A </span> to
                    <span style={{ color: 'red' }}> C </span>
                    Component
                </h1>

                <CompB />
            </Bio.Provider>
        </div>
    )
}

export default CompA
export { Bio }