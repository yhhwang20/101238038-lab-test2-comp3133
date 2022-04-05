import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any;
  isMission = false;
  currMission: any;

  constructor(private api: SpacexapiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getMission().subscribe(response => {
      this.missions = response;
      console.log(this.missions);
    }, error => {
      console.log(error);
      alert("Error while fetching the Data");
    })
    this.router.queryParams.subscribe(param => {
      this.currMission = param['currMission']
    })
  }

  getDetails(data: any){
    if(this.isMission && this.currMission == data){
      this.isMission = false;
    }
    else{
      this.isMission = true;
      this.currMission = data;
    }
  }
}
