import users from './users_with_rating.js'

(async function () {
    const studentNames = users.map(student => student.firstName + " " + student.lastName)
    const rating2022 = users.map(student => student.rating)
    const rating2023 = users.map(student => student.rating = Math.floor(Math.random() * 100 + 1))

    const ctx = document.getElementById('myChart');

    const myChart = new Chart(ctx,
        {
            type: 'bar',
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Students Rating'
                    }
                }
            },

            data: {
                labels: studentNames,
                datasets: [
                    {
                        label: 'Rating 2022',
                        data: rating2022,
                        borderColor: 'green',
                        backgroundColor: 'rgb(137, 250, 156)',
                        borderWidth: 1,
                        borderRadius: 5,
                        borderSkipped: false,
                    },
                    {
                        label: 'Rating 2023',
                        data: rating2023,
                        borderColor: 'blue',
                        backgroundColor: 'rgb(24, 245, 245)',
                        borderWidth: 1,
                        borderRadius: 5,
                        borderSkipped: false,
                    }
                ]
            }
        })
})()
