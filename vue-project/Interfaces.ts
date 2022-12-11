export interface techStackObject {
    name: string;
    logoURL: string;
    type: 'back' | 'front' | "process" | 'language' | 'testing';
};

export interface projectObject {
    name: string;
    imageURL: string;
    stack: string[];
    status: 'Work In Progress' | 'Finished';
    codeURL: string;
    liveURL: string;
    description: string;
}