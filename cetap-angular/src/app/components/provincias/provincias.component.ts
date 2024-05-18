import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from '../../services/provincia.service';

@Component({
  selector: 'app-provincias',
  standalone: true,
  imports: [NgFor],
  templateUrl: './provincias.component.html',
  styleUrl: './provincias.component.css'
})
export class ProvinciasComponent implements OnInit{

  provincias: any[] = [];

  constructor(private provinciaService: ProvinciaService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.provinciaService.getProvincias().subscribe((data: any) => {
      this.provincias = data['response'];
      console.log("persona component fetch data", this.provincias);
    });
  }
}
