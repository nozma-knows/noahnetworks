/* eslint-disable-line */ const aws = require('aws-sdk');

exports.handler = async (event, context, callback) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
  
  const adminEmails = ["n.milberger@gmail.com", "higgsmo16@gmail.com"]
  
  let isAdmin = false

  if (adminEmails.indexOf(event.request.userAttributes.email) !== -1) {
    isAdmin = true
  }
  
  if (isAdmin) {

    const groupParams = {
      GroupName: process.env.GROUP,
      UserPoolId: event.userPoolId,
    };
  
    const addUserParams = {
      GroupName: process.env.GROUP,
      UserPoolId: event.userPoolId,
      Username: event.userName,
    };
  
    try {
      await cognitoidentityserviceprovider.getGroup(groupParams).promise();
    } catch (e) {
      await cognitoidentityserviceprovider.createGroup(groupParams).promise();
    }
    
    await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();

  }
  
};
