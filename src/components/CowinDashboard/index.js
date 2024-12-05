// Write your code here

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import {Component} from 'react'
import './index.css'

class CowinDashBoard extends Component {
  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const api = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(api, options)
    const data = await response.json()
    const updatedData = {
      last7DaysVaccination: data.last_7_days_vaccination => ({
        dose1: each.dose_1,
        dose2: each.dose_2,
        vaccineDate: each.vaccine_date,
      }),
      vaccinationByAge: vaccination_by_age.map()

    }
    console.log(data)
  }

  render() {
    return (
      <div className="cowin-con">
        <div className="cowin-logo-heading-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="co-win-heading">Co-WIN</h1>
        </div>
        <h1 className="cowin-heading">CoWIN Vaccination in India</h1>
      </div>
    )
  }
}

export default CowinDashBoard
