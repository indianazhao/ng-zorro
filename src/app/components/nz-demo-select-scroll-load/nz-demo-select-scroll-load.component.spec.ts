import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoSelectScrollLoadComponent } from './nz-demo-select-scroll-load.component';

describe('NzDemoSelectScrollLoadComponent', () => {
  let component: NzDemoSelectScrollLoadComponent;
  let fixture: ComponentFixture<NzDemoSelectScrollLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NzDemoSelectScrollLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoSelectScrollLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
