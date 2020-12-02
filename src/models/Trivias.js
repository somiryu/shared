export const formatTrivia = (trivia) => {
    const triviaFormat = {
        id: trivia.question.question_id,
        title: trivia.question.title,
        question: trivia.question.question,
        description: trivia.description,
        options : [
            ...trivia.question.answers
        ]
    }
    return triviaFormat
}