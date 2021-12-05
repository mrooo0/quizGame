const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズを用意
const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    }, {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    }, {
        question: 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: [
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct: 'セシル'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('quiz').textContent = quiz[quizIndex].question;
    
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();


const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }
    
    quizIndex++;
    
    if(quizIndex < quizLength) {
        setupQuiz();
    } else {
        const result = confirm('終了！あなたの正解数は' + score + '/' + quizLength + 'です！' + '\n\n' + '[OK]リトライ／[キャンセル]終了');
        if(result) window.location.reload();
    }
};


let handleIndex = 0;
while(handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
    });
    handleIndex++;
}
