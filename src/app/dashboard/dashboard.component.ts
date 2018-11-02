import { Component, OnInit } from '@angular/core';
import { StockTrackerService} from '../stock-tracker.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StockdetailComponent } from '../stockdetail/stockdetail.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private _stockdetail:StockTrackerService, private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/stockdetail']);
    }

}
