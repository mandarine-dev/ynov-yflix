import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Playlist } from './playlist.model';
import { Video } from './video.model';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  constructor(private afs: AngularFirestore) { }

  getPlaylists(): Observable<Playlist[]> {
    return this.afs.collection<Playlist>('playlists').valueChanges();
  }

  getVideos(playlist: string): Observable<Video[]> {
    return this.afs.collection<Video>(`playlists/${playlist}/videos`).valueChanges();
  }

}
