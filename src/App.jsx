import Header from './components/Header'
import { ways } from './data'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { useState } from 'react'


export default function App() {
  const [content, setContent] = useState("press the button");

  // let content = 'Press the button';
  function handleClick (type) {
    console.log('You clicked the button', type)
    setContent(type);
    // content = type;
  }



  return (
    
    <div>
      <Header />
      <main>
        <section>
          <ul>
            <WayToTeach 
              title={ways[0].title} 
              description={ways[0].description}
            />
            <WayToTeach { ...ways[1] } />
            <WayToTeach { ...ways[2] } />
            <WayToTeach { ...ways[3] }  
            />
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button onClick={() => handleClick('way')}>Подход</Button>
          <Button onClick={() => handleClick('easy')}>Доступность</Button>
          <Button onClick={() => handleClick('program')}>Концентрация</Button>
        </section>
        <p>{content}</p>
      </main>
    </div>
  )
}
