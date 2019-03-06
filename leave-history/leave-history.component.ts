import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveDetails } from '../leave-details';
import { LeaveDetailsService } from '../leave-details.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {
  empNo : number;
  leavedetails : Observable<LeaveDetails[]>;

  constructor(private leaveDetailsService : LeaveDetailsService, private _router : Router) { 
    this.empNo = parseInt(localStorage.getItem("empId"));
    this.leavedetails = leaveDetailsService.searchLeaveHistory(this.empNo);
  }
  history() {
    this._router.navigate(["/history"]);
  }
  apply() {
    this._router.navigate(["/applyLeave"]);
  }
  pending() {
    this._router.navigate(["/pending"]);
  }
  dashboard(){
    this._router.navigate(["/DashBoard"]);
  }
  employee(){
    this._router.navigate([""]);
  }
  ngOnInit() {
  }

}
