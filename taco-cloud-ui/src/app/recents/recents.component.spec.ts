import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTacosComponent } from './recents.component';

describe('RecentsComponent', () => {
  let component: RecentTacosComponent;
  let fixture: ComponentFixture<RecentTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentTacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
