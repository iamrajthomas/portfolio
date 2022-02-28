import React from 'react'
import configuration from '../../config/configuration'
import Education from './education'

const Graduation = () => {

    const educationList = configuration.education;
    const filteredEducationList = educationList.filter(p => p.id === 1);

    return (
        <Education
            educationList={educationList}
            filteredEducationList={filteredEducationList}
            className='bg-light-primary'
            >
        </Education>
    )
}

export default Graduation