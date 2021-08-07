// Components
import { Nav, Hero, Footer, Seo, LoadingScreen } from 'components/common'
import { Projects } from 'components/index'
import { SmoothScrollProvider } from 'components/common/smoothScrollContext'

// Component
const Index = () => (
  <>
    <Seo title="Work" />
    <SmoothScrollProvider options={{ smooth: true }}>
      <div data-scroll-container>
        <Nav />
        <main className="home">
          <Hero header="Work." subheader="v2.0" />
          <Projects />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  </>
)

export default Index
