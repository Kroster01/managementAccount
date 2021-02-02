import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionamdComponent } from './sectionamd.component';

describe('SectionamdComponent', () => {
  let component: SectionamdComponent;
  let fixture: ComponentFixture<SectionamdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionamdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionamdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
