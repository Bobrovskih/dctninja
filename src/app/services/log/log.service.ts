import { environment } from '../../../environments/environment';

/** не работает в prod */
const log = environment.production ? (...args) => { } : console.log;

export {
  log,
};
