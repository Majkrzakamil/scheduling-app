import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesInputComponent } from './minutes-input.component';

describe('MinutesInputComponent', () => {
  let component: MinutesInputComponent;
  let fixture: ComponentFixture<MinutesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinutesInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinutesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
