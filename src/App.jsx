import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import Library from "./Library";

function App() {
  const actors = ["Bappa Raj", "Omar Sunny", "Salman Shah", "Jasim", "Anwar", "Rajjak"];

  const singers = [
    { id: 1, name: "Dr. Mahfuz", age: 68 },
    { id: 2, name: "Tahsan", age: 45 },
    { id: 3, name: "Suvro Deb", age: 57 },
  ];

  const books = [
    { id: 1, name: 'Physics', price: 250},
    { id: 2, name: 'Math', price: 120},
    { id: 3, name: 'Chemistry', price: 550},
    { id: 4, name: 'Biology', price: 280},
  ];

  // const time = 50;

  return (
    <>
      {/* <h1>Vite + React</h1>
      <Pet />
      <Person />
      <Person />
      <Sports />
      <Person />
      <Person />
      <Person />
      <Sports /> */}

      <h1>React Core Concepts</h1>
      
      <Library books={books}></Library>

      {
        // actors.map(actor => actor.toUpperCase())
        actors.map((actor) => (
          <Actor actor={actor}></Actor>
        ))
      }

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }

      {/* <Todo 
        task="Learn React" 
        isDone={true} 
        time={time} />
      <Todo 
        task="Revise JS" 
        isDone={false} />
      <Todo 
        task="Take a bath" 
        isDone={true} 
        time="100" /> */}

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mozumder" tech="JS"></Developer>
      <Developer name="Rajon" tech="Python"></Developer>
      <Developer name="Shabana" tech="Java"></Developer>
      <Player name="Tamim" runs="5000"></Player>
      <Player name="Musfiq" runs="7000"></Player>
      <Salami event="Roja r Eid" amount="20"></Salami>
      <Salami event="Graduation"></Salami> */}
    </>
  );
}

function Salami({ event, amount = 0 }) {
  return (
    <div className="student">
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  );
}

// const props = {name: 'Tamim', runs: '5000'};
// const {name, runs} = {name: 'Tamim', runs: '5000'};

function Player({ name, runs }) {
  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  );
}

// const {name, tech} = {name: 'Mozumder', tech: 'JS'};

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
      }}
    >
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

function Person() {
  const age = 25;
  const name = "Maliha";

  const personStyle = {
    color: "red",
    textAlign: "right",
  };
  return (
    <p style={personStyle}>
      I am a person. Name {name} Age {age}
    </p>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  );
}

function Pet() {
  return <p>Cat</p>;
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>bat</li>
        <li>ball</li>
      </ul>
      <p>Playing and Losing.</p>
    </div>
  );
}

export default App;
