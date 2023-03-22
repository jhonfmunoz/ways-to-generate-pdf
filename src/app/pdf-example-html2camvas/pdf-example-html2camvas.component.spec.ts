import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfExampleHtml2camvasComponent } from './pdf-example-html2camvas.component';

describe('PdfExampleHtml2camvasComponent', () => {
  let component: PdfExampleHtml2camvasComponent;
  let fixture: ComponentFixture<PdfExampleHtml2camvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfExampleHtml2camvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfExampleHtml2camvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
