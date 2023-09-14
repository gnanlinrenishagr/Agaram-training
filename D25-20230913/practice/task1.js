var a = "Agaram";
var b = 4;
var c = true;
var e = 2.06;
var f = 2.00;
let g = ["sunday", "monday", "tuesday"];
var my_resume = {
    Objective: "To be a good full stack developer and to gain more knowledge on other areas .",
    Name: "Gnanlin Renisha G R",
    Email: "gnaninrenisha@gmail.com",
    Mobile_no: 8300297958,
    Soft_Skills: ["Good communication", "Listening skill", "Leadership skill", "Team work", "Time management"],
    Hard_Skills: ["Writting Skill", "Presentation Skill", "Teaching Skill"],
    Educational_Qualification: [{
        Level: "Bsc Mathematics",
        Board_or_University: "Manonmanian Sundaranar University",
        School_or_College: "Annai Vellankanni College,Tholayavattam",
        Year: 2023,
        Percentage_or_CGPA: 8.7
    },
    {
        Level: "HSC",
        Board_or_University: "State Board",
        School_or_College: "Christuraja Matriculation Higher School,Marthandam",
        Year: 2019,
        Percentage_or_CGPA: "80.7%"
    },
    {
        Level: "SSLC",
        Board_or_University: "State Board",
        School_or_College: "Christuraja Matriculation Higher School,Marthandam",
        Year: 2017,
        Percentage_or_CGPA: "96.6%"
    }],
    Projects: [{
        Project_Title: "Value of pi",
        Project_Description: "Evaluating the value of pi and its origin",
        Project_Year: 2020
    },
    {
        Project_Title: "Great Mathematiciens",
        Project_Description: "Studing about the mathematiciens of 18th,19th,20th century.",
        Project_Year: 2021
    },
    {
        Project_Title: "Index of Economic Freedom",
        Project_Description: "An Analysis of Population Growth.",
        Project_Year: 2023
    }],
    Experience: [{
        Company_name: "Flow",
        Experience: 1.6,
        Job_role: "Project manager"
    },
    {
        Company_name: "TCS",
        Experience: 2,
        Job_role: "Manager"
    },
    {
        Company_name: "Amazon",
        Experience: 2.4,
        Job_role: "Manager"
    }],
    Hobbies: ["Music", "Drawing", "Gardening"],
    Personal_Details: {
        Father_name: "S Gnanaseelan",
        Father_occupation: "Auto driver",
        Languages_Known: ["Tamil", "English", "Malayalam"],
        DOB: "16-04-2002",
        Gender: "Female",
        Marital_Status: "Unmarried",
        Address: {
            Door_no: "25-7/A1",
            Street_name: "Kuzhivilai",
            Village_name: "kannacode",
            Town_name: "Marthandam.",
            Pincode: "629165"
        }
    },
    "Declaration": "I heareby declare that the above given information is true to my knowledge."
}
console.log(typeof (a))
console.log(typeof (b))
console.log(typeof (c))
console.log(typeof (e))
console.log(typeof (f))

console.log(g.length)
console.log(g[g.length - 1])

console.log(g)
g[2] = "wednesday"
g[3] = "thursday"
g.push("friday")
console.log(g)
g.pop(0)
console.log(g)
let detalis = {
    Level: "HSC",
    Board_or_University: "State Board",
    School_or_College: "Christuraja Matriculation Higher School,Marthandam",
    Year: 2019,
    Percentage_or_CGPA: "80.7%"
}
detalis.Year = "2019"
detalis.DOB = "16-04-2002"
console.log(detalis)
my_resume.Educational_Qualification[0].citie = "marthandam"
console.log(my_resume)
function getname() {
    console.log("welcome")
}
getname()
function names(x) {
    console.log(x)
}
names("reni")
for (var i = 0; i < 5; i++) {
    console.log(i)
}
for (var i = 0; i > -10; i--) {
    console.log(i)
}

week = ["sunday", "monday", "tuesday", "wednesday"]
for (var i = 0; i < week.length; i++) {
    console.log(week[i])
}

for (var i = 0; i < 3; i++) {
    console.log(my_resume.Educational_Qualification[i].Level)
}
detail = [{
    Name: "Gnanlin Renisha G R",
    Email: "gnaninrenisha@gmail.com",
    Mobile_no: 8300297958
}, {
    Name: "Reni G R",
    Email: "renisha@gmail.com",
    Mobile_no: 8300297958
}, {
    Name: "Gnanli",
    Email: "gnanin@gmail.com",
    Mobile_no: 8300297958
}]
for (var i = 0; i < detail.length; i++) {
    console.log(detail[i].Name)
}