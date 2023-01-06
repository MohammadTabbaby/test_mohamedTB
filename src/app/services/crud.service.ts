import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  Posts = [
    new Post("0", "titre1", "texttexttexttext"),
    new Post("1", "titre2", "texttexttexttext"),
    new Post("2", "titre3", "texttexttexttext"),
    new Post("3", "titre4", "texttexttexttext")
  ];

  isAuth = false;
  chargerListAppareil: any;

  constructor(private http: HttpClient) {
    this.chargerListposts().subscribe((listApp: any) => {
      console.log(listApp);
    });
  }

  chargerListposts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/PostsAPI');
  }

}
