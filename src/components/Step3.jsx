import React, { Component } from 'react';
import { connect } from 'react-redux';
import {data} from '../data/dishes'
import {FormControl,InputLabel,Select,MenuItem,Table,TableHead,TableRow,TableCell,TableBody,Button,IconButton,Icon,} from '@material-ui/core';
import {SelectFood,DeleteFood} from '../actions/index'
import { BiAddToQueue } from "react-icons/bi";
class Step3 extends Component {
    state={
        foods : [],
        listFoods:[]
    }
    getListFoodByRestaurant(){
        var result =[];
        data.dishes.map(value =>{
            if(value.restaurant === this.props.restaurant){
                result.push(value)
            }
        })

        return result
    }
    getListFood(){
        var result = [];
        this.getListFoodByRestaurant().map(value =>{
            var index = value.availableMeals.indexOf(this.props.meal);
            if(index !== -1){
                result.push(value.name)
            }
        })
        return result;
    }
    componentWillMount(){
        var listFoods = this.getListFood();
        if(this.props.foods){
            this.props.foods.map(food =>{
                listFoods = listFoods.filter(item => item !== food.name);
            })
            this.setState({
                foods:this.props.foods,
                listFoods:listFoods
            })
        }
        else{
            this.setState({
                listFoods:listFoods
            })
        }
    }
    handleChangeFood = (event) =>{
        this.setState({
            selectedFood : event.target.value,

        })
    }

    handleChangeCountFood = (event) =>{
        this.setState({
            selectedFoodCount : event.target.value,

        })
    }
    addFood = () =>{
        var {selectedFood,selectedFoodCount} = this.state;
        var foods = this.state.foods;
        if(selectedFoodCount && selectedFood){
            this.props.selectFood(selectedFood,selectedFoodCount);
            if(foods == null){
                foods = []
            }
            var food = {};
            food.name = selectedFood;
            food.count = selectedFoodCount;
            foods.push(food)
            var listFoods = this.state.listFoods.filter(item => item !== this.state.selectedFood);
            this.setState({
                foods:foods,
                listFoods:listFoods,
                selectedFood : null
            })
        }
        else{
            alert('You have not entered the information')
        }
        
    }
    onDelete = (food) =>{
        this.props.deleteFood(food)
        var foods = this.state.foods;
        var index = this.findFood(foods,food.name)
        foods.splice(index,1);
        var listFoods = this.getListFood();
        this.props.foods.map(food =>{
            listFoods = listFoods.filter(item => item !== food.name);
        })
        this.setState({
            foods:foods,
            listFoods:listFoods,
        })
    }
    findFood = (foods, name) => {
        var result = -1;
        foods.forEach((food, index) => {
            if (food.name === name) {
                result = index;
            }
        });
        return result;
    }
    renderFoods = (foods) =>{
        var result = null;
        if(foods.length > 0){
            result = foods.map((food,key)=>{
                return(
                    <TableRow key={key}>
                        <TableCell>{food.name}</TableCell>
                        <TableCell>{food.count}</TableCell>
                        <TableCell>
                            <IconButton onClick={() => this.onDelete(food)}>
                                <Icon color="error">x</Icon>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                );
            })
        }
        return result;
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.foods)
    }
    render(){
        // console.log(this.state.foods ? this.state.foods : '')
        var foods = this.state.foods ? this.state.foods : []
        return(
            <div>
                <FormControl fullWidth={true}  className="mt-16" style = {{width:"300px", marginLeft:"150px"}}>
                    <InputLabel >{<span>Please select a restaurant</span>}</InputLabel>
                    <Select
                        // value={this.state? this.state.restaurant : ''}
                        // defaultValue={this.props.restaurant ? this.props.restaurant : ''}
                        onChange={(event) => this.handleChangeFood(event)}
                    >
                        {this.state.listFoods.map((item) => {
                            return (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <FormControl fullWidth={true}  className="mt-16" style = {{width:"300px", marginLeft:"150px"}}>
                    <InputLabel >{<span>Please enter number of people</span>}</InputLabel>
                    <Select
                        onChange={(event) => this.handleChangeCountFood(event)}
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
                <Button variant="contained" onClick={this.addFood} color="primary" style={{marginTop:"10px", marginLeft:"50px"}}><BiAddToQueue/></Button>
                <Table className="crud-table" style={{ whiteSpace: "pre", width:"300px", marginLeft:"40%", marginTop:"30px"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Food</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.renderFoods(foods)}
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
        selectFood: (food,count) => {
            dispatch(SelectFood(food,count))
        },
        deleteFood: (food) => {
            dispatch(DeleteFood(food))
        },
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Step3);