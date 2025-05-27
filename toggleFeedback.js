// toggleFeedback.js
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('openFeedbackBtn');
    const feedbackDiv = document.getElementById('feedbackSection');
  
    btn.addEventListener('click', function() {
      if (feedbackDiv.style.display === 'none' || feedbackDiv.style.display === '') {
        feedbackDiv.style.display = 'block';
      } else {
        feedbackDiv.style.display = 'none';
      }
    });
  });