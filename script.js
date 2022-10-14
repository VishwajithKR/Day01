var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true);

request.send();

request.onload = function(){
   
    var data = JSON.parse(request.response);
   
     console.log(data);

    // for(i=0;i<data.length;i++){

        // console.log(data[i]);

        var num = data.filter((ele)=>ele.population<100000)
        console.log(num);
    }
// }

// var num = data.filter((ele)=>ele.population<100000)
// console.log(num.map((ele)=>ele.capital));