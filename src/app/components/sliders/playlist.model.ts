import { Video } from '@app/core/models/video';

export interface Playlist {
    name: string;
    spanish_name: string;
    english_name: string;
    french_name: string;
    videos: Video[];
}
