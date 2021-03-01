// Components
import { Nav, Hero, Footer } from 'components/common'
import Section from 'components/common/section'

// data - switch to CMS when set up
import info from 'data/info';

// Component
const Info = () => (
  <>
    <Nav />
    <main className="info">
      <Hero header="Info." subheader="My Background" />
      { info.map((section) => <Section data={section} key={section.id} /> )}
    </main>
    <Footer />
  </>
)

export default Info
