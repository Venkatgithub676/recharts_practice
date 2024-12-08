// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  initial: 'INITIAL',
}

class CowinDashBoard extends Component {
  state = {data: {}, status: apiStatusConstants.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apiStatusConstants.loading})
    const api = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(api)
    if (response.ok) {
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
        status: apiStatusConstants.success,
      })
    } else {
      //   console.log('Failure View is Calling...')
      this.setState({status: apiStatusConstants.failure})
    }
  }

  successView = () => {
    const {data} = this.state
    const {last7DaysVaccination, vaccinationByAge, vaccinationByGender} = data
    return (
      <>
        <div className="charts-con">
          <h1 className="vaccination-headings">Vaccination Coverage</h1>
          <VaccinationCoverage data={last7DaysVaccination} />
        </div>
        <div className="charts-con">
          <h1 className="vaccination-headings">Vaccination by gender</h1>
          <VaccinationByGender data={vaccinationByGender} />
        </div>
        <div className="charts-con">
          <h1 className="vaccination-headings">Vaccination by Age</h1>
          <VaccinationByAge data={vaccinationByAge} />
        </div>
      </>
    )
  }

  loadingView = () => (
    <div data-testid="loader" className="loading-con">
      <Loader type="Circles" color="#ffffff" />
    </div>
  )

  failureView = () => (
    <div className="failure-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-heading">Something went wrong</h1>
    </div>
  )

  getStatus = () => {
    const {status} = this.state
    console.log(status)
    switch (status) {
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.loading:
        return this.loadingView()
      default:
        return null
    }
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
        {this.getStatus()}
      </div>
    )
  }
}

export default CowinDashBoard
