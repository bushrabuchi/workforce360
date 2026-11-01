import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../api.config';

export type ExperienceLevel = 'Junior' | 'Mid-level' | 'Senior';
export type DraftLanguage = 'English' | 'Arabic';

export interface JobDescriptionRequest {
  job_title: string;
  department: string;
  experience_level: ExperienceLevel;
  skills: string[];
  language: DraftLanguage;
}

export interface JobDescriptionResponse {
  draft: string;
}

@Injectable({
  providedIn: 'root',
})
export class AiService {
  private readonly http = inject(HttpClient);

  generateJobDescription(request: JobDescriptionRequest): Observable<JobDescriptionResponse> {
    return this.http.post<JobDescriptionResponse>(`${API_BASE_URL}/ai/job-description`, request);
  }
}
