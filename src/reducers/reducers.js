import { NEXT_STEP, PREV_STEP, START_GUIDE, END_GUIDE } from '../constants/actionType';
import { steps } from './steps';

const initialState = {
  isGuideStarted: false,
  currentStep: 0,
  steps,
};
const guideReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GUIDE:
      return { ...state, isGuideStarted: true };
    case NEXT_STEP:
      return { ...state, currentStep: state.currentStep + 1 };
    case PREV_STEP:
      return { ...state, currentStep: state.currentStep - 1 };
    case END_GUIDE:
      return { ...state, isGuideStarted: false };
    default:
      return state;
  }
};
export default guideReducer;
