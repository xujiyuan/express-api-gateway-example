module.exports = {
  name: 'jwtScopes',
  policy: (actionParams) => {
    return (req, res, next) => {
      console.log('The Jwt token can be passed here ...');
      //console.log('executing policy example with params', req);
      next();
    }
  },
  schema: { // This is for Admin API to validate params
    $id: 'http://express-gateway.io/models/applications.json',        
    type: 'object'
  }
}