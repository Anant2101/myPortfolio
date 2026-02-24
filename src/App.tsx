import { useState, lazy, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import Loader from './components/Loader/Loader'
import LazySection from './components/LazySection/LazySection'
import SectionSkeleton from './components/SectionSkeleton/SectionSkeleton'
import Hero from './pages/Hero/Hero'

// Lazy load sections that are below the fold
const Skills = lazy(() => import('./pages/Skills/Skills'))
const Projects = lazy(() => import('./pages/Projects/Projects'))
const WhyHireMe = lazy(() => import('./pages/WhyHireMe/WhyHireMe'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="app">
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      <Navbar />
      <main>
        {/* Hero loads immediately - above the fold */}
        <Hero />
        
        {/* Skills section - lazy loaded */}
        <LazySection 
          minHeight="600px" 
          placeholder={<SectionSkeleton type="cards" />}
        >
          <Suspense fallback={<SectionSkeleton type="cards" />}>
            <Skills />
          </Suspense>
        </LazySection>
        
        {/* Projects section - lazy loaded */}
        <LazySection 
          minHeight="800px" 
          placeholder={<SectionSkeleton type="grid" />}
        >
          <Suspense fallback={<SectionSkeleton type="grid" />}>
            <Projects />
          </Suspense>
        </LazySection>
        
        {/* Why Hire Me section - lazy loaded */}
        <LazySection 
          minHeight="600px" 
          placeholder={<SectionSkeleton type="cards" />}
        >
          <Suspense fallback={<SectionSkeleton type="cards" />}>
            <WhyHireMe />
          </Suspense>
        </LazySection>
        
        {/* Contact section - lazy loaded */}
        <LazySection 
          minHeight="500px" 
          placeholder={<SectionSkeleton />}
        >
          <Suspense fallback={<SectionSkeleton />}>
            <Contact />
          </Suspense>
        </LazySection>
      </main>
      
      {/* Footer - lazy loaded */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
