const tab = document.getElementById("tab");
const inbox = document.getElementById("inbox")
const list = document.getElementById('list')
let lists = []
let tabs = [];

for(let i = 0; i < tab.children.length;i++ ){
    tabs[i] = tab.children[i]
    tabs[i].order = i;
     tabs[i].addEventListener('click', function(e){
         clear_('istab');
        console.log(tabs[i] + "/ order:" + tabs[i].order) 
        e.target.classList.add('active');
        changePos(tabs[i].order);
    })   
}

function changePos(order){
/*    if(order == 0){
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
    }*/
}

function clear_(act){
    if(act == 'istab'){
        for(let i = 0; i < tabs.length;i++){
            tabs[i].classList.remove('active');
        }
    }
    else if(act == 'islist'){
        for(let i = 0; i < lists.length;i++){
            lists[i].classList.remove('active');
        }
    }
}


//------------------------------------------
for(let i = 0; i<list.children.length;i++){
    lists[i] = list.children[i]
    lists[i].addEventListener("click", function(e){
        if(e.target == e.currentTarget){
        clear_('islist'); 
        e.target.classList.add('active');}
    })
}

const listobj =[   
    {
        names : 'asd',
        content : 'adf'
    },
    {
        names : 'qwer',
        content : 'qwe' 
    }
]
