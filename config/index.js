
import _ from 'lodash';


let config = {
  env: process.env.NODE_ENV || 'development',
  logging: false,

  secrets: {
    firebase: 'fireSecret',
    key: 'asd'
  }
}

const appropriate = require(`./${config.env}`).default;

export default _.merge(config, appropriate || {});
