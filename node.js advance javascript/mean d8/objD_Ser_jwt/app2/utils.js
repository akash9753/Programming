function createResult(error,data){
    const result = {}
    if(error){
    console.log(`------------Error-------------`)
    console.log(error)
    result['status'] = 'error'
    result['error'] = error 
    }else{
        console.log(`------------Congratulation bro u did it-------------`)
        console.log(data)
        result['status'] = 'success'
        result['data'] = data
    }
    return result
}

module.exports = {
    createResult : createResult
}