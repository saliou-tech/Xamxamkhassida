import {Component, Input, OnInit} from '@angular/core';
import {QuranModel} from '../../models/quranModel';
import {QuranItem} from '../../models/quranItemModel';
// @ts-ignore
import { Media, MediaObject } from '@ionic-native/media/ngx';
import {Router} from '@angular/router';


@Component({
  selector: 'app-listing-quran-sound',
  templateUrl: './listing-quran-sound.component.html',
  styleUrls: ['./listing-quran-sound.component.scss'],
})
export class ListingQuranSoundComponent implements OnInit {
isPause=true;
  // @ts-ignore

  @Input() items: QuranItem =[{
    quranReadername: '',
    quranSound: [{
      titre: '',
      url: ''
    }],
  }];
qurasounds=[];
  url: string;
  constructor(private media: Media,private router: Router) { }


  //'https://xamxamkhassida.com/daaradji/corans/ajimi/001_converted.mp3
  ngOnInit() {
    this.qurasounds=this.items.quranSound;
    console.log(this.qurasounds);
  }


  playSound(item){
    item.url =item.url+'/'+item.titre;
   // const file: MediaObject = this.media.create( this.url );
    console.log(item);
    localStorage.setItem('item' , JSON.stringify(item) );
    this.router.navigate(['quranlistening']);

  }



}
