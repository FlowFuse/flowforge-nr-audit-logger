/**
 * 
 */

const got = require('got')

module.exports = (settings) => {

  const baseURL = settings.loggingURL;
  const projectID = settings.projectID;
  const token = settings.token

  const logger = function(msg) {
    console.log(baseURL + '/' + projectID + '/audit');
    got.post(baseURL + '/' + projectID + '/audit',{
      json: msg ,
      responseType: 'json',
       headers:{
        'user-agent': "FlowForge Audit Logging v0.1",
        authorization: "Bearer " + token
      },
    })
    .catch (err => {
      //ignore errors for now
      console.log(err)
    })
  }

  return logger; 
}
