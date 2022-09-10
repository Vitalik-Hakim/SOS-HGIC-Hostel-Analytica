const ctx = document.getElementById('myChart').getContext('2d');
        const earning = document.getElementById('earning').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['Vikings', 'Spartans', 'Trojans', 'Titans'],
                datasets: [{
                    label: 'Lateness',
                    data: [0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',

                    ],

                }]
            },
            options: {
                responsive: true,
            }
        });



        const miChart = new Chart(earning, {
            type: 'bar',
            data: {
                labels: ['Vikings', 'Spartans', 'Trojans', 'Titans'],
                datasets: [{
                    label: 'Total Streak',
                    data: [12, 19, 3, 5,],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive:true,

            }
        });