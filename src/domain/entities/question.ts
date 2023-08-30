import { randomUUID } from "crypto";

interface QuestionProps {
    title: string;
    content: string;
    authorId: string;
}

export class Question {
    public id: string;
    public title: string;
    public content: string;
    public authorId: string;

    constructor (props: QuestionProps, id?: string) {
        const  { title , content, authorId } = props;
        this.title = title;
        this.content = content;
        this.authorId = authorId;
        this.id = id ?? randomUUID();
    }
}
