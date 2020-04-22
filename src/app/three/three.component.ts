import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Onfido from 'onfido-sdk-ui/dist/onfido.min.js';
// ES6 module import

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    Onfido.init({
      steps: [
        {
          type: 'document',
          options: {
            documentTypes: {
              passport: true,
              driving_licence: false,
              national_identity_card: false
            }
          }
        }
      ]
    });
  }
}
