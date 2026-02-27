import Part from "./Part";

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
};
export default Content;