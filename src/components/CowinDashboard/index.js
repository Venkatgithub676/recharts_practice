// Write your code here

import {Component} from 'react'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

class CowinDashBoard extends Component {
  state = {data: {}}

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
    // console.log(data)
    const updatedData = {
      last7DaysVaccination: data.last_7_days_vaccination.map(each => ({
        dose1: each.dose_1,
        dose2: each.dose_2,
        vaccineDate: each.vaccine_date,
      })),
      vaccinationByAge: data.vaccination_by_age.map(each => ({
        age: each.age,
        count: each.count,
      })),
      vaccinationByGender: data.vaccination_by_gender.map(each => ({
        count: each.count,
        gender: each.gender,
      })),
    }
    this.setState({
      data: {
        last7DaysVaccination: updatedData.last7DaysVaccination,
        vaccinationByAge: updatedData.vaccinationByAge,
        vaccinationByGender: updatedData.vaccinationByGender,
      },
    })
  }

  render() {
    const {data} = this.state
    const {last7DaysVaccination, vaccinationByAge, vaccinationByGender} = data
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
        <VaccinationCoverage data={last7DaysVaccination} />
        <VaccinationByAge data={vaccinationByAge} />
        <VaccinationByGender data={vaccinationByGender} />
      </div>
    )
  }
}

export default CowinDashBoard
