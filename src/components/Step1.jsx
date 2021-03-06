import React, { Component } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { connect } from "react-redux";
import { SelectMeal, SelectPeople } from "../actions/index";
const Meals = ["breakfast", "lunch", "dinner"];
class Step1 extends Component {
  handleChangeMeal = (event) => {
    this.props.selectMeal(event.target.value);
    this.setState({
      meal: event.target.value,
    });
  };
  handleChangePeople = (event) => {
    this.props.selectPeople(event.target.value);
    this.setState({
      people: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <FormControl
          fullWidth={true}
          className="mt-16"
          style={{ width: "300px", marginLeft: "50px" }}
        >
          <InputLabel>{<span>Please select a meal</span>}</InputLabel>
          <Select
            defaultValue={this.props.meal ? this.props.meal : ""}
            onChange={(event) => this.handleChangeMeal(event)}
          >
            {Meals.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl
          fullWidth={true}
          className="mt-16"
          style={{ width: "300px", marginLeft: "150px" }}
        >
          <InputLabel>{<span>Please select number of people</span>}</InputLabel>
          <Select
            defaultValue={this.props.people ? this.props.people : ""}
            onChange={(event) => this.handleChangePeople(event)}
          >
            {(() => {
              const options = [];

              for (let i = 1; i <= 10; i++) {
                options.push(
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                );
              }

              return options;
            })()}
          </Select>
        </FormControl>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    people: state.orderFood.people,
    meal: state.orderFood.meal,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    selectMeal: (meal) => {
      dispatch(SelectMeal(meal));
    },
    selectPeople: (people) => {
      dispatch(SelectPeople(people));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Step1);
