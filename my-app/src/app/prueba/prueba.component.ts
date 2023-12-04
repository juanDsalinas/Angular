import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit{
  data:Array<any>[]=[]
  // dato:any={}
  // image:any
  constructor(private apiService:ApiService){}

  ngOnInit() {
  }
}