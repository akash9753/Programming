function createResult(error, dbResult){
    const result = {status: ''}
    if(error){
      console.log(`Error :`)
      console.log(error)
      result['status'] = 'error'
      result['error'] = error
      
    }else{
        console.log(`dbResult :`)
        console.log(dbResult)
        result['status'] = 'success'
        result['data'] = dbResult
    }
    return result
}
module.exports = {
    createResult : createResult
}