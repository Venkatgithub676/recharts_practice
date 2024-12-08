// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {data} = props
  //   console.log(data)

  return (
    // <ResponsiveContainer height={500} width="100%">
    <PieChart width={1000} height={300}>
      <Pie
        data={data}
        dataKey="count"
        cx="50%"
        cy="50%"
        startAngle={0}
        endAngle={360}
        outerRadius="40%"
      >
        <Cell name="18-44" fill=" #64c2a6" />
        <Cell name="45-60" fill="#a3df9f" />
        <Cell name="Above 60" fill="#2d87bb" />
      </Pie>
      <Legend />
    </PieChart>
    // </ResponsiveContainer>
  )
}

export default VaccinationByAge
