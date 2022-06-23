const ul = document.querySelector("ul"),
input = ul.querySelector("input");

let tags = [];

function createTag(){
    
    
    tags.slice().reverse().forEach(tag => {
        let liTag =`<li>${tag} <i class="uit uit-multiply" onclick=" remove(this, `$(tag)`) "></i></li>`
        ul.insertAdjacentHTML("afterbegin",liTag);
       
    });
}

function addTag(e){ 
    ul.querySelectorAll("li").forEach(li => li.remove());

    if(e.key == "Enter"){
        let tag = e.target.value.replace(/\s+/g, ' ');
        
    if(tag.length>1 && !tags.includes(tag)){
      tag.split(',').forEach(tag=> {
        tags.push(tag);
        createTag();
      });
     
    }
    e.target.value = "";
    }
 
}


input.addEventListener("keyup",addTag);