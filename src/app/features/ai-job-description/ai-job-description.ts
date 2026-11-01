import { Component, DestroyRef, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import {
  AiService,
  DraftLanguage,
  ExperienceLevel,
  JobDescriptionRequest,
  JobDescriptionResponse,
} from '../../core/ai/ai.service';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';

function trimmedLength(min: number, max: number): ValidatorFn {
  return (control) => {
    const value = String(control.value ?? '').trim();

    return value.length >= min && value.length <= max ? null : { trimmedLength: true };
  };
}

function parseSkills(value: string): string[] {
  return value
    .split(',')
    .map((skill) => skill.trim())
    .filter(Boolean);
}

const skillsValidator: ValidatorFn = (control) => {
  const skills = parseSkills(String(control.value ?? ''));

  const valid =
    skills.length >= 1 && skills.length <= 15 && skills.every((skill) => skill.length <= 80);

  return valid ? null : { invalidSkills: true };
};

@Component({
  selector: 'app-ai-job-description',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
  ],
  templateUrl: './ai-job-description.html',
  styleUrl: './ai-job-description.scss',
})
export class AiJobDescriptionComponent {
  private readonly fb = inject(FormBuilder);
  private readonly aiService = inject(AiService);
  private readonly destroyRef = inject(DestroyRef);

  readonly isLoading = signal(false);
  readonly errorMessage = signal('');
  readonly hasDraft = signal(false);
  readonly draftLanguage = signal<DraftLanguage>('English');

  readonly form = this.fb.nonNullable.group({
    jobTitle: ['', [Validators.required, trimmedLength(3, 100)]],
    department: ['', [Validators.required, trimmedLength(2, 100)]],
    experienceLevel: this.fb.nonNullable.control<ExperienceLevel>('Mid-level'),
    skills: ['', [Validators.required, skillsValidator]],
    language: this.fb.nonNullable.control<DraftLanguage>('English'),
  });

  readonly draftControl = new FormControl('', {
    nonNullable: true,
  });

  generate(): void {
    if (this.isLoading()) {
      return;
    }

    this.errorMessage.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Protect any existing draft that the user may have edited.
    if (
      this.hasDraft() &&
      !window.confirm('Generate a new draft? A successful result will replace the current text.')
    ) {
      return;
    }

    const values = this.form.getRawValue();

    const request: JobDescriptionRequest = {
      job_title: values.jobTitle.trim(),
      department: values.department.trim(),
      experience_level: values.experienceLevel,
      skills: parseSkills(values.skills),
      language: values.language,
    };

    this.isLoading.set(true);
    this.form.disable({ emitEvent: false });

    this.aiService
      .generateJobDescription(request)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.isLoading.set(false);
          this.form.enable({ emitEvent: false });
        }),
      )
      .subscribe({
        next: (response: JobDescriptionResponse) => {
          this.draftControl.setValue(response.draft);
          this.draftControl.markAsPristine();
          this.draftLanguage.set(request.language);
          this.hasDraft.set(true);
        },
        error: (error: unknown) => {
          this.errorMessage.set(this.getErrorMessage(error));
        },
      });
  }

  private getErrorMessage(error: unknown): string {
    if (!(error instanceof HttpErrorResponse)) {
      return 'Something went wrong. Please try again.';
    }

    switch (error.status) {
      case 0:
        return 'Cannot reach the backend. Check your connection.';
      case 401:
        return 'Your session has expired. Please sign in again.';
      case 403:
        return 'AI drafting is not enabled for this account.';
      case 422:
        return 'Please check the job requirements and try again.';
      case 429:
        return 'The AI usage limit has been reached. Try again later.';
      case 502:
        return 'The AI service could not generate a complete draft.';
      case 503:
        return 'AI drafting is not configured or is unavailable.';
      case 504:
        return 'Generation timed out. Your input is still here. Try again.';
      default:
        return 'Unable to generate a draft. Please try again.';
    }
  }
}
