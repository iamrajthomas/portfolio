import React from 'react'
import configuration from '../../config/configuration'
import Education from './education'

const School = () => {

    const educationList = configuration.education;
    const filteredEducationList = educationList.filter(p => p.id === 3);

    return (
        <Education
            educationList={educationList}
            filteredEducationList={filteredEducationList}
            className='bg-light-primary'
            >
        </Education>
    )
}

export default School