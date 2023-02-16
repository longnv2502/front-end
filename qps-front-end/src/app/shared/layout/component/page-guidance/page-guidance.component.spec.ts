import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGuidanceComponent } from './page-guidance.component';

describe('PageGuidanceComponent', () => {
  let component: PageGuidanceComponent;
  let fixture: ComponentFixture<PageGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGuidanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
