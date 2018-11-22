export class Video {
    url: string;
    title: string;
    category: string;
    description: string;
    thumbnail: string;
    addedDate: Date;

    constructor() {
        this.url = '';
        this.title = '';
        this.category = '';
        this.description = '';
        this.thumbnail = '';
    }
}
