enum Shoes {
  Nike = "나이키",
  Puma = "퓨마",
  Sbenu = "스베누",
}

const myShoes = Shoes.Nike;
console.log(myShoes);


enum Answer {
  YES = 'Y',
  NO = 'N '
}
const askQuestion(answer: Answer) {
  if(answer === Answer.YES) console.log('정답입니다')
  if (answer === Answer.NO) console.log('오답입니다')
}
 

askQuestion(Answer.YES)