import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WordpressService} from '../../services/wordpressservices.service';

import {QuranModel} from '../../models/quranModel';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.page.html',
  styleUrls: ['./quran.page.scss'],
})
export class QuranPage implements OnInit {
  //categories: Category[] = [];
  // @ts-ignore
  quranreaders: QuranModel[] = [{}];
  id: string;

  constructor(private  router: Router,private worpressservice: WordpressService) { }

  ngOnInit() {
    //console.log(this.quranreaders);
    this.quranreaders=this.worpressservice.getQuran();
    console.log(this.quranreaders);
  }
 /* listquran() {
    console.log('test');
    this.router.navigate(['quransound']);
  }*/
  // eslint-disable-next-line @typescript-eslint/naming-convention


  goTocorandSound(item) {
    console.log(item);
    localStorage.setItem('item' , JSON.stringify(item) );
    this.id=item.quranReadername;
    this.router.navigate(['quransound']);
  }

}
