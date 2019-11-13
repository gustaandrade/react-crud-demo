export const addCarsToStore = cars => ({
  type: "ADD_CARS_TO_STORE",
  cars
});

export const addQueryToStore = query => ({
  type: "ADD_QUERY_TO_STORE",
  query
});

export const addBrandsToStore = brands => ({
  type: "ADD_BRANDS_TO_STORE",
  brands
});

export const filterCar = car => ({
  type: "FILTER_CAR",
  car
});

export const registerCar = car => ({
  type: "REGISTER_CAR",
  car
});

export const editCar = car => ({
  type: "EDIT_CAR",
  car
});

export const deleteCar = car => ({
  type: "DELETE_CAR",
  car
});
