
console.log(`loading configuration (dev mode=${__DEV__})`);

const config = {
  // TODO: domain name of your heroku app, e.g.:
  //   API_BASE: 'https://foo-bar-baz.herokuapp.com',
  API_BASE: 'https://aqueous-hollows-28817.herokuapp.com',


  // can use same client/api id as in module 3 project
  AUTH0_DOMAIN: 'wdevils.auth0.com',
  AUTH0_CLIENT_ID: '2Vhbvnkp2O8osKjuatLOIjOB5EsHcFHl',
  AUTH0_API_ID: 'https://wdevils.auth0.com/api/v2/',
}

const devModeOverrides = {
  // TODO: in some expo modes, you need to set this to the IP address of your
  //   computer, rather than just 'localhost'. E.g.:
   //API_BASE: 'http://localhost:3000',
  API_BASE: 'http://10.128.134.118:3000'

}

if (__DEV__) {
  Object.assign(config, devModeOverrides)
}

console.log('config:', config)

export default config;
