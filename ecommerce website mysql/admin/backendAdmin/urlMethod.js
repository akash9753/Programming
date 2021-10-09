function urlMethod(request){
    console.log('------------------------------------------------- ')
    console.log('-----------------New Request--------------------- ')
    console.log('------------------------------------------------- ')
    const url = request.url
    const method = request.method
    const body = request.body

    const urlMethod = [{"URL": url},{"METHOD" : method},{"BODY" : body}]
    return urlMethod
}
module.exports = {
    urlMethod : urlMethod
}