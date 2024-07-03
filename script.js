const quize =[
    {
        question:"what does HTML stands for?",
        options:["Hypertext Markup language","Hyper Transfer Markup language", "Hypertext Machine Language","HyperLink and Text Mark up Languge"],
        correct:0,
    },
    {
        question:"Which css property is use to controle the spacing between element"  ,
        options:["margin","padding","spacing","border-spacing"],
        correct:1,
    },
    {
        question:"What is the javascript function used to select an HTML element by its id?" , 
        options:["document.query","getElementById","selectElement","findElementById"],
        correct:1,
    },
    {
        question:"In React.js which hook is used to perform side effect in a function component ?",  
        options:["useEffect","useState","useContext","useReducer"],
        correct:0,
    },
    {
        question:"Which HTML tag is used to creat an order list?",   
        options:["<ul>","<li>","<ol>","<dl>"],
        correct:2,
    },
];
const quiz=document.getElementById("quize")
const ansele=document.querySelectorAll(".answer")
const [quesEle,option_1,option_2,option_3,option_4]=document.querySelectorAll("#question,.option_1,.option_2,.option_3,.option_4")
const sbmit=document.querySelector("#submit")
let qustionNo=0;
let score=0;
 const addquize=()=>{
    const {question, options}=quize[qustionNo]
   console.log(question) 
   console.log(options)   
     quesEle.innerText=`${qustionNo+1}:`+question//it is use to appear qustion
     options.forEach((currentopt,index) => 
        (window[`option_${index+1}`].innerText=currentopt )
     );
}
addquize()

let deselect=()=>{
    ansele.forEach((opt)=>{
        opt.checked=false
    })
}
let findansInd=()=>{
    let answerele=Array.from(ansele);
    return answerele.findIndex((option)=>option.checked)
}

sbmit.addEventListener('click',()=>{
    let ansindex=findansInd()
    console.log(ansindex)
    if (ansindex===quize[qustionNo].correct) {
        score=score+1
    }
    qustionNo++
    if (qustionNo<quize.length) {
        deselect()
        addquize()
    }
    else{
        quiz.innerHTML=`<div class="result">
       <h2>Your score: ${score}/${quize.length} Correct Answer </h2>
       <p>Congratulation For compliting Quize</p>
      <button onclick="location.reload()">Play again</button>
        </div>`
    }
})