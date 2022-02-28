import React from 'react'
import configuration from '../../config/configuration'
import Experience from './experience'

const InfoVision = () => {

    const experienceList = configuration.experiences;
    const filteredExperienceList = experienceList.filter(p => p.id === 2);

    return (
        <Experience
            experienceList={experienceList}
            filteredExperienceList={filteredExperienceList}
            orgPath='/infovision'
            orgName='InfoVision'
            className='bg-light-primary'          
            >
        </Experience>
    )
}

export default InfoVision