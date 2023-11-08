import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scanning',
  templateUrl: './scanning.component.html',
  styleUrls: ['./scanning.component.scss']
})
export class ScanningComponent {
  monitoringMock;
  confirmResut;

  constructor(private modalService: NgbModal) {
    
  }
  ngOnInit() {
    this.monitoringMock = [
      {
        secret: 47,
        platform: 'Github',
        repository: 'git-init',
        entropy: '2023-08-01',
        hash: 'In progress'
      },
      {
        secret: 64,
        platform: 'GitLab',
        repository: 'git-repo',
        entropy: '2023-09-15',
        hash: 'Completed'
      },
      {
        secret: 23,
        platform: 'Bitbucket',
        repository: 'code-base',
        entropy: '2023-07-10',
        hash: 'Failed'
      },
      {
        secret: 58,
        platform: 'SourceForge',
        repository: 'source-code',
        entropy: '2023-08-30',
        hash: 'In progress'
      },
      {
        secret: 75,
        platform: 'GitKraken',
        repository: 'git-project',
        entropy: '2023-09-05',
        hash: 'Completed'
      },
      {
        secret: 12,
        platform: 'Git',
        repository: 'init-repo',
        entropy: '2023-10-20',
        hash: 'In progress'
      },
      {
        secret: 34,
        platform: 'Bitbucket',
        repository: 'code-repo',
        entropy: '2023-11-15',
        hash: 'Completed'
      },
      {
        secret: 91,
        platform: 'GitHub',
        repository: 'github-init',
        entropy: '2023-12-01',
        hash: 'In progress'
      },
      {
        secret: 66,
        platform: 'GitLab',
        repository: 'gitlab-repo',
        entropy: '2024-01-20',
        hash: 'Failed'
      },
      {
        secret: 45,
        platform: 'SourceForge',
        repository: 'sf-code',
        entropy: '2024-02-10',
        hash: 'Completed'
      },
      {
        secret: 29,
        platform: 'GitKraken',
        repository: 'kraken-git',
        entropy: '2024-03-25',
        hash: 'In progress'
      },
      {
        secret: 87,
        platform: 'GitHub',
        repository: 'github-repo',
        entropy: '2024-04-15',
        hash: 'Failed'
      },
      {
        secret: 53,
        platform: 'GitLab',
        repository: 'lab-git',
        entropy: '2024-05-02',
        hash: 'Completed'
      },
      {
        secret: 76,
        platform: 'Bitbucket',
        repository: 'bitbucket-code',
        entropy: '2024-06-12',
        hash: 'In progress'
      },
      {
        secret: 20,
        platform: 'SourceForge',
        repository: 'sf-repo',
        entropy: '2024-07-08',
        hash: 'Failed'
      },
      {
        secret: 37,
        platform: 'GitKraken',
        repository: 'kraken-repo',
        entropy: '2024-08-22',
        hash: 'Completed'
      },
      {
        secret: 49,
        platform: 'GitHub',
        repository: 'github-code',
        entropy: '2024-09-30',
        hash: 'In progress'
      },
      {
        secret: 68,
        platform: 'GitLab',
        repository: 'lab-repo',
        entropy: '2024-10-17',
        hash: 'Failed'
      },
      {
        secret: 72,
        platform: 'Bitbucket',
        repository: 'bitbucket-git',
        entropy: '2024-11-11',
        hash: 'Completed'
      },
      {
        secret: 59,
        platform: 'SourceForge',
        repository: 'sf-project',
        entropy: '2024-12-05',
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
