import { combineReducers } from 'redux';

const initialState = {
  admissionData: null,
};

const admissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ADMISSION_DATA':
      return {
        ...state,
        admissionData: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  admission: admissionReducer,
});

export default rootReducer;
