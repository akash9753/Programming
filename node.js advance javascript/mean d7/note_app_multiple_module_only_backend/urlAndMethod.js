function urlAndMethod(request){
    console.log(`---------------New Request-----------------------`)
    const url = request.url
    const method = request.method
    const body = request.body
    /*const arr = [{'requestURL' : request.url},
                {'requestMethod' :request.method}
                 {'body':request.body}]
    
    response.send(arr)*/
    const urlAndMethod = [{"URL":url},{"METHOD":method},{"body":body}]
    return urlAndMethod
}
module.exports = {
    urlAndMethod : urlAndMethod
}