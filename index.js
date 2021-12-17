

var inputbox= document.getElementById("search");
var search= document.getElementById("search-btn");
var city= document.getElementById("cityName");
search.addEventListener("click", fetchWeather);
// city.addEventListener("click", fetchWeatherInfo);

var arr=[];
var bool= true;

async function fetchWeather(){

    let name= inputbox.value;

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===name){
            bool=false;
            let cityList= document.getElementById(name);

            for(let j=0;j<cityList.childElementCount;j++){
                cityList.children[j].classList.add("highlight");

                setTimeout(function () {
                    cityList.children[j].classList.remove("highlight");
                }, 2000);
            }

        }
    }

    if(bool){
        arr.push(name);
        console.log("after",arr);
        console.log("after",bool);
        let url= `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${name}`;
        let res= await fetch(url);
        let resJSON= await res.json();
        console.log(resJSON);
        let data= document.getElementById("data");

        let dataList= document.createElement('ul');
        dataList.setAttribute('class','data-list');
        dataList.setAttribute('id',name);

        let liCity= document.createElement('li');
        liCity.setAttribute('id','city');
        liCity.innerHTML= name;
        dataList.appendChild(liCity);

        let liDesc= document.createElement('li');
        liDesc.setAttribute('id','list');

        let desc= document.createElement('input');
        desc.setAttribute('id','desc-text');
        desc.value= `${resJSON.description}`;
        liDesc.appendChild(desc);
        dataList.appendChild(liDesc);

        let liTemp= document.createElement('li');
        liTemp.setAttribute('id','temp');
        liTemp.innerHTML= `${resJSON.temp_in_celsius}`;
        dataList.appendChild(liTemp);

        let liPres= document.createElement('li');
        liPres.setAttribute('id','temp');
        liPres.innerHTML= `${resJSON.pressure_in_hPa}`;
        dataList.appendChild(liPres);

        let liAge= document.createElement('li');
        liAge.setAttribute('id','age');
        liAge.innerHTML= `${resJSON.temp_in_celsius}`;
        dataList.appendChild(liAge);

        let liDel= document.createElement('li');
        liDel.setAttribute('id',`del${name}`);
        liDel.addEventListener("click",deleteList);

        let delLink= document.createElement('a');
        delLink.innerHTML="Delete";
        delLink.href="#";
        liDel.appendChild(delLink);
        dataList.appendChild(liDel);

        data.appendChild(dataList);

        // bool=true;
        var del= document.getElementById(`del${name}`);
        console.log("del",del);

        function deleteList(){
            console.log("hi");
            let btn= document.getElementById(`del${name}`);
            btn.parentElement.remove();
            
        }

    }
    
    bool=true;

}
async function fetchWeatherInfo(name,event){

    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]===name){
            bool=false;
            let cityList= document.getElementById(name);
            console.log(cityList);
            console.log(cityList.children);

            for(var j=0;j<cityList.childElementCount;j++){
                cityList.children[j].classList.add("highlight");
                setTimeout(function () {
                    //console.log("cityList.children[j].classList",cityList.children[j].classList);
                    cityList.children[j].classList.remove("highlight");
                }, 2000);
            }

        }
    }

    if(bool){

    //let name= city.innerHTML;
        arr.push(name);
        console.log(event);
        event.target.style.backgroundColor="green";
        let url= `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${name}`;
        let res= await fetch(url);
        let resJSON= await res.json();
        console.log(resJSON);
        let data= document.getElementById("data");

        let dataList= document.createElement('ul');
        dataList.setAttribute('class','data-list');

        let liCity= document.createElement('li');
        liCity.setAttribute('id','city');
        liCity.innerHTML= name;
        dataList.appendChild(liCity);

        let liDesc= document.createElement('li');
        liDesc.setAttribute('id','list');

        let desc= document.createElement('input');
        desc.setAttribute('id','desc-text');
        desc.value= `${resJSON.description}`;
        liDesc.appendChild(desc);
        dataList.appendChild(liDesc);

        let liTemp= document.createElement('li');
        liTemp.setAttribute('id','temp');
        liTemp.innerHTML= `${resJSON.temp_in_celsius}`;
        dataList.appendChild(liTemp);

        let liPres= document.createElement('li');
        liPres.setAttribute('id','pressure');
        liPres.innerHTML= `${resJSON.pressure_in_hPa}`;
        dataList.appendChild(liPres);

        let liAge= document.createElement('li');
        liAge.setAttribute('id','age');
        liAge.innerHTML= `${resJSON.temp_in_celsius}`;
        dataList.appendChild(liAge);

        let liDel= document.createElement('li');
        liDel.setAttribute('id',`del${name}`);
        liDel.addEventListener("click",deleteList);

        let delLink= document.createElement('a');
        delLink.innerHTML="Delete";
        delLink.href="#";
        liDel.appendChild(delLink);
        dataList.appendChild(liDel);
        dataList.appendChild(liDel);

        data.appendChild(dataList);
        // bool= true;
        var del= document.getElementById(`del${name}`);
        console.log("del",del);

        function deleteList(){
            console.log("hi");
        
            let btn= document.getElementById(`del${name}`);
            btn.parentElement.remove();
            
        }

    }
    bool=true;

}

// async function deleteList(){
//     var del= document.getElementById("del");
//     console.log("del",del);
//     del.addEventListener("click",deleteList);
// }

//deleteList();
