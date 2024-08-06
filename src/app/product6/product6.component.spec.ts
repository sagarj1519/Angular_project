import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product6Component } from './product6.component';

describe('Product6Component', () => {
  let component: Product6Component;
  let fixture: ComponentFixture<Product6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
