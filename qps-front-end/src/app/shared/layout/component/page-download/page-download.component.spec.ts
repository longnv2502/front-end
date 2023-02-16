import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDownloadComponent } from './page-download.component';

describe('PageDownloadComponent', () => {
  let component: PageDownloadComponent;
  let fixture: ComponentFixture<PageDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
