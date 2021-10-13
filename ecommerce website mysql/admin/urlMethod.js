function urlMethod(request){
    
    const url = request.url
    const method = request.method
    const body = request.body

    const urlMethod = [{"inside this router": url},{"METHOD" : method},{"BODY" : body}]
    return urlMethod
}
module.exports = {
    urlMethod : urlMethod
}