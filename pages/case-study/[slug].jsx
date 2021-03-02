// import all data for static path generating
import projectsData from 'data/project-archive';

// import project data, we can't use dynamic imports with variables
import dataset from 'data/case-studies'

// dependencies
import { Nav, Hero, Footer } from 'components/case-study'
import { Seo } from 'components/common'
import Section from 'components/common/section'

// this is a react component definition
const Project = ({project, nextProject}) => (
  <>
    <Seo title={project.name} />
    <Nav data={project} />
    <main className="case-study bg-white">
      <Hero data={project} />
      { project.sections.map((section) => <Section data={section} key={section.id} /> )}
    </main>
    <Footer data={project} next={nextProject} />
  </>
)


/**
 * Handle build time functions
 */
export async function getStaticPaths() {
  const paths = projectsData.map((project) => `/case-study/${project.slug}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // map the data to its slug
  let projectData = {}
  dataset.forEach((project) => projectData[project.slug] = project)

  const project = projectData[params.slug]

  // get project index in full array
  let index = projectsData.findIndex(project => project.slug == params.slug) + 1
  if (projectsData.length === index) index = 0 // back to first at end
  const nextProject = projectsData[index]

  return {
    props: { project, nextProject }
  }
}

export default Project
