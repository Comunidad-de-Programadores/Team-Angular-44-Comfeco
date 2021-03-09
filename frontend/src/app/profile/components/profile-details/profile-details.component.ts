import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user.model';
import { EditPasswordComponent } from '../edit-password/edit-password.component';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  @Input() profile: User;
  @Output() changeVisibilityProfile = new EventEmitter<boolean>();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditPasswordComponent, {
      width: '550px',
      height: '400px',
      data: { name: 'this.name', animal: ' this.animal' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  showProfile(): void {
    this.changeVisibilityProfile.emit(true);
  }
}
