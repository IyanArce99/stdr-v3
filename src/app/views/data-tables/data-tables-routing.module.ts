import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullscreenTableComponent } from './fullscreen-table/fullscreen-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { ListPaginationComponent } from './list-pagination/list-pagination.component';
import { GeneralComponent } from '../settings/general/general.component';
import { SecurityComponent } from '../settings/security/security.component';

const routes: Routes = [
  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'full',
    component: FullscreenTableComponent
  },
  {
    path: 'security',
    component: SecurityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTablesRoutingModule { }
