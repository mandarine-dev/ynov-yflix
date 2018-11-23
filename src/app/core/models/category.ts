export class Category {
    name: string;
    spanish_name: string;
    english_name: string;
    french_name: string;

    constructor(data?: any) {
        this.name = data ? data : '';
        this.spanish_name = data ? data : '';
        this.english_name = data ? data : '';
        this.french_name = data ? data : '';
    }
}
