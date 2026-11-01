import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiJobDescription } from './ai-job-description';

describe('AiJobDescription', () => {
  let component: AiJobDescription;
  let fixture: ComponentFixture<AiJobDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiJobDescription],
    }).compileComponents();

    fixture = TestBed.createComponent(AiJobDescription);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
