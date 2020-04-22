import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  next() {
    this.router.navigate(['two']);
  }
}
