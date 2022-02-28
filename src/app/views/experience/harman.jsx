import React from 'react'
import configuration from '../../config/configuration'
import Experience from './experience'

const Harman = () => {

    const experienceList = configuration.experiences;
    const filteredExperienceList = experienceList.filter(p => p.id === 4);

    return (
        <Experience
            experienceList={experienceList}
            filteredExperienceList={filteredExperienceList}
            orgPath='/harman'
            orgName='Harman'
            className='bg-light-green'
            >
        </Experience>
    )
}

export default Harman