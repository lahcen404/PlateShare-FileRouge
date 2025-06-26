/* Register Donor */

function toggleDonorFields() {
  const role = document.querySelector('input[name="role"]:checked').value;
  const restaurantNameDiv = document.getElementById('restaurantNameDiv');
  const restaurantAddressDiv = document.getElementById('restaurantAddressDiv');

  if (role === 'donor') {
    restaurantNameDiv.classList.add('visible');
    restaurantAddressDiv.classList.add('visible');
  } else {
    restaurantNameDiv.classList.remove('visible');
    restaurantAddressDiv.classList.remove('visible');
  }
}
document.addEventListener('DOMContentLoaded', toggleDonorFields);
/*-------------------*/
/*------add surplus------*/

document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const closeMobileMenuButton = document.getElementById('closeMobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

if (mobileMenuButton && mobileMenu && closeMobileMenuButton && mobileMenuBackdrop) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
  });
  closeMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
  mobileMenuBackdrop.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
}
/*-------------------*/
