// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Login modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.getElementById('closeLoginModal');

if (loginBtn && loginModal) {
    loginBtn.addEventListener('click', () => {
        loginModal.classList.remove('hidden');
    });
}

if (closeLoginModal && loginModal) {
    closeLoginModal.addEventListener('click', () => {
        loginModal.classList.add('hidden');
    });
}

// Close modal when clicking outside
if (loginModal) {
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.add('hidden');
        }
    });
}

// BMI Calculator
const bmiForm = document.getElementById('bmiForm');
const bmiResult = document.getElementById('bmiResult');
const bmiValue = document.getElementById('bmiValue');
const bmiStatus = document.getElementById('bmiStatus');

if (bmiForm) {
    bmiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
        const weight = parseFloat(document.getElementById('weight').value);
        
        if (height && weight) {
            const bmi = (weight / (height * height)).toFixed(1);
            bmiValue.textContent = bmi;
            
            let status = '';
            let statusColor = '';
            
            if (bmi < 18.5) {
                status = 'Underweight';
                statusColor = 'text-blue-500';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                status = 'Normal weight';
                statusColor = 'text-green-500';
            } else if (bmi >= 25 && bmi <= 29.9) {
                status = 'Overweight';
                statusColor = 'text-yellow-500';
            } else {
                status = 'Obesity';
                statusColor = 'text-red-500';
            }
            
            bmiStatus.textContent = status;
            bmiStatus.className = `font-bold ${statusColor}`;
            bmiResult.classList.remove('hidden');
        }
    });
}

// Add any additional JavaScript functionality here
