import UserCard from "./components/UserCard"

import Shubh from './assets/shubh.jpg'
import Virat from './assets/vk.png'
import Jassi from './assets/jasprit.jpg'

function App() {

  return (
    <div className="container">
       <UserCard name="Virat Kohli" Description="The King of Cricket - Master of chases and architect of impossible victories" image={Virat}></UserCard>
       <UserCard name="Shubman Gill" Description="The Prince of Indian Cricket - Elegant stroke-maker and future captain material" image={Shubh}></UserCard>
       <UserCard name="Jasprit Bumrah" Description="Death Bowling Specialist - Yorker king who turns pressure into wickets" image={Jassi}></UserCard>
    </div>
  )
}

export default App
