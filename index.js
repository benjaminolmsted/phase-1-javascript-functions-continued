function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(flair = "*"){
    return function(msg = "special"){
       return `You are ${flair}${msg}${flair}!`;
    }
}

console.log(wrapAdjective('&&')('the bomb'));