// Write your code here

import {ResponsiveContainer, Legend, PieChart, Pie, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props
  console.log(data)
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          cx="50%"
          cy="50%"
          startAngle={360}
          endAngle={0}
          outerRadius="50%"
        >
          <Cell name="Male" fill="#64c2a6" />
          <Cell name="Female" fill="#a3df9f" />
          <Cell name="Others" fill="#2d87bb" />
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByGender
