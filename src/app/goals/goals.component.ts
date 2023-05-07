import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
})
export class GoalsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goals: string[] = [];
  newGoal = '';

  addGoal(event: Event): void {
    event.preventDefault();
    if (this.newGoal.trim()) {
      this.goals.push(this.newGoal.trim());
      this.newGoal = '';
    }
  }

  removeGoal(index: number): void {
    this.goals.splice(index, 1);
  }
}
