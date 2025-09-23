import Header from './components/Header'
import TeachingSection from './components/TeachingSection'
import ContentTypeSection from './components/ContentTypeSection'
import IntroSection from './components/IntroSection'
import TabSection from './components/TabSection'
import FeedbackSection from './components/FeedbackSection'
import { useState } from 'react'


export default function App() {

  const [tab, setTab] = useState('feedback')

  return (
    <>
      <Header />
      
      <main>
        <IntroSection />
        <TabSection active={tab} onChange={(current) => setTab(current)}/>
        
        {tab == 'main' && (
        <>
          <TeachingSection />
          <ContentTypeSection />
        </>)}

        {tab == 'feedback' && (
        <>
          <FeedbackSection />
        </>)}

      </main>
    </>
  )
}
