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
