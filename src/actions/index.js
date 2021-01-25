export const selectCar = (car) => {
    console.log("selectCart car", car);
    return {
        type: 'SELECTED_CAR',
        payload: car
    }
}

export const addCarsList = (list) => {
    console.log("addCarsList list", list);
    return {
        type: 'ADD_CARS_LIST',
        payload: list
    }
}