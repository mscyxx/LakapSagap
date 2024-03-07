document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('openModal');
    const formModal = document.getElementById('formModal');
    
    openModalButton.addEventListener('click', function () {
        formModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    });

    closeModalButton.addEventListener('click', function () {
        formModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('openModal');
    const form_2Modal = document.getElementById('form_2Modal');
    
    openModalButton.addEventListener('click', function () {
        form_2Modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    });

 
});


// Function to generate a random number within a specified range
const random = (max = 100) => {
    return Math.round(Math.random() * max) + 20;
}

// Function to generate an array of random data
const randomData = () => {
    return [
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
    ];
}

// Array of months
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Create a new bar chart using Chart.js
const barChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
        labels: months,
        datasets: [
            {
                data: randomData(),
                backgroundColor: 'green',  // Initial background color
                hoverBackgroundColor: 'red',  // Background color on hover
            },
        ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    gridLines: false,
                    ticks: {
                        beginAtZero: true,
                        stepSize: 30,
                        fontSize: 12,
                        fontColor: '#97a4af',
                        fontFamily: 'Open Sans, sans-serif',
                        padding: 5,
                    },
                },
            ],
            xAxes: [
                {
                    gridLines: false,
                    ticks: {
                        fontSize: 12,
                        fontColor: '#97a4af',
                        fontFamily: 'Open Sans, sans-serif',
                        padding: 5,
                    },
                    categoryPercentage: 0.5,
                    maxBarThickness: 32,
                },
            ],
        },
        cornerRadius: 2,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
    },
});
