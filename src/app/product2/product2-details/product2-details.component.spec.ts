import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2DetailsComponent } from './product2-details.component';

describe('Product2DetailsComponent', () => {
  let component: Product2DetailsComponent;
  let fixture: ComponentFixture<Product2DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product2DetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
