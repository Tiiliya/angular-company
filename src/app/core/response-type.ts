export class Res{
    constructor(
        public code: number,
        public status: boolean,
        public message: string,
        public data: any
    ){}
}