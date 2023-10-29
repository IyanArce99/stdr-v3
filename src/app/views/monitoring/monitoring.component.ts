import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent {
  monitoringMock;
  confirmResut;

  constructor(private modalService: NgbModal) {
    
  }
  ngOnInit() {
    this.monitoringMock = [
      {
        secret: '1',
        rule: '1',
        entity: '1',
        platform: 'Github',
        repository: 'git-init',
        entropy: '2023-08-01',
        hash: 'In progress'
      }
    ];
  }

  confirm(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
    .result.then((result) => {
      this.confirmResut = `Closed with: ${result}`;
    }, (reason) => {
      this.confirmResut = `Dismissed with: ${reason}`;
    });
  }
}
