const handler = async (event, context) => {
    console.log('Handler called!');
    return {
        statusCode: 200,
        body: '<html><body><h1>Hello world!</h1></body></html>'
    };
}

module.exports = {
    handler: handler
}
