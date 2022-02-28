import React from 'react'
import configuration from '../../config/configuration'
import Education from './education'

const Intermediate = () => {

    const educationList = configuration.education;
    const filteredEducationList = educationList.filter(p => p.id === 2);

    return (
        <Education
            educationList={educationList}
            filteredEducationList={filteredEducationList}
            className='bg-light-green'
            >
        </Education>
    )
}

export default Intermediate