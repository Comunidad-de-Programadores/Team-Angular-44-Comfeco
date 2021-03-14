import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Group } from 'src/app/core/models/group.model';
import { GroupsService } from 'src/app/core/services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit, OnDestroy {
  filterForm: FormGroup;
  groupsSubscription: Subscription;

  languages: string[];
  groups: [Group];
  filteredGroups: [Group];

  constructor(private groupsService: GroupsService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initFilterForm();
    this.getGroups();
  }

  ngOnDestroy() {
    this.groupsSubscription.unsubscribe();
  }

  initFilterForm() {
    this.filterForm = this.formBuilder.group({
      language: [null, null],
      groupName: [null, null],
    });
  }

  getGroups() {
    this.groupsSubscription = this.groupsService.getGroups().subscribe((groups: [Group]) => {
      if (this.filteredGroups == null) {
        this.groups = groups;
        this.filteredGroups = groups;
      }

      this.getLanguagesListFromGroups();
    });
  }

  getLanguagesListFromGroups() {
    const groupLanguagesTemp: string[] = [];

    this.groups.forEach((group) => {
      if (!groupLanguagesTemp.includes(group.language)) {
        groupLanguagesTemp.push(group.language);
      }
    });

    this.languages = [...groupLanguagesTemp];
  }

  filterGroups() {
    this.filteredGroups = this.groups;

    if (this.languageFilter.value != null && this.languageFilter.value != '') {
      this.filteredGroups = this.filteredGroups.filter((group) => this.languageFilter.value == group.language) as [
        Group
      ];
    }

    if (this.groupNameFilter.value != null && this.groupNameFilter.value != '') {
      this.filteredGroups = this.filteredGroups.filter((group) =>
        group.name.toLowerCase().includes(this.groupNameFilter.value.toLowerCase())
      ) as [Group];
    }
  }

  get languageFilter() {
    return this.filterForm.get('language');
  }

  get groupNameFilter() {
    return this.filterForm.get('groupName');
  }
}
