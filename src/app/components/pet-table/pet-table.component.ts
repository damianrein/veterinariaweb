import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/data/pet/pet';

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent implements OnInit {

  @Input() 
  pets:Pet[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
