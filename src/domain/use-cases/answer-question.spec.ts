import { test, expect } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";


test('create an answer', () => {
    const answerQuestion = new AnswerQuestionUseCase();
    const content = 'new answer';

    const answer = answerQuestion.execute({
        content: content,
        questionId: '1',
        instructorId: '1'
    });

    expect(answer.content).toEqual(content);
});
