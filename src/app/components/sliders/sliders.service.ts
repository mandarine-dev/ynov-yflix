import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '@app/core/models/category';
import { Video } from '@app/core/models/video';
import { NotifyService } from '@app/core/services/notify.service';
import { Observable } from 'rxjs';
import { Playlist } from './playlist.model';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  constructor(private afs: AngularFirestore, private notifySvc: NotifyService) { }

  getPlaylists(): Observable<Playlist[]> {
    return this.afs.collection<Playlist>('playlists').valueChanges();
  }

  getVideos(playlist: string): Observable<Video[]> {
    return this.afs.collection<Video>(`playlists/${playlist}/videos`, ref => ref.orderBy('addedDate', 'desc')).valueChanges();
  }

  addPlaylist(playlist: Category) {
    console.log('addPlaylist', playlist);
    this.afs.firestore.collection('playlists').doc(playlist.name).set(Object.assign({}, playlist));
    this.notifySvc.success('Catégorie ajoutée !');
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
