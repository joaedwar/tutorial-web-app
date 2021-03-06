import { walkthroughTypes } from '../constants';
import { walkthroughServices } from '../../services';

const getWalkthrough = (language, id) => ({
  type: walkthroughTypes.GET_WALKTHROUGH,
  payload: walkthroughServices.getWalkthrough(language, id)
});

const getCustomWalkthroughs = () => ({
  type: walkthroughTypes.GET_WALKTHROUGHS,
  payload: walkthroughServices.getCustomWalkthroughs()
});

const getWalkthroughInfo = id => ({
  type: walkthroughTypes.GET_WALKTHROUGH_INFO,
  payload: walkthroughServices.getWalkthroughInfo(id)
});

export { getWalkthrough, getCustomWalkthroughs, getWalkthroughInfo };
