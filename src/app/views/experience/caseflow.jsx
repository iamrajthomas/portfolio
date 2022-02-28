import React from 'react'
import configuration from '../../config/configuration'
import Experience from './experience'

const CaseFlow = () => {

    const experienceList = configuration.experiences;
    const filteredExperienceList = experienceList.filter(p => p.id === 3);

    return (
        <Experience
            experienceList={experienceList}
            filteredExperienceList={filteredExperienceList}
            orgPath='/caseflow'
            orgName='CaseFlow'
            className='bg-light-primary'
            >
        </Experience>
    )
}

export default CaseFlow