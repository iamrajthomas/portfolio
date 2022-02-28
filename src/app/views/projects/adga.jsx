import React from 'react'
import configuration from '../.././config/configuration'
import Project from './project'

const ADGA = () => {

    const projectList = configuration.liveproject;
    const filteredProjectList = projectList.filter(p => p.shorttitle.toLowerCase() === 'adga');

    return (
        <Project
            projectList={projectList}
            filteredProjectList={filteredProjectList}
            projectPath='/adga'
            projectName='ADGA'>
        </Project>
    )
}

export default ADGA