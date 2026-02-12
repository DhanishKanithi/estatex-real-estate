import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PROPERTIES } from '../../data/properties.data';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.scss']
})
export class Booking {

  bookingForm!: FormGroup;
  property: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.property = PROPERTIES.find(p => p.id === id);

    this.bookingForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      visitDate: ['', Validators.required],
      message: ['']
    });
  }

  submitBooking() {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    console.log('Booking Details:', {
      property: this.property,
      userData: this.bookingForm.value
    });

    alert('Booking request submitted successfully!');
    this.bookingForm.reset();
  }
}
