import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router'; // CLI imports router

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [ DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render title 'Details'`, () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Details');
  });

  it('should contain details', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li:nth-child(3)').textContent).toContain('Phone: ');
  });
});
