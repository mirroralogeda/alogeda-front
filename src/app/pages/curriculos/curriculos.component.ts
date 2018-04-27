import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss']
})
export class CurriculosComponent implements OnInit {


  btnSelected = 'btn btn-warning';
  btnDefault = 'btn btn-default';

  selectFase(f) {
    console.log(f);

  }

  constructor(private activeModal: NgbModal) {

  }


  ngOnInit() {
  }


}
