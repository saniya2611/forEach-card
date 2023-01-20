
var cl = console.log;



// var skills = ["html","css","js","angular","react","TypeScript","Sass","ES6"]

// var skillInfo = document.getElementById("skillInfo");


// var result = `<ul class="list-group">`
// skills.forEach(function(s){
//       result += `<li class="list-group-item">I Like U ${s}</li>`;
// })

// result +=`</ul>`

// skillInfo.innerHTML=result;

// var imgArray =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

var imgArray =["http://source.unsplash.com/random?marvel",
                "http://source.unsplash.com/random?city",
                "http://source.unsplash.com/random?angular",
                "http://source.unsplash.com/random?js",
                "http://source.unsplash.com/random?react",
                "http://source.unsplash.com/random?html",
                "http://source.unsplash.com/random?typescript",
                "http://source.unsplash.com/random?css",
                "http://source.unsplash.com/random?flower",
                "http://source.unsplash.com/random?marvel",
                "http://source.unsplash.com/random?city",
                "http://source.unsplash.com/random?angular",
                "http://source.unsplash.com/random?js",
                "http://source.unsplash.com/random?react",
                "http://source.unsplash.com/random?html",
                "http://source.unsplash.com/random?typescript",
                "http://source.unsplash.com/random?css",
                "http://source.unsplash.com/random?flower",
                "http://source.unsplash.com/random?marvel",
                "http://source.unsplash.com/random?city",
                "http://source.unsplash.com/random?angular"

]
             
// var imgArray =[
  
// ]
var imgInfo= document.getElementById("imgInfo");


var result = ``;
imgArray.forEach(function(nums){
   result +=` 
      <div class="col-sm-4 mb-4">
        <div class="card">
          <div class="card-header">Image Name</div>
           <div class="card-body">
              <img src="${nums}" class="img-fluid img-round">
          </div>
        </div>
      </div>
    </div>`
})

imgInfo.innerHTML = result;












