function f_to_c(temp){
      return (temp -32) * (5/9)
}

function ttoc(){
    const ft = [97,95,99,96,]
    const ct = ft.map(f_to_c)
    console.log(ft)
    console.log(ct)
}
ttoc()