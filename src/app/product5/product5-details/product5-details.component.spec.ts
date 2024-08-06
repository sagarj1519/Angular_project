import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product5DetailsComponent } from './product5-details.component';

describe('Product5DetailsComponent', () => {
  let component: Product5DetailsComponent;
  let fixture: ComponentFixture<Product5DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product5DetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product5DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
