const handler = async (event, context) => {
    console.log('Handler called!');
    return {
        statusCode: 200
    };
}

module.exports = {
    handler: handler
}
