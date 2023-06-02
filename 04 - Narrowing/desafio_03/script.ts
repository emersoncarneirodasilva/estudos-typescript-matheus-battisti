type Review = number | boolean;

function showReview(review: Review): string {
  if (review) {
    return `A nota que você enviou foi: ${review}`;
  }
  return `Você não fez a avaliação, por favor nos envie uma!`;
}

console.log(showReview(4.7));
console.log(showReview(3.8));
console.log(showReview(1.9));
console.log(showReview(2.5));
console.log(showReview(false));
