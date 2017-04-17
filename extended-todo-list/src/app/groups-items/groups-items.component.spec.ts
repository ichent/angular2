import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsItemsComponent } from './groups-items.component';

describe('GroupsItemsComponent', () => {
  let component: GroupsItemsComponent;
  let fixture: ComponentFixture<GroupsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
