import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user.model';
import { EditCredentialsComponent } from '../edit-credentials/edit-credentials.component';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit, OnChanges {
  @Input() profile: User;
  @Input() professions: { id: number; text: string }[];
  @Output() changeVisibilityProfile = new EventEmitter<boolean>();
  profession: string;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.profession = this.professions.find((profession) => profession.id === this.profile.profession).text;
  }

  openDialog(): void {
    this.dialog.open(EditCredentialsComponent, {
      width: '550px',
      data: { id: this.profile.id, email: this.profile.email },
    });
  }

  showProfile(): void {
    this.changeVisibilityProfile.emit(true);
  }
}
