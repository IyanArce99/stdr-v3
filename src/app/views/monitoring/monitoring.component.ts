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
        hash: 'In progress'
      },
      {
        secret: 2,
        rule: 'GCP Credentials',
        entity: 'MEXICO',
        platform: 'GitLab',
        repository: 'git-repo',
        entropy: 'EVERY WEEK',
        hash: 'Completed'
      },
      {
        secret: 3,
        rule: 'Cryptographic Key',
        entity: 'USA',
        platform: 'Bitbucket',
        repository: 'code-base',
        entropy: 'MONTHLY',
        hash: 'Failed'
      },
      {
        secret: 4,
        rule: 'Password in code',
        entity: 'POLAND',
        platform: 'SourceForge',
        repository: 'source-code',
        entropy: 'DAILY',
        hash: 'In progress'
      },
      {
        secret: 5,
        rule: 'GCP Credentials',
        entity: 'USA',
        platform: 'GitKraken',
        repository: 'git-project',
        entropy: 'EVERY WEEK',
        hash: 'Completed'
      },
      {
        secret: 6,
        rule: 'Cryptographic Key',
        entity: 'SPAIN',
        platform: 'GitHub',
        repository: 'github-code',
        entropy: 'MONTHLY',
        hash: 'Failed'
      },
      {
        secret: 7,
        rule: 'Password in code',
        entity: 'MEXICO',
        platform: 'Bitbucket',
        repository: 'bitbucket-git',
        entropy: 'DAILY',
        hash: 'In progress'
      },
      {
        secret: 8,
        rule: 'GCP Credentials',
        entity: 'POLAND',
        platform: 'SourceForge',
        repository: 'sf-project',
        entropy: 'EVERY WEEK',
        hash: 'Completed'
      },
      {
        secret: 9,
        rule: 'Cryptographic Key',
        entity: 'USA',
        platform: 'GitKraken',
        repository: 'kraken-repo',
        entropy: 'MONTHLY',
        hash: 'Failed'
      },
      {
        secret: 10,
        rule: 'Password in code',
        entity: 'POLAND',
        platform: 'GitHub',
        repository: 'github-code',
        entropy: 'DAILY',
        hash: 'In progress'
      },
      {
        secret: 11,
        rule: 'GCP Credentials',
        entity: 'MEXICO',
        platform: 'Github',
        repository: 'git-init',
        entropy: 'EVERY WEEK',
        hash: 'Completed'
      },
      {
        secret: 12,
        rule: 'Cryptographic Key',
        entity: 'SPAIN',
        platform: 'GitLab',
        repository: 'git-repo',
        entropy: 'MONTHLY',
        hash: 'Failed'
      },
      {
        secret: 13,
        rule: 'Password in code',
        entity: 'POLAND',
        platform: 'Bitbucket',
        repository: 'code-base',
        entropy: 'DAILY',
        hash: 'In progress'
      },
      {
        secret: 14,
        rule: 'GCP Credentials',
        entity: 'MEXICO',
        platform: 'SourceForge',
        repository: 'source-code',
        entropy: 'EVERY WEEK',
        hash: 'Completed'
      },
      {
        secret: 15,
        rule: 'Cryptographic Key',
        entity: 'USA',
        platform: 'GitKraken',
        repository: 'git-project',
        entropy: 'MONTHLY',
        hash: 'Failed'
      },
      {
        secret: 16,
        rule: 'Password in code',
        entity: 'SPAIN',
        platform: 'GitHub',
        repository: 'github-code',
        entropy: 'DAILY',
        hash: 'In progress'
      },
      {
        secret: 17,
        rule: 'GCP Credentials',
        entity: 'MEXICO',
        platform: 'GitLab',
        repository: 'git-repo',
        entropy: 'EVERY WEEK',
        hash: 'Completed'
      },
      {
        secret: 18,
        rule: 'Cryptographic Key',
        entity: 'USA',
        platform: 'Bitbucket',
        repository: 'code-base',
        entropy: 'MONTHLY',
        hash: 'Failed'
      },
      {
        secret: 19,
        rule: 'Password in code',
        entity: 'POLAND',
        platform: 'SourceForge',
        repository: 'source-code',
        entropy: 'DAILY',
        hash: 'In progress'
      },
      {
        secret: 20,
        rule: 'GCP Credentials',
        entity: 'USA',
        platform: 'GitKraken',
        repository: 'git-project',
        entropy: 'EVERY WEEK',
        hash: 'Completed'
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
