import { Component, OnInit, ViewChild } from '@angular/core';
// Provider de servicios para API prueba
import { ApiEmployeeService } from '../services/api-employee.service';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


export interface UserData {
  id: string;
  employee_name: string;
  employee_age: string;
  employee_salary: string;
  action: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  loading = true;
  msgDataEmpty = false;

  displayedColumns: string[] = ['id', 'employee_name', 'employee_age', 'employee_salary', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiEmployee: ApiEmployeeService) {
  }

  // Se ejecuta al estrar listo el componente
  ngOnInit() {

    this.getAllEmployee();

  }

  // funcion de Filtros para la tabla de empleados por cualquier campo
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getAllEmployee() {
    this.apiEmployee.getAllEmployee()
        .subscribe(data => {
          // Si la peticion es exitosa
          // Y trae datos de la Api
          if (data) {
            this.loading = false;
            // Se pasan todo el arreglo para ser iterado por el dataTable
            this.dataSource = new MatTableDataSource(data);

            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          } else {
            // Sin datos
            this.msgDataEmpty = true;
          }
      });
  }

  // Eliminacion de empleado
  deleteEmployee(uid, index: number) {

    const dataArray = this.dataSource.data;
    dataArray.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

    this.dataSource.data = dataArray;

    this.apiEmployee.deleteEmployee(uid)
      .subscribe(data => {
        // Si se elimino con exito
        if (data) {
        } else {
        }
      });


  }


}
