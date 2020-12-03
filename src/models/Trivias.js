export const formatTrivia = (trivia) => {
    console.log('TRIVIA ====> ', trivia)
    const triviaFormat = {
        id: trivia.question.question_id,
        title: trivia.question.title,
        question: trivia.question.question,
        description: trivia.description,
        options : [
            ...trivia.question.answers
        ]
    }
    console.log('TRIVIA FORMAT ===> ', triviaFormat)
    return triviaFormat
}