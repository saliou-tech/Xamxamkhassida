// @ts-ignore

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {QuranItem} from '../models/quranItemModel';
import {QuranModel} from '../models/quranModel';
import { Media, MediaObject } from '@ionic-native/media/ngx';
// @ts-ignore


// @ts-ignore


// @ts-ignore
// @ts-ignore
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  url = ''; // Your wordpress base URL
  apiKey = ''; // <-- Enter your own key here if required!
  private onSuccess: boolean;
  private onError: boolean;
  // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/naming-convention
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/naming-convention
//"ftp-host: ftpserver"
//"ftp-type: FTP
  // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/naming-convention
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/member-ordering
  username='aqva4820';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  password='Y6d*WXb_9?ye';

  //
  // eslint-disable-next-line @typescript-eslint/member-ordering
  //host='oni.o2switch.net';
  // eslint-disable-next-line @typescript-eslint/member-ordering

  // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/member-ordering
  // @ts-ignore
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/naming-convention
 /* httpHeadersForFtp = new HttpHeaders({ 'Content-Type': 'application/json',username: this.username,password:this.password,
    port: '21',ftphost: 'oni.o2switch.net',ftpTYpe: 'FTP'});*/
  // eslint-disable-next-line @typescript-eslint/member-ordering
  mediaObj: MediaObject;
  private songs: QuranItem[];
  private isPlaying: boolean;


  constructor(private http: HttpClient,private media: Media) {
  }

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  /**
   * Media part
   *
   * @returns Observable with detailed information
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention



  getDuration(mediaPath: string): Promise<any> {
    const p: Promise<any> = new Promise((resolve, reject) => {
      const tempMediaObj = this.media.create(mediaPath);
      tempMediaObj.play();
      tempMediaObj.setVolume(0);
      setTimeout(() => {
        const duration = Math.round(tempMediaObj.getDuration()).toString();
        resolve(duration);
        tempMediaObj.stop();
        tempMediaObj.release();
      }, 30);
    });
    return p;
  }
  unpause() {
    try {
      this.mediaObj.play();
      this.isPlaying = true;
    } catch (error) {
      // TODO ??
    }
  }

 /* incrementPlaybacksCount() {
    for (let song of this.songs) {
      if (song.id === this.currentlyPlayedId) {
        song.numberOfPlaybacks = song.numberOfPlaybacks + 1;
        this.persistenceService.saveSongs(this.songs);
        this.events.publish('songs:updated');
      }
    }
  }*/


  seekTo(value: number) {
    if (this.mediaObj !== undefined) {
      return this.mediaObj.seekTo(value);
    }
  }



 /* private getSongIndex(id: number): number {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].id === id) {
        return i;
      }
    }
    return 0;
  }*/

  isMusicPlaying(): boolean {
    return this.isPlaying;
  }

  pause() {
    this.isPlaying = false;
    this.mediaObj.pause();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/ban-types
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/ban-types
  getQuran(): QuranModel[{}] {
    return [
      {
        quranReadername: 'maher',
        image:'assets/maher.jpg',
      },
      {
        quranReadername: 'abdul-rahman-al-sudais',
        image:'assets/abdul-rahman-al-sudais.png',
      },
    ];
  }

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/ban-types
  getQuranSound(quranreadername): QuranItem[{}] {
    return [
      {
        quranReadername: 'maher',
        quranSound: [
          {
            titre: '001.mp3',
            url: 'https://xamxamkhassida.com/daaradji/corans/'+quranreadername,
          },
          {
            titre: '002.mp3',
            url: 'https://xamxamkhassida.com/daaradji/corans/' +quranreadername,
          },
        ]
      },
    ];


  }

}
