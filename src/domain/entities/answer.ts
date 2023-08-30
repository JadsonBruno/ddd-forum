import { randomUUID } from "crypto";

interface AnswerProps {
    content: string;
    authorId: string;
    questionId: string;
}

export class Answer {
    public id: string;
    public content: string;
    public questionId: string;
    public authorId: string;

    constructor (props: AnswerProps, id?: string) {
        const { authorId, content, questionId } = props;
        this.content = content;
        this.questionId = questionId;
        this.authorId = authorId;
        this.id = id ?? randomUUID();
    }
}
