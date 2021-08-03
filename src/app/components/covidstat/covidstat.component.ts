import { Component, OnInit } from '@angular/core';
import { CovidstatsService, CovidStatInterface, CovidTotal } from '../../services/covidstats.service';

@Component({
  selector: 'app-covidstat',
  templateUrl: './covidstat.component.html',
  styleUrls: ['./covidstat.component.css']
})
export class CovidstatComponent implements OnInit {

  stats: Array<CovidStatInterface> = [];
  daylist: Array<CovidStatInterface> = [];
  // symbols: Array<string>;

  date: Date = new Date();
  today: string = this.getDateString(this.date);

  totalOfNL!: CovidTotal;

  constructor(private service: CovidstatsService) {

  }

  ngOnInit() {
    this.service.load()
      .subscribe(stats => {
        this.stats = stats;
        this.getStatsOfDay(this.stats, this.today);
        this.totalOfNL = this.getTotalsofNederlandOnDay(this.stats, this.today);
       });

    // var date: Date = new Date();
    // console.log(this.getDateString(today));
  }

  getDateString(date: Date){
    var s = date.toISOString();
    var dateString = s.substring(0,10);
    return dateString;
  }

  addDays(date: Date, days: number){
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    console.log(copy);
    return copy
  }

  getStatsOfDay(stats: Array<CovidStatInterface>, date: String) {
    var list = stats;
    var daylist = [];

    for (let stat of list) {
      if (stat.Date_of_publication === date){
        daylist.push(stat);
      }
    }
    this.daylist = daylist;

    return daylist;
  }

  provincies: Array<String> = [
    "Groningen",
    "Friesland",
    "Drente",
    "Overijssel",
    "Gelderland",
    "Utrecht",
    "Flevoland",
    "Noord-Holland",
    "Zuid-Holland",
    "Zeeland",
    "Noord-Brabant",
    "Limburg"
  ];

  gemeenten: Array<String> = [
    "Amersfoort",
    "Nijkerk",
    "Utrecht",
    "Amsterdam",
    "Rotterdam",
    "'s-Gravenhage",
    "Urk",
    "Bunschoten"
  ]

  getTotalsofProvince(stats: Array<CovidStatInterface>, provincie: String) {

    var list = stats;
    var totalReported: number = 0;
    var totalDeceased: number = 0;
    var totalHospitalised: number = 0;

    for (let stat of list) {
      if (stat.Province === provincie) {
        totalReported = totalReported + stat.Total_reported;
        totalHospitalised = totalHospitalised + stat.Hospital_admission;
        totalDeceased = totalDeceased + stat.Deceased;
      }
    }

    var total: CovidTotal = {
      entityName: provincie,
      totalReported: totalReported,
      totalHospitalised: totalHospitalised,
      totalDeceased: totalDeceased
    }
    return total;
  }

  getTotalsofProvinceOnDay(stats: Array<CovidStatInterface>, provincie: String, date: String){
    var listOfDay = this.getStatsOfDay(stats, date);
    var total = this.getTotalsofProvince(listOfDay, provincie);

    return total;
  }

  getTotalsofProvinces(stats: Array<CovidStatInterface>, date: String) {
    var totalsList = [];

    for (let provincie of this.provincies) {
      var total = this.getTotalsofProvinceOnDay(stats, provincie, date);
      totalsList.push(total);
    }

    console.log(totalsList);
    return totalsList;
  }

  getTotalsofMunicipality(stats: Array<CovidStatInterface>, gemeente: String) {

    var list = stats;
    var totalReported: number = 0;
    var totalDeceased: number = 0;
    var totalHospitalised: number = 0;

    for (let stat of list) {
      if (stat.Municipality_name === gemeente) {
        totalReported = totalReported + stat.Total_reported;
        totalHospitalised = totalHospitalised + stat.Hospital_admission;
        totalDeceased = totalDeceased + stat.Deceased;
      }
    }

    var total: CovidTotal = {
      entityName: gemeente,
      totalReported: totalReported,
      totalHospitalised: totalHospitalised,
      totalDeceased: totalDeceased
    }
    return total;
  }

  getTotalsofMunicipalityOnDay(stats: Array<CovidStatInterface>, gemeente: String, date: String){
    var listOfDay = this.getStatsOfDay(stats, date);
    var total = this.getTotalsofMunicipality(listOfDay, gemeente);

    return total;
  }

  getTotalsofMunicipalities(stats: Array<CovidStatInterface>, date: String) {
    var totalsList = [];

    for (let gemeente of this.gemeenten) {
      var total = this.getTotalsofMunicipalityOnDay(stats, gemeente, date);
      totalsList.push(total);
    }

    console.log(totalsList);
    return totalsList;
  }

  getTotalofNederland(stats: Array<CovidStatInterface>) {
    var list = stats;
    var totalReported: number = 0;
    var totalDeceased: number = 0;
    var totalHospitalised: number = 0;

    for (let stat of list) {
      totalReported = totalReported + stat.Total_reported;
      totalHospitalised = totalHospitalised + stat.Hospital_admission;
      totalDeceased = totalDeceased + stat.Deceased;
    }

    var total: CovidTotal = {
      entityName: 'Nederland',
      totalReported: totalReported,
      totalHospitalised: totalHospitalised,
      totalDeceased: totalDeceased
    }
    console.log(total);
    return total;
  }

  getTotalsofNederlandOnDay(stats: Array<CovidStatInterface>, date: String){
    var listOfDay = this.getStatsOfDay(stats, date);
    var total = this.getTotalofNederland(listOfDay);

    return total;
  }

}
