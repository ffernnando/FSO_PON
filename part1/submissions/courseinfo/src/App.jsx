
const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <div>
      <p>{part} - {exercises}</p>
    </div>
  )
}

const Content = ({parts}) => {
  console.log('parts: ', parts);
  return (
    <div>
      {
        parts.map(p => (
          <Part 
            key={p.name}
            part={p.name}
            exercises={p.exercises}
          />
        ))
      }
    </div>
  )
}

const totalex = (parts) => {
    return parts.reduce((sum, p) => sum + p.exercises, 0);
}

const Total = ({ parts }) => {
  return (
    <div>
      <p>Number of exercises: {totalex(parts)}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  
  

  

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App