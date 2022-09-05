import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "Aluno 1", cpf: "123.123.123-12", email: "teste@mail.com", gitlogin: "aluno1"};
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  gitlogin: string;
}
