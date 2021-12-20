import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listeningquran',
  templateUrl: './listeningquran.component.html',
  styleUrls: ['./listeningquran.component.scss'],
})
export class ListeningquranComponent implements OnInit {
  public coverAvailable: boolean = false;
  public albumCoverAddress: string = '';
  constructor() { }

  ngOnInit() {}

}
