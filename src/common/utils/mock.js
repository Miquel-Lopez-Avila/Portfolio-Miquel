import { minimumLoadingTime } from '../../application/config/variables';

export const wait = (fn, time = minimumLoadingTime) => setTimeout(fn, time);
