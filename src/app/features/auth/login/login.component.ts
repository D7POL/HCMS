import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitting = false;
  error: string | null = null;

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.error = null;
    const { username, password } = this.form.getRawValue();
    this.auth.login({ username: username!, password: password! }).subscribe(user => {
      this.submitting = false;
      if (user) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.error = 'Ungültige Zugangsdaten';
      }
    });
  }
}
