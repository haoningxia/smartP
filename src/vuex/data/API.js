let DEBUG = process.env.NODE_ENV === 'production' ? true : false;
let USER_API = DEBUG ? '' : '';

const Constant = {
  debug: DEBUG,
  API: {
    token: USER_API + "/auth/oauth/token",
    currentUser: USER_API + "/api/user/currentUser",
    hello: USER_API + "/api/hello",    
  }

};
export default Constant;