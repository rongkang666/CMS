import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() content: string;

  @Output() valueChange = new EventEmitter<string>();
  @Output() valueChange2 = new EventEmitter<string>();

  @ViewChild('otherinput') otherinput;

    counter = 'this is a string from post';

    valueChanged(inputvalue) { // You can give any function name

        this.valueChange.emit(inputvalue.value);
    }

    valueChanged2(){
      this.valueChange2.emit(this.otherinput.nativeElement.value);
    }

  constructor() { }

  ngOnInit() {
  }



}
