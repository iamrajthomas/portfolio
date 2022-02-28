import React from 'react'
import configuration from '../.././config/configuration'
import Project from './project'

const WiseConnect = () => {

    const projectList = configuration.liveproject;
    const filteredProjectList = projectList.filter(p => p.shorttitle.toLowerCase() === 'wiseconnect');

    return (
        <Project
            projectList={projectList}
            filteredProjectList={filteredProjectList}
            projectPath='/wiseconnect'
            projectName='WiseConnect'>
        </Project>
    )
}

export default WiseConnect