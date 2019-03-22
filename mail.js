
//추가된 list는 appendchild로
const tab = document.getElementById("tab");
const inbox = document.getElementById("inbox")
const list = document.getElementById('list')
const inboxName = document.getElementById('inboxName');
//--글 써주는곳
const tagName = document.getElementById ('tagName');
const mailTitle = document.getElementById('mailTitle');
const userName = document.getElementById('userName');
const mailDate = document.getElementById('mailDate');
const content = document.getElementById('content');
const susericon = document.getElementById('usericon');       //색바꾸기
//--태그개수
const tagCount = document.getElementsByClassName('count')       //배열임

//--검색기q능
const searchVal = document.getElementById('search').value;

let lists = []
let tabs = [];      
let Sales =0;
let Marketing = 0;
let Design = 0;
let FrontEnd = 0;

for(let i = 0; i < tab.children.length;i++ ){       //사이드탭 클릭하면 색 변하는 이벤트
    tabs[i] = tab.children[i]
    tabs[i].order = i;
     tabs[i].addEventListener('click', function(e){
        if(e.target == e.currentTarget){
        clear_('istab');
        console.log(tabs[i] + "/ order:" + tabs[i].order) 
        e.target.classList.add('active');
        e.target.style.borderLeft= '5px solid #a3a0fb';
        changePos(tabs[i].order);
        
        }
    })   
}

function changePos(order){
   if(order == 0){
        inboxName.innerText = "Home"
        console.log("0 is clicked")
        inbox.style.visibility='hidden'
    }
    else if(order == 1){
        inboxName.innerText = "Customers"
        console.log("1 is clicked")
        inbox.style.visibility='hidden'
    }
    else if(order == 2){
        inboxName.innerText ='Inbox'
        console.log("2 is clicked")
        inbox.style.visibility='inherit'
    }
    else{
        inboxName.innerText='Settings'
        console.log("3 is clicked")
        inbox.style.visibility='hidden'
    }
}

function clear_(act){
    if(act == 'istab'){
        for(let i = 0; i < tabs.length;i++){
            tabs[i].classList.remove('active');
            tabs[i].style.borderLeft= 'none';
        }
    }
    else if(act == 'islist'){
        for(let i = 0; i < list.children.length;i++){
            console.log("removed")
            list.children[i].classList.remove('active');
        }
    }
}

//------------------------------------------
const mailList =[   
    {
        names :'David James',
        content : 'Hi David,<br>Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.<br> Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum<br> Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum ',
        title : 'Protective Preventative Maintenance',
        maildate :'Jan 5',
        iconColor:'#1abc9c',
        tagName: "Design",
        tagColor: "#ff6565"

    },
    {
        names :'a',
        content : 'dddddddd',
        title : 'cccccc',
        maildate :'Jan d',
        iconColor:'#9b59b6',
        tagName: "Marketing",
        tagColor: "#3b86ff"
    },
    {
        names :'Tony Stark',
        content : 'Hi David,<br>Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.<br> Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum<br> Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum ',
        title : 'Does this mail service work well?',
        maildate :'Jan 5',
        iconColor:'#3b86ff',
        tagName: "Design",
        tagColor: "#ff6565"
    },
    {
        names :'Tony Stark',
        content : 'Hi David,<br>Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.<br> Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum<br> Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum ',
        title : 'Does this mail service work well?',
        maildate :'Jan 5',
        iconColor:'#3b86ff',
        tagName: "Design",
        tagColor: "#ff6565"
    }
]  
const renderList = [];
listRendering();
function listRendering() {      //mailList에 있는것들을 정보화
    for(let i = 0; i<mailList.length; i++){
        renderList[i] = `<li>
        <div class="userprvicon" id="DavidJames" style="background: ${mailList[i].iconColor}"></div>
        <div class="userprvName">${mailList[i].names}</div>
        <div class="userprvContent">${mailList[i].title}</div>
    </li>`
        countTag(i);
    }
    const renderListText = renderList.join('');     //문자열로 합침
    list.innerHTML=renderListText;     //정보화된걸 그려줌
    
    for(let i=0; i<renderList.length; i++){     //메일리스트 이벤트
        console.log(list.children);
        list.children[i].addEventListener("click", function(e){
            e.stopPropagation();
            console.log(e.target);
            console.log('aa');  
            clear_('islist');   
            e.currentTarget.classList.add('active');
            mainTextShow(i);
            
        })
    }
    tagShow()
    return renderList;
}


function mainTextShow(listIndex){
    mailTitle.innerHTML = mailList[listIndex].title;
    userName.innerHTML = mailList[listIndex].names;
    mailDate.innerHTML = mailList[listIndex].maildate;
    content.innerHTML = mailList[listIndex].content;
    usericon.style.backgroundColor = mailList[listIndex].iconColor;
    tagName.innerText = mailList[listIndex].tagName;
    tagName.style.backgroundColor = mailList[listIndex].tagColor;
}

function countTag(i){
    if(mailList[i].tagName == 'Sales'){
        Sales+=1;
    }
    else if(mailList[i].tagName == 'Marketing'){
        Marketing+=1;
    }
    else if(mailList[i].tagName == 'Design'){
        Design+=1;
    }
    else{
        FrontEnd+=1;
    }
    
}

function tagShow(){
    tagCount[0].innerText = Sales;
    tagCount[1].innerText =Marketing;
    tagCount[2].innerText = Design;
    tagCount[3].innerText = FrontEnd;
}

function search(){
    for(let i = 0; i < listobj.length;i++){
 
    }
}  