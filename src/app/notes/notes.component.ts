import { Component, OnInit, HostListener } from '@angular/core';
import { BlockData } from '../block-data';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  blocks: BlockData[];
  numberOfCard = 0;
  showClearButton = false;
  showStopButton = true;
  showPlayButton = false;
  audio = new Audio();
  isShow: boolean;
  topPosToStartShowing = 100;

  constructor(private _snackBar: MatSnackBar) {
    this.blocks = [];
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;  
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  ngOnInit(): void {
    this.playAudio();
  }

  playAudio(){
    this.audio.src = "../assets/piano.mp3";
    this.audio.load();
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
  }

  addCard() {
    this.blocks.push({
      blockNumber: this.blocks.length + 1
    });

    if (this.blocks.length > 0){
      this.showClearButton = true;
    }
  }

  deleteCard(i){
    this.blocks.splice(i,1);

    if ( this.blocks.length == 0){
      this.showClearButton = false;
    }
  }

  clearAllCards(){
    this.blocks.length = 0;
    this.showClearButton = false;
    this.openSnackBar('All cards are deleted', 'Close');
  }

  showHideMusicButtons(){
    if (this.showStopButton){
      this.showStopButton = false;
      this.showPlayButton = true;
      this.stopAudio();
      
    }
    else{
      this.showStopButton = true;
      this.showPlayButton = false;
      this.playAudio();
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  } 

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}


