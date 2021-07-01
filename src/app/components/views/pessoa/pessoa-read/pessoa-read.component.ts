import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.css']
})
export class PessoaReadComponent implements OnInit {

  displayedColumns: string[] = ["id", "nome", "acoes"];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navegarParaPessoaCreate(){
    this.router.navigate(["pessoas/create"]);
  }

}
