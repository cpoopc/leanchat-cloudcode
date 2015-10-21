var AV = require('leanengine');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function(request, response) {
  response.success('Hello world!');
});

AV.Cloud.define('cpTestFun1',function(request, response){
  var postQuery = new AV.Query('Post');
        postQuery.limit(10);
        postQuery.find({
            success: function(result) {
                // result is 'Hello world!'
                console.log('query success:'+result)
                response.success(result);

            },
            error: function(error) {
                console.log('fail:'+error.message)
                response.error('post lookup failed'+error.message);
            }
        })
});

module.exports = AV.Cloud;
