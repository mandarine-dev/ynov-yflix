import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '@app/core/models/category';
import { Video } from '@app/core/models/video';
import { NotifyService } from '@app/core/services/notify.service';
import { TranslateService } from '@ngx-translate/core';
import { orderBy, take } from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Playlist } from './playlist.model';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  constructor(private afs: AngularFirestore, private notifySvc: NotifyService, private translateSvc: TranslateService) { }

  getPlaylists(): Observable<Playlist[]> {
    return this.afs.collection<Playlist>('playlists').valueChanges();
  }

  getSuggestionsPlaylist(userId: string, profileId: string) {
    const profileRef = this.afs.collection('users').doc(userId).collection('profiles').doc(profileId);
    // tslint:disable-next-line:max-line-length
    const playlistRef = this.afs.collection<Playlist>('users').doc(userId).collection('profiles').doc(profileId).collection('playlist');

    profileRef.valueChanges().subscribe(profile => {
      playlistRef.valueChanges().subscribe(playlist => {
        console.log('profile : ', profile);
        console.log('playlist: ', playlist);
        let statistics = profile['statistics'];
        if (statistics) {
          console.log('statistics', statistics);

          if (playlist.length <= 0) {
            playlistRef.add({});
          }

          statistics = take(orderBy(statistics, ['views'], ['desc']), 3);

          statistics.forEach(stat => {
            this.getThreeLastVideoFromPlaylist(stat.category).subscribe(lastVideos => {
              lastVideos.forEach(video => {
                console.log('video', video);
                playlistRef.add({ video });
              });
            });
          });
          return;
        }
      });
    });
  }

  getThreeLastVideoFromPlaylist(category: string): Observable<Video[]> {
    return this.afs.collection<Video>(`playlists/${category}/videos`, ref => ref.orderBy('addedDate', 'desc').limit(3)).valueChanges();
  }

  getVideos(playlist: string): Observable<Video[]> {
    // on utilise un snapshotChanges pour récupérer l'id car toutes les métadatas de l'objet sont présentes contrairement au valuechanges
    return this.afs.collection<Video>(`playlists/${playlist}/videos`, ref => ref.orderBy('addedDate', 'desc')).snapshotChanges().pipe(
      map(videos => {
        return videos.map(video => {
          const data = video.payload.doc.data() as Video;
          data.id = video.payload.doc.id;
          return data;
        });
      }));
  }

  editTitleVideo(playlist: string, id: string, title: string) {
    this.afs.collection(`playlists/${playlist}/videos`).doc(id).update({ 'title': title })
      .then(() => this.notifySvc.success('SNACK_SUCCESS_MODIFY_VIDEO'))
      .catch((error) => this.notifySvc.error('SNACK_ERROR_MODIFY_VIDEO'));
  }

  editPlaylistTraductions(name: string, playlist: Playlist) {
    this.afs.collection('playlists').doc(name).update(Object.assign({}, playlist))
      .then(() => this.notifySvc.success('SNACK_SUCCESS_MODIFY_PLAYLIST'))
      .catch((error) => this.notifySvc.error('SNACK_ERROR_MODIFY'));
  }

  deletePlaylist(name: string) {
    this.afs.collection('playlists').doc(name).delete()
      .then(() => this.notifySvc.success('SNACK_SUCCESS_DELETE_PLAYLIST'))
      .catch((error) => this.notifySvc.error('SNACK_ERROR_DELETE'));
  }

  deleteVideo(playlist: string, id: string) {
    this.afs.collection(`playlists/${playlist}/videos`).doc(id).delete()
      .then(() => this.notifySvc.success('SNACK_SUCCESS_DELETE_VIDEO'))
      .catch((error) => this.notifySvc.error('SNACK_ERROR_DELETE'));
  }

  addPlaylist(playlist: Category) {
    this.afs.firestore.collection('playlists').doc(playlist.name).set(Object.assign({}, playlist))
      .then(() => this.notifySvc.success('SNACK_SUCCESS_CATEGORY'))
      .catch((error) => this.notifySvc.error('SNACK_ERROR_CATEGORY'));
  }

  addVideo(video: Video) {
    video.addedDate = new Date();
    this.afs.firestore.collection('playlists').doc(video.category).collection('videos').add(Object.assign({}, video))
      .then(() => this.notifySvc.success('SNACK_SUCCESS_VIDEO'))
      .catch((error) => this.notifySvc.error('SNACK_ERROR_VIDEO'));
  }

  addViewToUserStatistics(categoryName: string, userId: string, profileId: string) {
    const profileRef = this.afs.firestore.collection('users').doc(userId).collection('profiles').doc(profileId);
    profileRef.get().then(res => {
      let categoryAlreadyExist = false;
      const profileData = res.data();
      const statisticsObject = profileData.statistics;
      // update if category already exist in nested object
      if (statisticsObject) {
        statisticsObject.forEach(element => {
          if (element.category === categoryName) {
            element.views++;
            profileRef.update({ statistics: statisticsObject });
            categoryAlreadyExist = true;
          }
        });
        // add new category with view init to 1
        if (!categoryAlreadyExist) {
          statisticsObject.push({ category: categoryName, views: 1 });
          profileRef.update({ statistics: statisticsObject });
        }
      } else {
        profileRef.update({ statistics: [{ category: categoryName, views: 1 }] });
      }
    });
  }
}
