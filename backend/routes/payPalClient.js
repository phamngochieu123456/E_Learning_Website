const payoutsNodeJssdk = require('@paypal/payouts-sdk');

function client() {
    return new payoutsNodeJssdk.core.PayPalHttpClient(environment());
}

function environment() 
{
    let clientId = process.env.CLIENTID_PAYPAL
    let clientSecret = process.env.CLIENTSECRET_PAYPAL
    return new payoutsNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
}

module.exports = { client: client};