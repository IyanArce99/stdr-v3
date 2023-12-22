import { Component,ViewChild,TemplateRef  } from '@angular/core';
import { NgbModal , NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/shared/services/product.service';


import * as Papa from 'papaparse';


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
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder456\\archivo3.txt',
          file :'file.txt',
          status : 'En tratamiento',
          date: new Date('2022-05-20'),
         
        },
        {
          secret: 2,
          rule: 'GCP Credentials',
          entity: 'MEXICO',
          platform: 'GitLab',
          repository: 'git-repo',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder789\\archivo4.txt',
          file :'arr.txt',
          status : 'Pendiente',
          date: new Date('2022-06-08'),
        },
        {
          secret: 3,
          rule: 'Cryptographic Key',
          entity: 'USA',
          platform: 'Bitbucket',
          repository: 'code-base',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder123\\archivo1.txt',
          file :'documento.txt',
          date: new Date('2022-07-01'),
          status : 'En tratamiento',
        },
        {
          secret: 4,
          rule: 'Password in code',
          entity: 'POLAND',
          platform: 'SourceForge',
          repository: 'source-code',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder567\\archivo2.txt',
          file :'data.txt',
          date: new Date('2022-12-01'),
          status : 'Pendiente',
        },
        {
          secret: 5,
          rule: 'GCP Credentials',
          entity: 'USA',
          platform: 'GitKraken',
          repository: 'git-project',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder890\\archivo5.txt',
          file :'fol_3.txt',
          status : 'Pendiente',
          date: new Date('2023-11-01'),
        },
        {
          secret: 6,
          rule: 'Cryptographic Key',
          entity: 'SPAIN',
          platform: 'GitHub',
          repository: 'github-code',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder234\\archivo1.txt',
          file :'fol_3.txt',
          status : 'En tratamiento',
          date: new Date('2022-11-01'),
        },
        {
          secret: 7,
          rule: 'Password in code',
          entity: 'MEXICO',
          platform: 'Bitbucket',
          repository: 'bitbucket-git',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder567\\archivo3.txt',
          file :'fol_3.txt',
          status : 'Pendiente',
          date: new Date('2015-01-01'),
        },
        {
          secret: 8,
          rule: 'GCP Credentials',
          entity: 'POLAND',
          platform: 'SourceForge',
          repository: 'sf-project',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder890\\archivo4.txt',
          file :'fol_3.txt',
          status : 'En tratamiento',
          date: new Date('2012-05-01'),
        },
        {
          secret: 9,
          rule: 'Cryptographic Key',
          entity: 'USA',
          platform: 'GitKraken',
          repository: 'kraken-repo',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder123\\archivo2.txt',
          file :'fol_3.txt',
          status : 'Pendiente',
          date: new Date('2023-08-11'),
        },
        {
          secret: 10,
          rule: 'Password in code',
          entity: 'POLAND',
          platform: 'GitHub',
          repository: 'github-code',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder456\\archivo4.txt',
          file :'fol_3.txt',
          status : 'En tratamiento',
          date: new Date('2017-01-01'),
        },
        {
          secret: 11,
          rule: 'GCP Credentials',
          entity: 'MEXICO',
          platform: 'Github',
          repository: 'git-init',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder789\\archivo1.txt',
          file :'fol_3.txt',
          status : 'Pendiente',
          date: new Date('2020-01-01'),
        },
        {
          secret: 12,
          rule: 'Cryptographic Key',
          entity: 'SPAIN',
          platform: 'GitLab',
          repository: 'git-repo',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder234\\archivo2.txt',
          file :'fol_3.txt',
          status : 'En tratamiento',
          date: new Date('2022-01-22'),
        },
        {
          secret: 13,
          rule: 'Password in code',
          entity: 'POLAND',
          platform: 'Bitbucket',
          repository: 'code-base',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder567\\archivo5.txt',
          file :'fol_117.txt',
          status : 'Pendiente',
          date: new Date('2021-01-01'),
        },
        {
          secret: 14,
          rule: 'GCP Credentials',
          entity: 'MEXICO',
          platform: 'SourceForge',
          repository: 'source-code',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder890\\archivo3.txt',
          file :'data_122.txt',
          status : 'Pendiente',
          date: new Date('2022-12-01'),
        },
        {
          secret: 15,
          rule: 'Cryptographic Key',
          entity: 'USA',
          platform: 'GitKraken',
          repository: 'git-project',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder123\\archivo3.txt',
          file :'fol_3.txt',
          status : 'En tratamiento',
          date: new Date('2018-09-01'),
        },
        {
          secret: 16,
          rule: 'Password in code',
          entity: 'SPAIN',
          platform: 'GitHub',
          repository: 'github-code',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder456\\archivo1.txt',
          file :'fol_3.txt',
          status : 'Pendiente',
          date: new Date('2015-10-01'),
        },
        {
          secret: 17,
          rule: 'GCP Credentials',
          entity: 'MEXICO',
          platform: 'GitLab',
          repository: 'git-repo',
          entropy: 'EVERY WEEK',
          hash: 'Completed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder789\\archivo5.txt',
          file :'fol_8.txt',
          status : 'Pendiente',
          date: new Date('2023-01-21'),
        },
        {
          secret: 18,
          rule: 'Cryptographic Key',
          entity: 'USA',
          platform: 'Bitbucket',
          repository: 'code-base',
          entropy: 'MONTHLY',
          hash: 'Failed',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr-v3\\folder234\\archivo3.txt',
          file :'all.txt',
          status : 'En tratamiento',
          date: new Date('2019-11-01'),
        },
        {
          secret: 19,
          rule: 'Password in code',
          entity: 'POLAND',
          platform: 'SourceForge',
          repository: 'source-code',
          entropy: 'DAILY',
          hash: 'In progress',
          ruta: 'C:\\Users\\iyiar\\Desktop\\test\\stdr',
          file :'fol_3.txt',
          status : 'Pendiente',
          date: new Date('2022-01-01'),
        }
    ];
  }

  mostrarMensaje() {
    console.log('¡Botón clickeado!');
  }

  confirm(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
    .result.then((result) => {
      this.confirmResut = `Closed with: ${result}`;
    }, (reason) => {
      this.confirmResut = `Dismissed with: ${reason}`;
    });
  }

  @ViewChild('modalExportarCsv') modalExportarCsv!: TemplateRef<any>;

  abrirModal() {
    const modalOptions: NgbModalOptions = {
      windowClass: 'modalExportarCsv',
    };

    this.modalService.open(this.modalExportarCsv, modalOptions);
  }

  modalActive(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
    .result.then((result) => {
      this.confirmResut = `Closed with: ${result}`;
    }, (reason) => {
      this.confirmResut = `Dismissed with: ${reason}`;
    });
  }


  isDescending = true;
  orderByColumn = 'date'; // Columna por la que se ordena inicialmente

  sort(column: string) {
    this.isDescending = column === this.orderByColumn ? !this.isDescending : true;
    this.orderByColumn = column;
    // Ordena el arreglo por la columna especificada
    this.monitoringMock.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];
      // Asegúrate de que las fechas se comparen como objetos Date
      if (column === 'date') {
        return this.isDescending ? valueB.getTime() - valueA.getTime() : valueA.getTime() - valueB.getTime();
      }
      // Resto de las comparaciones
      return this.isDescending ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
    });
  }

  exportToPDF() {
    window.print();
}


generarCSV() {
  const columnas = [
    'Secret', 'Rule', 'Entity', 'Platform',
    'Repository', 'File', 'Route', 'Status', 'Active since'
  ];

  const datos = this.monitoringMock.map(el => [
    el.secret, el.rule, el.entity, el.platform,
    el.repository, el.file, el.ruta, el.status,
    this.formatDate(el.date),
  ]);

  const filas = datos.map(dato => dato.map(valor => `"${valor}"`).join(','));

  const csv = [columnas.map(valor => `"${valor}"`).join(','), ...filas].join('\r\n');
  this.descargarArchivoCSV(csv);
}

formatDate(date: Date): string {
  // Implementa tu lógica para formatear la fecha aquí si es necesario
  return date.toISOString();
}

descargarArchivoCSV(csv: string) {
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'datos.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

}
