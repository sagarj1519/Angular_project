import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product6DetailsComponent } from './product6-details.component';

describe('Product6DetailsComponent', () => {
  let component: Product6DetailsComponent;
  let fixture: ComponentFixture<Product6DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product6DetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product6DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
