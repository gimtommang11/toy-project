const tab = document.getElementById("tab");
const inbox = document.getElementById("inbox")
const menu = document.getElementById('menu');
let tabs = [];

for(let i = 0; i < tab.children.length;i++ ){
    tabs[i] = tab.children[i]
    tabs[i].order = i;
     tabs[i].addEventListener('click', function(e){
         clear_();
        console.log(tabs[i] + "/ order:" + tabs[i].order) 
        e.target.classList.add('active');
        changePos(tabs[i].order);
    })   
}

function changePos(order){
    if(order == 0){
        inbox.innerText = "case0"
        console.log("0 is clicked")
    }
    else if(order == 1){
        inbox.innerText = "case1"
        console.log("1 is clicked")
    }
    else if(order == 2){
        inbox.innerText ='case2'
        console.log("2 is clicked")
        inbox.innerHTML = `
        <div id = compose>compose</div>
        <div id = menu></div>       <!--inbox/tag-->
        <form ><input type="text" id="search" value="search"></form>
        <div id = userList>
            <ul id = list>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
            </ul>
       </div>
        <div id="mainText">
            <div id="nameBox">
                <p id="name"></p>
            </div>
            <div id = contentBox>
                <p id=content></p>
            </div>
        </div>
        `;
    }
    else{
        inbox.innerText = "case3"
        console.log("3 is clicked")
    }
}

function clear_(){
    for(let i = 0; i < tabs.length;i++){
        tabs[i].classList.remove('active');
    }

}

function some(){
    console.log(tabs[0].order);
}