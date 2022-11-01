export function calculateScrabbleScore(word) {
    let scoreArray = [['A',1],['B',3],['C',3],['D',2],['E',1],['F',4],['G',2],['H',4],['I',1],['J',8],['K',5],['L',1],['M',3],['N',1],['O',1],['P',3],['Q',10],['R',1],['S',1],['T',1],['U',1],['V',4],['W',4],['X',8],['Y',4],['Z',10]]
    let score = 0 

    for(let i=0; i<word.length; i++){
        for(let j = 0; j<scoreArray.length; j++){
            if(word[i].toUpperCase() === scoreArray[j][0]){
                score += scoreArray[j][1]
            }
        }  
    }
    return score
} 






//write a for loop that iterates through characters in a string
//find the corresponding key value pair for that character and add teh value to a variable (set to zero)


