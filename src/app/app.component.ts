import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public spaceDetails = [];
  // public year = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let componentObj = this;
    // tslint:disable-next-line:prefer-const
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          // let details = [];
          if (this.responseText !== '') {
            componentObj.spaceDetails = JSON.parse(this.responseText);
            // componentObj.spaceDetails.forEach(element => {
            //   if (element) {
            //     console.log(element);
            //   }

            // });
            console.log(componentObj.spaceDetails);
          }
          // console.log(this.responseText);
        }
    };
    // this.spaceDetails = JSON.parse(JSON.stringify(details));
    xhttp.open('GET', `https://api.spacexdata.com/v3/launches?limit=100`, true);
    xhttp.send();
    // var x = "Hello!!";  // I will invoke myself
    // console.log(x);
  }

  fetchDetails() {
    // tslint:disable-next-line:prefer-const
    let obj = this;
     // tslint:disable-next-line:prefer-const
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.status === 200) {
        // let details = [];
        if (this.responseText !== '') {
          obj.spaceDetails = JSON.parse(this.responseText);
        }
      }
    };
    // tslint:disable-next-line:max-line-length
    xhttp.open('GET', `https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014`, true);
    xhttp.send();
  }

  fetchLaunch() {
    // tslint:disable-next-line:prefer-const
    let obj = this;
     // tslint:disable-next-line:prefer-const
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.status === 200) {
        // let details = [];
        if (this.responseText !== '') {
          obj.spaceDetails = JSON.parse(this.responseText);
        }
      }
    };
    // tslint:disable-next-line:max-line-length
    xhttp.open('GET', `https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true`, true);
    xhttp.send();
  }
}
