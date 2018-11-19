import { Profile } from './profile';

export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    favoriteColor?: string;
    profiles?: Profile[];
    subtitleEnabled?: boolean;
    culture?: string;
}
