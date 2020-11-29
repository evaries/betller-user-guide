import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import classes from './GuideWrapper.module.css';
import { END_GUIDE, NEXT_STEP, PREV_STEP } from '../../constants/actionType';

const GuideWrapper = (props) => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.isGuideStarted && state.currentStep === props.step);
  const step = useSelector((state) => state.steps[props.step]);
  const isLast = useSelector((state) => state.steps.length - 1 === props.step);
  const isFirst = props.step === 0;

  const skipHandler = () => {
    dispatch({ type: END_GUIDE });
  };
  const nextStepHandler = () => {
    if (!isLast) {
      dispatch({ type: NEXT_STEP });
    } else {
      dispatch({ type: END_GUIDE });
    }
  };
  const prevStepHandler = () => {
    dispatch({ type: PREV_STEP });
  };

  return (
    <>
      <OverlayTrigger
        show={isActive}
        placement='right'
        overlay={
          <Popover id='popover-basic'>
            <Popover.Title as='h3' className={classes.popover}>
              {step?.title}
            </Popover.Title>
            <Popover.Content className={classes.popover}>
              {step?.description}
              <div className={classes.navigation}>
                <Button variant='secondary' className={classes.skipButton} onClick={skipHandler}>
                  Skip
                </Button>
                <div className={classes.stepButtons}>
                  <Button variant='light' className={classes.prevButton} onClick={prevStepHandler} disabled={isFirst}>
                    Prev
                  </Button>
                  <Button variant='warning' className={classes.nextButton} onClick={nextStepHandler}>
                    {isLast ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </Popover.Content>
          </Popover>
        }>
        <div className={isActive ? classes.active : null}>{props.children}</div>
      </OverlayTrigger>
    </>
  );
};
export default GuideWrapper;
