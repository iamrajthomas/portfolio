import React from 'react'
import configuration from '../../config/configuration'
import Project from './project'

const Plexosoft = () => {

    const projectList = configuration.liveproject;
    const filteredProjectList = projectList.filter(p => p.shorttitle.toLowerCase() === 'plexosoft');

    return (
        <Project
            projectList={projectList}
            filteredProjectList={filteredProjectList}
            projectPath='/cts'
            projectName='plexosoft'>
        </Project>
    )
}

export default Plexosoft