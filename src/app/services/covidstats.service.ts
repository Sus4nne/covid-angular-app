import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// let date : Array<string> = ['2021-03-06 10:00:00', '2021-03-05 10:00:00'];
// let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://data.rivm.nl/covid-19/COVID-19_aantallen_gemeente_per_dag.json';

// {"Date_of_report":"2021-03-06 10:00:00","Date_of_publication":"2020-04-30","Municipality_code":"GM0786","Municipality_name":"Grave",
// "Province":"Noord-Brabant","Security_region_code":"VR21","Security_region_name":"Brabant-Noord","Municipal_health_service":"GGD Hart voor Brabant",
// "ROAZ_region":"Netwerk Acute Zorg Brabant","Total_reported":0,"Hospital_admission":0,"Deceased":2},


export interface CovidStatInterface {
  Date_of_report: string;
  Date_of_publication: string;
  Municipality_code: string;
  Municipality_name: string;
  Province: string;
  Security_region_code: string;
  Security_region_name: string;
  Municipal_health_service: string;
  ROAZ_region: string;
  Total_reported: number;
  Hospital_admission: number;
  Deceased: number;
}

export interface CovidTotal {
  entityName: String;
  totalReported: number;
  totalDeceased: number;
  totalHospitalised: number;
}


@Injectable({
  providedIn: 'root'
})
export class CovidstatsService {

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Array<CovidStatInterface>>(service);
  }

}
