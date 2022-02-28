import React from 'react'
import { Breadcrumb, 
    // SimpleCard 
} from 'app/components'
import { Card } from '@material-ui/core'

const Education = ({ filteredEducationList = [], className = '' }) => {
    
    return (
        <div className="m-sm-30">

            {
                filteredEducationList.length > 0 &&
                filteredEducationList.map((edu, index) => {
                    return(
                        <div key={index}>

                            <Card title='' className={`px-3 py-3 ${className}`}>
                                <div className="mb-sm-30">
                                        <Breadcrumb
                                            routeSegments={[
                                                { name: edu.name },
                                            ]}
                                        />
                                </div>
                                <p><b>Institution Name: </b>{edu?.institution}</p>
                                <p><b>Speciaization: </b>{edu?.degree}</p>
                                <p><b>Tenure: </b> {edu?.from} - {edu?.to}</p>
                            </Card>
                            <div className="py-3" />
                        </div>
                    )
                })
            }
            <div className="py-3" />
        </div>
    )
}

export default Education