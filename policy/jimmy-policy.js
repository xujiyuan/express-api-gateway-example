// content of ./policies/example-policy.js file
module.exports = {
  name: 'jimmy',
  schema: {
    $id: 'http://express-gateway.io/schemas/policies/jimmy-policy.json',
    type: object,
    properties: {
      baseUrl: {
        type: 'string',
        format: 'url',
        default: 'https://jimmy.com'
      }
    }
  },
  policy: (actionParams) => {
    return (req, res, next) => {
      console.log('executing policy-from-jimmy-plugin with params', actionParams);
      next() // calling next policy
      // or write response:  res.json({result: "this is the response"})
    };
  }
};