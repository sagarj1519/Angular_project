import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product3DetailsComponent } from './product3-details.component';

describe('Product3DetailsComponent', () => {
  let component: Product3DetailsComponent;
  let fixture: ComponentFixture<Product3DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product3DetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product3DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
