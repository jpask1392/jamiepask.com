// Components
import { Nav, Hero, Footer } from 'components/common'
import { Projects } from 'components/index'

// Component
const Index = () => (
  <>
    <Nav />
    <main className="home">
      <Hero header="Work." subheader="v2.0" />
      <Projects />
    </main>
    <Footer />
  </>
)

export default Index
