// Components
import { Nav, Hero, Footer, Seo, LoadingScreen } from 'components/common'
import { Projects } from 'components/index'

// Component
const Index = () => (
  <>
    <Seo title="Work" />
    <Nav />
    {/* <LoadingScreen /> */}
    <main className="home">
      <Hero header="Work." subheader="v2.0" />
      <Projects />
    </main>
    <Footer />
  </>
)

export default Index
