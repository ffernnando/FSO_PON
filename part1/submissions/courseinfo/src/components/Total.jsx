const totalex = (parts) => {
    return parts.reduce((sum, p) => sum + p.exercises, 0);
}

const Total = ({ parts }) => {
  return (
    <div>
      <p><b>Total of: {totalex(parts)} exercises</b></p>
    </div>
  )
}
export default Total;