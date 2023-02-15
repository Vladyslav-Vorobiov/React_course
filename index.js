import users from './users_with_rating.js'

(async function () {
    const studentNames = users.map(student => student.firstName + " " + student.lastName)
    const rating2022 = users.map(student => student.rating)
    const rating2023 = users.map(student => student.rating = Math.floor(Math.random() * 100 + 1))

    
})()
