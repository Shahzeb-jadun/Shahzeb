console.log("Hello")
function convertToFahrenheit() {
    // Get the Celsius value from the input field
    var celsius = document.getElementById('celsius').value;

    // Convert to Fahrenheit
    var fahrenheit = (9 * celsius / 5) + 32;

    document.getElementById('result').innerText = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
}



// question no 2

var classification = ["John Hill", "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];
document.getElementById("array").innerHTML = classification;
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    for (let i = classification.length - 1; i >= classification.length - 3; i--) {
        document.getElementById("topStudents").innerHTML += `${classification[i]}<br>`;

    }
})


// next question

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
};

document.getElementById('course-title').innerText = course.title;
document.getElementById('main-category').innerText = course.categories[0];

function calculate5StarsPercentage(course) {
    var totalReviews = course['5_stars_reviews'] + course['4_stars_reviews'] +
                       course['3_stars_reviews'] + course['2_stars_reviews'] + 
                       course['1_stars_reviews'];
    var percentage = (course['5_stars_reviews'] / totalReviews) * 100;
    return Math.round(percentage) + '%';
}

document.getElementById('percentage-5-stars').innerText = calculate5StarsPercentage(course);
