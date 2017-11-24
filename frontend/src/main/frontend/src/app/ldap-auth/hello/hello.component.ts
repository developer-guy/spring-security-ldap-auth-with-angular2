import {Component, OnInit} from '@angular/core';
import {HelloService} from "../services/hello/hello.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  message: string;

  constructor(private helloService: HelloService) {
  }

  ngOnInit() {
    this.helloService.hello().subscribe(
      data => {
        this.message = data;
      },
      error => {
        this.message = error;
      });
  }

}
