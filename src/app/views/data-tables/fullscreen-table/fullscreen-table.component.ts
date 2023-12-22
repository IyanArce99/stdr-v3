import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { NgbModal , NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fullscreen-table',
  templateUrl: './fullscreen-table.component.html',
  styleUrls: ['./fullscreen-table.component.scss']
})
export class FullscreenTableComponent implements OnInit {
  products$;
  confirmResut;


  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) { }


  ;


  confirm(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
    .result.then((result) => {
      this.confirmResut = `Closed with: ${result}`;
    }, (reason) => {
      this.confirmResut = `Dismissed with: ${reason}`;
    });
  }
  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

}
