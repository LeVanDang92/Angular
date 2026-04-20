import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Review } from './models/Review';
import { ReviewService } from './services/review-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  reviews: Review[] =[];

  currentIndex = signal(0);
  currentReview = signal<Review | null>(null);
  loading = signal(true);

  constructor(private reviewService: ReviewService) {

  }


  ngOnInit() {
    this.reviewService.getReviews().subscribe((data) => {
      this.reviews = data;

      if (this.reviews.length > 0) {
          this.currentReview.set(this.reviews[this.currentIndex()]);
      }
      else
      {    
          this.currentReview.set(null);
      }
      this.loading.set(false);
    })
  }

  nextReview(){
    if (this.reviews.length > 0) {
      this.currentIndex.update(index => (index + 1) % this.reviews.length);
      this.currentReview.set(this.reviews[this.currentIndex()]);
    }
  }

  previousReview(){
    if (this.reviews.length > 0) {
      this.currentIndex.update(index => (index - 1 + this.reviews.length) % this.reviews.length);
      this.currentReview.set(this.reviews[this.currentIndex()]);
    }
  }

  randomReview(){
    if (this.reviews.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.reviews.length);
      this.currentIndex.set(randomIndex);
      this.currentReview.set(this.reviews[randomIndex]);
    }
  }
}
