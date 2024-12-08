// Write your code here

import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Legend,
  ResponsiveContainer,
  //   ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props

  const dataFormatter = number => {
    if (number > 1) {
      return `${number} k`
    }
    return number
  }

  //   console.log(data)
  return (
    // <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data}
      margin={{top: 5}}
      backgroundColor="red"
      width={1000}
      height={300}
    >
      <XAxis dataKey="vaccineDate" tick={{stroke: 'gray', strokeWidth: 1}} />
      <YAxis
        tick={{
          strokeWidth: 1,
          stroke: 'red',
        }}
        tickFormatter={dataFormatter}
      />
      <Bar name="dose1" dataKey="dose1" fill="#2d87bb" />
      <Bar name="dose2" dataKey="dose2" fill="#f54394" />
      <Legend
        layout="horizontal"
        iconType="star"
        align="center"
        verticalAlign="bottom"
        wrapperStyle={{padding: 10}}
      />
    </BarChart>
    // </ResponsiveContainer>
  )
}
export default VaccinationCoverage
