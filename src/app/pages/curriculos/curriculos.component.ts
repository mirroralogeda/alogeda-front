import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { SmartTablesService } from '../tables/components/smartTables/smartTables.service';

import { LocalDataSource } from 'ng2-smart-table';
=======

>>>>>>> df2951611e8aafd13ae5ea330febc3b051903195


@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
<<<<<<< HEAD
  styleUrls: ['./curriculos.component.scss'],
=======
  styleUrls: ['./curriculos.component.scss']
>>>>>>> df2951611e8aafd13ae5ea330febc3b051903195
})
export class CurriculosComponent implements OnInit {


  btnSelected = 'btn btn-warning';
  btnDefault = 'btn btn-default';
<<<<<<< HEAD
  btnOk = 'btn btn-success';
  cb1 = this.btnDefault;
  cb2 = this.btnDefault;
  cb3 = this.btnDefault;
  cb4 = this.btnDefault;
  cb5 = this.btnDefault;
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;


  settings2 = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      curso: {
        title: 'Curso',
        type: 'string'
      },
      nivel: {
        title: 'Nível de ensino',
        type: 'string'
      },
      instituicao: {
        title: 'Instituição',
        type: 'string'
      },
      inicio: {
        title: 'Ano de início',
        type: 'int'
      },
      fim: {
        title: 'Ano de término',
        type: 'int'
      }
    }
  };
  source2: LocalDataSource = new LocalDataSource();



  settings3 = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      habilidades: {
        title: 'habilidades e qualificações relacionadas ao cargo pretendido',
        type: 'string'
      }
    }
  };
  source3: LocalDataSource = new LocalDataSource();
  

  settings4 = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      experiencia: {
        title: 'Experiência profissional',
        type: 'string'
      },
      area: {
        title: 'Área de atuação',
        type: 'string'
      },
      inicio: {
        title: 'Ano de início',
        type: 'int'
      },
      fim: {
        title: 'Ano de término',
        type: 'int'
      }
    }
  };
  source4: LocalDataSource = new LocalDataSource();
  



  selectFase(f) {
    this.defineInicio();
    if (f == 1) {
      this.cb1 = this.btnSelected;
      this.show1 = true;
    }
    if (f == 2) {
      this.cb2 = this.btnSelected;
      this.show2 = true;
    }
    if (f == 3) {
      this.cb3 = this.btnSelected;
      this.show3 = true;
      
    }
    if (f == 4) {
      this.cb4 = this.btnSelected;
      this.show4 = true;
    }
    if (f == 5) {
      this.cb5 = this.btnSelected;
      this.show5 = true;
      
    }


  };

  defineInicio() {
    this.cb1 = this.btnDefault;
    this.cb2 = this.btnDefault;
    this.cb3 = this.btnDefault;
    this.cb4 = this.btnDefault;
    this.cb5 = this.btnDefault;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  constructor(private activeModal: NgbModal, protected service: SmartTablesService) {
    // this.service.getData().then((data) => {
    //   this.source.load(data);
    // });
    this.selectFase(1);
=======

  selectFase(f) {
    console.log(f);

  }

  constructor(private activeModal: NgbModal) {
>>>>>>> df2951611e8aafd13ae5ea330febc3b051903195

  }


  ngOnInit() {
  }


}
