const questions = [
    {
        'que': "Which of the following is markup language ?",
        'a': 'HTML',
        'b': 'CSS',
        'c': "JS",
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': "Which year JS launched ?",
        'a': '1999',
        'b': '2000',
        'c': "1995",
        'd': '1994',
        'correct': 'C'
    },
    {
        'que': "Waht does CSS stands for",
        'a': 'Hyper test mark up language',
        'b': 'cascading style sheet',
        'c': "Jason Object notation",
        'd': 'Helicoptop mototorbots lamborghini',
        'correct': 'b'
    },

]

let index=0;
let total = questions.length;
let right = 0, wrong = 0;
const questionBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll('.options')
const loadData = () =>{

    // calling reset
    if(index === total) {
        return endQuiz();
    } reset()

    data = questions[index]
    // console.log(data);
    questionBox.innerText = `${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

console.log(optionInput)

const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer();
    console.log(data.correct, ans)
    
    
    // checking the answer
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadData();
    return;
}


const getAnswer = () =>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked) {
                // console.log(input.value)
                answer = input.value;
                
            }
        }
    )
    return answer;
}


const reset = () => {
    optionInput.forEach((input)=>{
        input.checked = false;
    })
}


const endQuiz = ()=>{
    document.getElementById("box").innerHTML = `
    <h3>Thank you for playing quiz</h3>
    <h2>${right} / ${total} are correct</h2>
    `
}

// console.log("everything is fine")
loadData();