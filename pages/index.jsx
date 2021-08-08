// Components
import { Nav, Hero, Footer, Seo, SiteNotice } from 'components/common'
import { Projects } from 'components/index'

// Component
const Index = () => (
  <>
    <Seo title="Work" />
    <Nav />
    {/* <LoadingScreen /> */}
    <main className="home">
      <Hero header="Work." subheader="v2.0" />
      <SiteNotice />
      <Projects />
    </main>
    <Footer />
  </>
)

export default Index
