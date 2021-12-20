import { Component, OnInit } from '@angular/core';
import {QuranModel} from "../../models/quranModel";
import {QuranItem} from "../../models/quranItemModel";
import {ActivatedRoute} from "@angular/router";
import {WordpressService} from "../../services/wordpressservices.service";


@Component({
  selector: 'app-quransound',
  templateUrl: './quransound.page.html',
  styleUrls: ['./quransound.page.scss'],
})
export class QuransoundPage implements OnInit {
  // @ts-ignore
  quransounds: QuranItem[] = [{}];
  quranreadername: string;
 item: string;
 name: string;
 titre: string;

  constructor( private activatedRoute: ActivatedRoute,private wordpressservice:WordpressService) {
    // @ts-ignore
    this.item= localStorage.getItem('item');
    this.item=JSON.parse( this.item);
    console.log(this.item);


  }

  ngOnInit() {
this.name =this.item["quranReadername"];
console.log(this.name);
this.quransounds=this.wordpressservice.getQuranSound(this.name);
console.log(this.quransounds);
  }



  playSound(items){
    console.log(items);
  }
}
