import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product4DetailsComponent } from './product4-details.component';

describe('Product4DetailsComponent', () => {
  let component: Product4DetailsComponent;
  let fixture: ComponentFixture<Product4DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product4DetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product4DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
