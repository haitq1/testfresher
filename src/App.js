import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Review from './components/Review';
import { connect } from 'react-redux';
import { ResetValue } from './actions/index';
import './App.css'
import { HiArrowLeft,HiArrowRight,HiCheck } from "react-icons/hi";
const steps = ['Step 1', 'Step 2', 'Step 3', 'Review']

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    };

  }
  handleBack = () => {
    var activeStep = this.state.activeStep - 1
    this.setState({
      activeStep: activeStep
    })
  }
  handleNext = () => {
    if (this.checkData() === 1) {
      var activeStep = this.state.activeStep + 1
      this.setState({
        activeStep: activeStep
      })
    }
    else if (this.checkData() === 0) {
      alert('You have not entered the information');
    }
    else if (this.checkData() === 2) {
      alert('You have not entered the information');
    }

  }
  handleReset = () => {
    this.props.resetValue();
    this.setState({
      activeStep: 0
    })
  }
  checkData = () => {
    var { activeStep } = this.state;
    var { people, meal, restaurant, foods } = this.props
    var result = 1;
    if (activeStep === 0) {
      if (!people || !meal) {
        result = 0;
      }
      else {
        result = 1;
      }
    }
    else if (activeStep === 1) {
      if (!restaurant) {
        result = 0;
      }
      else {
        result = 1;
      }
    }
    else if (activeStep === 2) {
      if (!foods) {
        result = 0;
      }
      else {
        var value = null
        foods.map(food => {
          value = value + food.count
        })
        if (value < people) {
          result = 2
        }
        else {
          result = 1;
        }
      }
    }
    return result;
  }
  checkStep() {
    var { activeStep } = this.state;
    switch (activeStep) {
      case 0:
        return (<Step1 />);
      case 1:
        return (<Step2 />);
      case 2:
        return (<Step3 />);
      case 3:
        return (<Review />);
    }
  }

  render() {
    var { activeStep } = this.state
    return (
      <div className="App" class="h2">
        <header>
          <h1 class="h1">MY ORDER</h1>
        </header>
        <Stepper activeStep={activeStep} alternativeLabel > 
          {steps.map((step) => (
            <Step key={step} >
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {this.checkStep()}
        <div style={{ marginTop: "30px"}} >
          {activeStep === steps.length ? (
            <div>
              <Button variant="contained" onClick={this.handleReset} color="default" style={{ marginLeft: "50px" }}>Reset</Button>
            </div>
          ) : (
              <div>
                <div>
                
                  <Button            
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    style={{ marginLeft: "50px", float: "left", }}
                    variant="contained" 
                    color="primary"
                  >
                   < HiArrowLeft />
                </Button>
                  <Button disabled={this.state.isDisable} variant="contained" color="primary" onClick={this.handleNext} style={{ float: "right", marginRight: "50px" }}>
                    {activeStep === steps.length - 1 ? < HiCheck /> : < HiArrowRight />}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.orderFood.people,
    meal: state.orderFood.meal,
    restaurant: state.orderFood.restaurant,
    foods: state.orderFood.foods
  }
};

const mapDispatchToProps = dispatch => {
  return {
    resetValue: () => {
      dispatch(ResetValue())
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
