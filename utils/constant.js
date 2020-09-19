module.exports = {
    jwt: {
        issuer: 'itsMe',
        audience: 'fitfigo.com',
        salt: 10,
        expiration: '90d',
        algorithm: 'RS256'
    }
};