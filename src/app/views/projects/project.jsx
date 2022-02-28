import React from 'react'
// import { Button } from '@material-ui/core'
// import { Link } from 'react-router-dom'
import { Breadcrumb, SimpleCard } from 'app/components'

const Project = ({ filteredProjectList = [], projectPath = '/', projectName = '' }) => {

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Project', path: projectPath },
                        { name: projectName },
                    ]}
                />
            </div>
            {
                filteredProjectList.length > 0 &&
                filteredProjectList.map((proj, index) => {
                    return(
                        <div key={index}>
                            <SimpleCard title="Project Intro">
                            <p><b>Project Title: </b>{proj.title}</p>
                            <p><b>Domain: </b>{proj.domain}</p>
                            <p><b>Organization: </b>{proj.organization}</p>
                            </SimpleCard>
                            <div className="py-3" />

                            <SimpleCard title="Project Description">
                            <p><b>Description: </b>{proj.description}</p>
                            <p><b>Responsibilities: </b>{proj.responsibilities}</p>
                            <p><b>Duration: </b>{proj.duration}</p>
                            </SimpleCard>
                            <div className="py-3" />

                            <SimpleCard title="Technical Stack">
                            <ul>
                                {
                                    proj?.techstack?.frontEnd?.length > 0 &&
                                    <li><b>Front-End: </b> {  proj?.techstack?.frontEnd?.join(", ")  } </li>
                                }
                                {
                                    proj?.techstack?.backEnd?.length > 0 &&
                                    <li><b>Back-End: </b> { proj?.techstack?.backEnd?.join(", ") } </li>
                                }
                                {
                                    proj?.techstack?.db?.length > 0 &&
                                    <li><b>DB: </b> { proj?.techstack?.db?.join(", ") } </li>
                                }
                                {
                                    proj?.techstack?.others?.length > 0 &&
                                    <li><b>Others: </b> { proj?.techstack?.others?.join(", ") } </li>
                                }
                            </ul>
                            </SimpleCard>
                            <div className="py-3" />
                        </div>
                    )
                })
            }
            <div className="py-3" />
        </div>
        
    )
}

export default Project