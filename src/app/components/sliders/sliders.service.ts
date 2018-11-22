import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Video } from '@app/core/models/video';
import { Observable } from 'rxjs';
import { Playlist } from './playlist.model';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  constructor(private afs: AngularFirestore) { }

  getPlaylists(): Observable<Playlist[]> {
    return this.afs.collection<Playlist>('playlists').valueChanges();
  }

  getVideos(playlist: string): Observable<Video[]> {
    return this.afs.collection<Video>(`playlists/${playlist}/videos`, ref => ref.orderBy('addedDate', 'desc')).valueChanges();
  }

  addVideo(video: Video) {
    console.log('addVideo', video);
    this.afs.firestore.collection('playlists').doc(video.category).collection('videos').add({
      url: video.url,
      title: video.title,
      category: video.category,
      description: video.description,
      thumbnail: video.thumbnail,
      addedDate: new Date()
    });
  }

}
