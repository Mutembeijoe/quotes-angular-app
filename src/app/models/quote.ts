export class Quote {
    upvotes;
    downvotes;
    createdAt;
    constructor(private body: string, private author: string, private submittedBy: string) {
        this.upvotes = 0;
        this.downvotes = 0;
        this.createdAt = new Date();
    }
}

