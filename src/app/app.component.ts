import { Component, OnInit } from '@angular/core';
import { AwwService, Aww } from './aww.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Api Reddit Lab';
  post: any;
  posts: Aww[] = [];
  awwData = null;
  constructor(public aww: AwwService){}

  ngOnInit(): void {
    this.aww.getPosts().subscribe((data)=>{
      this.post = data;
      console.log(data);
      console.log(data.kind);
      console.log(data.data);
      console.log(data.data.children);
      console.log(data.data.children[0]);
      console.log(data.data.children[1]);
      console.log(data.data.children[0].data.title);
      console.log(data.data.children[0].data.thumbnail);
      console.log(data.data.children[0].data.permalink);
    })
  }
}