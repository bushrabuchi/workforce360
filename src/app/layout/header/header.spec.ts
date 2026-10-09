import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    localStorage.removeItem('workforce360_language');

    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('switches between Arabic and English and updates document direction', () => {
    fixture.detectChanges();
    component.toggleLanguage();
    fixture.detectChanges();

    expect(component.isArabic()).toBe(true);
    expect(localStorage.getItem('workforce360_language')).toBe('ar');
    expect(document.documentElement.lang).toBe('ar');
    expect(document.documentElement.dir).toBe('rtl');
    expect(fixture.nativeElement.querySelector('.language-label').textContent.trim()).toBe(
      'English',
    );
    expect(fixture.nativeElement.querySelector('input').placeholder).toBe(
      'البحث عن الموظفين...',
    );

    component.toggleLanguage();
    fixture.detectChanges();

    expect(component.isArabic()).toBe(false);
    expect(localStorage.getItem('workforce360_language')).toBe('en');
    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');
    expect(fixture.nativeElement.querySelector('.language-label').textContent.trim()).toBe(
      'العربية',
    );
    expect(fixture.nativeElement.querySelector('input').placeholder).toBe('Search employees...');
  });
});
