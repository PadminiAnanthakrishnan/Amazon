import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SildeContainerComponent } from './silde-container.component';

describe('SildeContainerComponent', () => {
  let component: SildeContainerComponent;
  let fixture: ComponentFixture<SildeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SildeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SildeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
