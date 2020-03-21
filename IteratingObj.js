let iteraObj= {
    'foo' : 20, 
    'bar':30, 
    'fum':100, 
    'quux':500,  
    'spam':10
}
for(let key in iteraObj){
    console.log(`${key} is ${iteraObj[key]}`);
    //console.log(iteraObj.key);
}