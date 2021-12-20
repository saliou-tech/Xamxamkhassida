import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WordpressService} from '../../services/wordpressservices.service';
import {QuranModel} from '../../models/quranModel';

// @ts-ignore
@Component({
  selector: 'app-listing-quran-reader',
  templateUrl: './listing-quran-reader.component.html',
  styleUrls: ['./listing-quran-reader.component.scss'],
})
export class ListingQuranReaderComponent implements OnInit {
  // @ts-ignore
   @Input() item: QuranModel =[{
    quranReadername: '',
    image: '',
    quranSound: [{
      titre: ''
    }],
  }];
  constructor(private router: Router,private worpressservice: WordpressService) { }

  ngOnInit() {
  }

}
