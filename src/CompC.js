import React, { useContext } from 'react'
import { Bio } from './CompA'

const CompC = () => {
    const Name = useContext(Bio)
    return (
        <div>
            <h1>Component <span style={{color:'red'}}>C</span> {Name}</h1>
        </div>
    )
}

export default CompC
