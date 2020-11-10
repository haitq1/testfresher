import * as Types from '../constants/index';

export const SelectMeal = (meal) => {
    return {
        type: Types.SELECT_MEAL,
        meal
    }
}
export const SelectPeople = (people) => {
    return {
        type: Types.SELECT_PEOPLE,
        people
    }
}
export const SelectRestaurant = (restaurant) => {
    return {
        type: Types.SELECT_RESTAURANT,
        restaurant
    }
}
export const SelectFood = (name, count) => {
    var food = {};
    food.name = name;
    food.count = count;
    return {
        type: Types.SELECT_FOOD,
        food
    }
}

export const ResetValue = () => {
    return {
        type: Types.RESET_VALUE
    }
}

export const DeleteFood = (food) => {
    return {
        type: Types.DELETE_FOOD,
        food
    }
}
