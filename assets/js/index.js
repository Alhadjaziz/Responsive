let icon = document.QuerySelector(".icon")
let ul = document.QuerySelector("ul")

icon.addEventListener("clock" ,()=>{
    ul.classlist.toogle("shadowData");
    
    if(ul.className =="showData"){
        document(getElementBayId("bar").className="fa-solid fa-xmark")
    }
})