export class Quote {
    upvotes;
    downvotes;
    private addedAt;
    constructor(private body: string, private author: string, private submittedBy: string) {
        this.upvotes = 0;
        this.downvotes = 0;
        this.addedAt = new Date(2015, 7, 10);
    }

    get Age() {
        const now = Date.now();
        const milliseconds =  now - this.addedAt;
        return milliseconds;
    }
}

