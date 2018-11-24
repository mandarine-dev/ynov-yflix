import { Video } from '@app/core/models/video';

export interface Playlist {
    name: string;
    videos: Video[];
}
