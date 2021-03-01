// Dependencies
import styled from 'styled-components'
import { useState } from 'react'
import { Project, Filter, Loading } from 'components/index'
import { columnWidth, container } from 'styles/sc-mixins'
import { motion } from 'framer-motion';

// https://medium.com/javascript-in-plain-english/animate-when-element-is-in-view-with-framer-motion-63b254403bf
// use framermotion and react-intersection-observer

// data - switch to CMS when set up
import projectsData from 'data/project-archive';

// Component
const Projects = ({className}) => {
  // can move these into redux when set up
  const [projects, setProjects] = useState([])
  const [indexInView, setIndexInView] = useState(0)

  const updateProjects = filterTerm => {
    // set loading screen
    setProjects('loading')

    // set delay to simulate db call
    setTimeout(function () {
      let updatedProjects = projectsData.filter(project => project.category === filterTerm)
      setProjects(updatedProjects)
    }, 400)
  }

  return (
    <section className={className} id="projects">
      <Filter updateResults={updateProjects} projects={projectsData} />
      { 
        projects === 'loading' 
          ? <Loading />
          : <motion.div className="projects" animate={{ y: [50, 0], opacity: [0, 1], transition: {duration: 0.3} }}>
              {
                projects.map((project, i) => (
                  <Project 
                    data={project} 
                    key={i} 
                    updateIndex={setIndexInView} 
                    index={i} 
                    indexInView={indexInView}
                  />
                ))
              }
          </motion.div>
      }
    </section>
  )
}

// Export
export default styled(Projects)`
  margin-bottom: ${columnWidth(1)};
`
