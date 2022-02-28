import React from 'react'
import configuration from '../.././config/configuration'
import Project from './project'

const ICI = () => {

    const projectList = configuration.liveproject;
    const filteredProjectList = projectList.filter(p => p.shorttitle.toLowerCase() === 'ici');

    return (
        <Project
            projectList={projectList}
            filteredProjectList={filteredProjectList}
            projectPath='/ici'
            projectName='ICI'>
        </Project>
    )
}

export default ICI