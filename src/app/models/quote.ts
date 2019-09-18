export class Quote {
    upvotes;
    downvotes;
    constructor(private body: string, private author: string, private submittedBy: string) {
        this.upvotes = 0;
        this.downvotes = 0;
    }
}

