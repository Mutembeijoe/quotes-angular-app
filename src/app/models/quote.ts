export class Quote {
    key: string;
    upvotes;
    downvotes;
    addedAt;
    isMostVoted;
    constructor(private body: string, private author: string, private submittedBy: string) {
        this.upvotes = 0;
        this.downvotes = 0;
        this.addedAt = Date.now();
    }
}

