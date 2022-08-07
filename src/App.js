
import './App.css';
import Card from './components/Card';
import Skill from './components/Skill'

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <h1>Information about me</h1>
        <Card 
          img='./images/willy.jpeg'
          name='Willian Adonay Rosa Ramirez'
          positionJob='Full Stack Developer'
          company='Vertikal Company'
          testimonial='Hello World, I´m an engineer in systems and computing, for the development of web applications I use the MEAN stack ( MongoDB | Express js | Angular | Node js ). I have experience using bootstrap and angular material as style libraries.
          Currently, In my free time, I´m learning the React library.'
          />

          <h1>My Skills</h1>
          <div className='skills'>
      
            <Skill 
            image='HTML5.png'
            name='HTML 5'
            />
            <Skill 
            image='JS.png'
            name='JavaScript'
            />
               <Skill 
            image='TypeScrpit.png'
            name='TypeScrpit'
            />
            <Skill 
            image='css.jpg'
            name='CSS 3'
            />
           
             
          </div> 
          <div className='skills two-row' >
          <Skill 
            image='Angular.png'
            name='Angular'
            />
             <Skill 
            image='react.png'
            name='React'
            />
            <Skill 
            image='nodejs.png'
            name='Node JS'
            />
            
        
             <Skill 
            image='500x500.jpg'
            name='Mongo DB'
            />
          
          </div>
          <div className='skills two-row' >
          <Skill 
            image='bootstrap.png'
            name='Bootstrap'
            />
            <Skill 
            image='git.png'
            name='Git'
            />
              <Skill 
            image='GitHub-Mark.png'
            name='GitHub'
            />
            <Skill 
            image='Bitbucket.jpg'
            name='Bitbucket'
            />
             
          </div>
          
      </div>
    </div>
  );
}

export default App;
