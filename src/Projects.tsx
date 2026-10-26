import ProjectTile from "./ProjectTile"

export default function Projects(){
    return(
        <>
        <section id="project-section">
          <div className="project-holder">
            <ProjectTile></ProjectTile>  
          </div>
          <div className="project-holder">
            <ProjectTile></ProjectTile>  
          </div>
          <div className="project-holder">
            <ProjectTile></ProjectTile>  
          </div>
        </section>
        </>
    )
}