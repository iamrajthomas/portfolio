import React from 'react'
import configuration from '../../config/configuration'
import Experience from './experience'

const FusionStack = () => {

    const experienceList = configuration.experiences;
    const filteredExperienceList = experienceList.filter(p => p.id === 1);

    return (
        <Experience
            experienceList={experienceList}
            filteredExperienceList={filteredExperienceList}
            orgPath='/fusionstack'
            orgName='Fusionstack'
            className='bg-light-primary'
            >
        </Experience>
    )
}

export default FusionStack