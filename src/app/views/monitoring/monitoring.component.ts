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
          secret: 1,
          rule: 'Password in code',
          entity: 'SPAIN',
          platform: 'Github',
          repository: 'git-init',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder456\\archivo3.txt'
        },
        {
          secret: 2,
          rule: 'GCP Credentials',
          entity: 'MEXICO',
          platform: 'GitLab',
          repository: 'git-repo',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder789\\archivo4.txt'
        },
        {
          secret: 3,
          rule: 'Cryptographic Key',
          entity: 'USA',
          platform: 'Bitbucket',
          repository: 'code-base',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder123\\archivo1.txt'
        },
        {
          secret: 4,
          rule: 'Password in code',
          entity: 'POLAND',
          platform: 'SourceForge',
          repository: 'source-code',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder567\\archivo2.txt'
        },
        {
          secret: 5,
          rule: 'GCP Credentials',
          entity: 'USA',
          platform: 'GitKraken',
          repository: 'git-project',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder890\\archivo5.txt'
        },
        {
          secret: 6,
          rule: 'Cryptographic Key',
          entity: 'SPAIN',
          platform: 'GitHub',
          repository: 'github-code',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder234\\archivo1.txt'
        },
        {
          secret: 7,
          rule: 'Password in code',
          entity: 'MEXICO',
          platform: 'Bitbucket',
          repository: 'bitbucket-git',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder567\\archivo3.txt'
        },
        {
          secret: 8,
          rule: 'GCP Credentials',
          entity: 'POLAND',
          platform: 'SourceForge',
          repository: 'sf-project',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder890\\archivo4.txt'
        },
        {
          secret: 9,
          rule: 'Cryptographic Key',
          entity: 'USA',
          platform: 'GitKraken',
          repository: 'kraken-repo',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder123\\archivo2.txt'
        },
        {
          secret: 10,
          rule: 'Password in code',
          entity: 'POLAND',
          platform: 'GitHub',
          repository: 'github-code',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder456\\archivo4.txt'
        },
        {
          secret: 11,
          rule: 'GCP Credentials',
          entity: 'MEXICO',
          platform: 'Github',
          repository: 'git-init',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder789\\archivo1.txt'
        },
        {
          secret: 12,
          rule: 'Cryptographic Key',
          entity: 'SPAIN',
          platform: 'GitLab',
          repository: 'git-repo',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder234\\archivo2.txt'
        },
        {
          secret: 13,
          rule: 'Password in code',
          entity: 'POLAND',
          platform: 'Bitbucket',
          repository: 'code-base',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder567\\archivo5.txt'
        },
        {
          secret: 14,
          rule: 'GCP Credentials',
          entity: 'MEXICO',
          platform: 'SourceForge',
          repository: 'source-code',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder890\\archivo3.txt'
        },
        {
          secret: 15,
          rule: 'Cryptographic Key',
          entity: 'USA',
          platform: 'GitKraken',
          repository: 'git-project',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder123\\archivo3.txt'
        },
        {
          secret: 16,
          rule: 'Password in code',
          entity: 'SPAIN',
          platform: 'GitHub',
          repository: 'github-code',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder456\\archivo1.txt'
        },
        {
          secret: 17,
          rule: 'GCP Credentials',
          entity: 'MEXICO',
          platform: 'GitLab',
          repository: 'git-repo',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder789\\archivo5.txt'
        },
        {
          secret: 18,
          rule: 'Cryptographic Key',
          entity: 'USA',
          platform: 'Bitbucket',
          repository: 'code-base',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder234\\archivo3.txt'
        },
        {
          secret: 19,
          rule: 'Password in code',
          entity: 'POLAND',
          platform: 'SourceForge',
          repository: 'source-code',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr'
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

  exportToPDF() {
    window.print();
}
}
