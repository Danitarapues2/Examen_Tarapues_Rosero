import { Component, OnInit } from '@angular/core';// Importamos la interfaz Post desde el servicio
import { Post, PostService } from '../service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data: Post[]) => this.posts = data
    );
  }
}
