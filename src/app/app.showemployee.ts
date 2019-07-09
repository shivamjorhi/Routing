import {Component,OnInit} from '@angular/core';
import {EmployeeService} from './app.employeeservice';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})

export class ShowEmployeeComponent implements OnInit{
    constructor(private myservice:EmployeeService){}
    empAll:any[]=[];

    ngOnInit(){
        this.myservice.getAllEmployee().subscribe((data:any)=>this.empAll=data);
    }


}