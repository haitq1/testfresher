import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table,TableHead,TableRow,TableCell,TableBody,Button} from '@material-ui/core';
class Review extends Component {
    renderFoods = (foods) =>{
        var result = null;
        if(foods.length > 0){
            result = foods.map((food,key)=>{
                return(
                    <TableRow key={key}>
                        <TableCell>{food.name}</TableCell>
                        <TableCell>{food.count}</TableCell>
                    </TableRow>
                );
            })
        }
        return result;
    }
    render(){
        return(
            <div>
                <h3>Information</h3>
                <p><b>Meal:</b> {this.props.meal} </p>
                <p><b>People:</b> {this.props.people}</p>
                <p><b>Restaurant:</b> {this.props.restaurant}</p>
                <p> <b>Dishes:</b></p>
                <Table className="crud-table" style={{ whiteSpace: "pre", width:"300px", marginLeft:"100px", alignItems:'center'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Food</TableCell>
                            <TableCell>Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.renderFoods(this.props.foods)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        people: state.orderFood.people,
        meal: state.orderFood.meal, 
        restaurant: state.orderFood.restaurant,
        foods: state.orderFood.foods
    }
};

const mapDispatchToProps = dispatch =>{
    return {


    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Review);