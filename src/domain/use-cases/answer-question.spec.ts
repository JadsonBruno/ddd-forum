import { test, expect } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { AnswersRepository } from "../repositories/answers-repository";
import { Answer } from "../entities/answer";

const fakeAnswerRepository: AnswersRepository = {
    create: async (answer: Answer) => {
        return;
    }
}

test('create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);
    const content = 'new answer';

    const answer = await answerQuestion.execute({
        content: content,
        questionId: '1',
        instructorId: '1'
    });

    expect(answer.content).toEqual(content);
});
