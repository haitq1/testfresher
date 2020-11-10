import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import "./review.css";
class Review extends Component {
  renderFoods = (foods) => {
    var result = null;
    if (foods.length > 0) {
      result = foods.map((food, key) => {
        return (
          <TableRow key={key}>
            <TableCell>{food.name}</TableCell>
            <TableCell>{food.count}</TableCell>
          </TableRow>
        );
      });
    }
    return result;
  };
  render() {
    return (
      <div class="review">
        <h3>Information</h3>
        <p>=========================================================</p>
        <p>
          <b>Meal:</b> {this.props.meal} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>People:</b> {this.props.people} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Restaurant:</b> {this.props.restaurant}
        </p>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>
          {" "}
          <b>Dishes:</b>
        </p>
        <Table
          className="crud-table"
          style={{
            whiteSpace: "pre",
            width: "300px",
            marginLeft: "520px",
            alignItems: "center",
            paddingLeft: "100px",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Food</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.renderFoods(this.props.foods)}</TableBody>
        </Table>
        <p>============================</p>
        <h5>Thank you for your order !</h5>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    people: state.orderFood.people,
    meal: state.orderFood.meal,
    restaurant: state.orderFood.restaurant,
    foods: state.orderFood.foods,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Review);
