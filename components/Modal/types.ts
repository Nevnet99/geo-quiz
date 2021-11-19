export interface Props {
    title: string;
    question?: string;
    image?: {
        src: string;
        alt?: string;
    };
    answers: [
        {
            text: string;
            correct: boolean;
        }
    ];
}
