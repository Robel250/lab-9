function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

delay(1000).then(()=>console.log("1 second has passed"));





function fetchData(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            const randomNumber=Math.floor(Math.random()*100)+1;
            resolve(randomNumber);
        },1000);
    });
}
fetchData().then(data => console.log("Fetched data:", data));




function processData(data){
    return new Promise(resolve=>{
        console.log("processing data",data);
        setTimeout(()=>{resolve(data*2);

        },1000);
    });
}
processData(10).then(result => console.log("New data:", result));






fetchData()
    .then(data => processData(data))
    .then(result => console.log("Final result:", result));


