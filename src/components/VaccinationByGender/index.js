// Write your code here

import {ResponsiveContainer, Legend, PieChart, Pie, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props
  //   console.log(data)
  return (
    // <ResponsiveContainer width="100%" height={400}>
    <PieChart width={1000} height={300}>
      <Pie
        data={data}
        dataKey="count"
        cx="50%"
        cy="50%"
        startAngle={180}
        endAngle={0}
        outerRadius="50%"
        innerRadius="20%"
      >
        <Cell name="Male" fill="#f54394" />
        <Cell name="Female" fill="#2d87bb" />
        <Cell name="Others" fill="#2cc6c6" />
      </Pie>
      <Legend />
    </PieChart>
    // </ResponsiveContainer>
  )
}

export default VaccinationByGender
