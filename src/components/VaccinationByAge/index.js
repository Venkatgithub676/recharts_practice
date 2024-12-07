// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {data} = props
  console.log(data)

  return (
    <ResponsiveContainer height={500} width="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          cx="50%"
          cy="50%"
          startAngle={0}
          endAngle={360}
          innerRadius="25%"
          outerRadius="50%"
        >
          <Cell name="18-44" fill=" #f54394" />
          <Cell name="45-60" fill="#2d87bb" />
          <Cell name="Above 60" fill="#2cc6c6" />
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByAge
