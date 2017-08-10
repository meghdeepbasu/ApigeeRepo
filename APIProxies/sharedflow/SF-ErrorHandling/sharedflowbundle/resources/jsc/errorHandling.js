try{
    var status_code= context.getVariable("error.status.code");
    var faultname=context.getVariable("fault.name");
    var body=context.getVariable("error.body");
    
    if(faultname== "access_token_expired"){
        context.setVariable('api-error.code', '400');
        context.setVariable('api-error.message', 'Access token expired');
        context.setVariable('api-error.status_code', '401');
        context.setVariable('api-error.reason_phrase', 'Unauthorized Access');
    
    } else if(faultname== "access_token_not_approved"){
        context.setVariable('api-error.code', '400');
        context.setVariable('api-error.message', 'Access token not approved');
        context.setVariable('api-error.status_code', '401');
        context.setVariable('api-error.reason_phrase', 'Unauthorized Access');
    
    } else if(faultname== "InvalidAPICallAsNoApiProductMatchFound"){
        context.setVariable('api-error.code', '400');
        context.setVariable('api-error.message', 'No API Product Found');
        context.setVariable('api-error.status_code', '400');
        context.setVariable('api-error.reason_phrase', 'Bad Request');
    
    } else if(faultname== "SpikeArrestViolation"){
        context.setVariable('api-error.code', '400');
        context.setVariable('api-error.message', 'Spike Arrest Raised');
        context.setVariable('api-error.status_code', '500');
        context.setVariable('api-error.reason_phrase', 'Internal Server Error');
    
    } else if((faultname == "MethodNotAllowed") || (status_code== "405")) {
        context.setVariable('api-error.code', '405');
        context.setVariable('api-error.message', 'Method Not Allowed');
        context.setVariable('api-error.status_code', '405');
        context.setVariable('api-error.reason_phrase', 'Method Not Allowed');
    
    } else if((faultname== "invalid_access_token") || (faultname== "InvalidAccessToken")) {
        context.setVariable('api-error.code', '400');
        context.setVariable('api-error.message', 'Invalid Access Token');
        context.setVariable('api-error.status_code', '401');
        context.setVariable('api-error.reason_phrase', 'Unauthorized Access');
    
    } else if((faultname== "FailedToResolveAPIKey") || (faultname== "InvalidApiKey")) {
        context.setVariable('api-error.code', '400');
        context.setVariable('api-error.message', 'Invalid API Key');
        context.setVariable('api-error.status_code', '401');
        context.setVariable('api-error.reason_phrase', 'Unauthorized Access');
        
    } else if(status_code=="400"){
        context.setVariable('api-error.code', '400');
        context.setVariable('api-error.message', 'Bad Request');
        context.setVariable('api-error.status_code', '400');
        context.setVariable('api-error.reason_phrase', 'Bad Request');
    
    } else if(status_code=="401"){
        context.setVariable('api-error.code', '401');
        context.setVariable('api-error.message', 'Authentication Failed');
        context.setVariable('api-error.status_code', '401');
        context.setVariable('api-error.reason_phrase', 'UnAuthorized Access');
    
    } else if(status_code=="404"){
        context.setVariable('api-error.code', '400');
        context.setVariable('api-error.message', 'Service Not Found');
        context.setVariable('api-error.status_code', '404');
        context.setVariable('api-error.reason_phrase', 'Resource Not Found');
    
    } else if(status_code== "504"){
        context.setVariable('api-error.code', '504');
        context.setVariable('api-error.message', 'Gateway Timeout');
        context.setVariable('api-error.status_code', '504');
        context.setVariable('api-error.reason_phrase', 'Gateway Timeout');
    }
    
}
catch(e)
{
    context.setVariable('api-error.code', '500');
    context.setVariable('api-error.message', 'Error');
    context.setVariable('api-error.status_code', '500');
    context.setVariable('api-error.reason_phrase', 'Internal Server Error');
}