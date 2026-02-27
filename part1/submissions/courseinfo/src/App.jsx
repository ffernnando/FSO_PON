import Course from "./components/Course"

/*const Header = ({ course }) => {
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
*/


/* const App = () => {
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
} */

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return(courses.map(course => <Course course={course} key={course.id}/>));  
}

export default App