import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  
  activeCard: string = ''; // Armazena o card ativo

  toggleCard(skill: string): void {
    this.activeCard = this.activeCard === skill ? '' : skill; // Alterna a exibição do card
  }
}
