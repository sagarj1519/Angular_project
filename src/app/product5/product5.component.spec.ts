import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product5Component } from './product5.component';

describe('Product5Component', () => {
  let component: Product5Component;
  let fixture: ComponentFixture<Product5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
