import React from 'react'
import configuration from '../.././config/configuration'
import Project from './project'

const SigmaFlow = () => {

    const projectList = configuration.liveproject;
    const filteredProjectList = projectList.filter(p => p.shorttitle.toLowerCase() === 'sigmaflow');

    return (
        <Project
            projectList={projectList}
            filteredProjectList={filteredProjectList}
            projectPath='/sigmaflow'
            projectName='SigmaFlow'>
        </Project>
    )
}

export default SigmaFlow