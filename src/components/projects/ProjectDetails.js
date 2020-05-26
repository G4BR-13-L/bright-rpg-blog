import React from 'react'

function ProjectDetails(props) {

    const id = props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-t">Project Title - {id}</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque, omnis rem ipsam repellendus minus accusantium. Repudiandae porro voluptate ducimus quae, placeat hic debitis at magnam temporibus, rerum ullam fugit?</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by Gabriel</div>
                        <div>13rd, febuary, 5am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
