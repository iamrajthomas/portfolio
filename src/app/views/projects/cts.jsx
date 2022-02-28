import React from 'react'
import configuration from '../.././config/configuration'
import Project from './project'

const CTS = () => {

    const projectList = configuration.liveproject;
    const filteredProjectList = projectList.filter(p => p.shorttitle.toLowerCase() === 'cts');

    return (
        <Project
            projectList={projectList}
            filteredProjectList={filteredProjectList}
            projectPath='/cts'
            projectName='CTS'>
        </Project>
    )
}

export default CTS