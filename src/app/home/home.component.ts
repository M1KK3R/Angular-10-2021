import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  esemed = [
    {pealkiri: 'ese1', hind: '100 €'},
    {pealkiri: 'ese2', hind: '200 €'},
    {pealkiri: 'ese3', hind: '400 €'}
  ];
  lisatud = false;

  constructor() { }

  ngOnInit(): void {
  }

  ostukorviLisamine(){
    console.log("töötab");
    console.log(this.esemed);
    this.esemed[0].hind = "150 €";
    this.lisatud = true;
    
  }

}
