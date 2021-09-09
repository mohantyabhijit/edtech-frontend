import {CognitoUserPool, CognitoUserAttribute} from 'amazon-cognito-identity-js'
//npm i amazon-cognito-identity-js -> command needs to be run to use cognito on react.


const poolData = 
{
 UserPoolId: 'ap-southeast-1_5lVGOsa13Rasdasdasdas',
 ClientId: '2u76798ruo0khkq5casdasdasd7k95rol5'
}

export default new CognitoUserPool(poolData);
