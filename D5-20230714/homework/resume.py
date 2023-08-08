#resume
my_resume={"Objective":"To be a good full stack developer and to gain more knowledge on other areas .",
           "Name":"Gnanlin Renisha G R",
           "E-mail":"gnaninrenisha@gmail.com",
           "Mobile-no":8300297958,
           "Soft_Skills":["Good communication","Listening skill","Leadership skill","Team work","Time management"],
           "Hard_Skills":["Writting Skill","Presentation Skill","Teaching Skill"],
           "Educational_Qualification":[{"Level":"Bsc Mathematics",
                                         "Board_or_University":"Manonmanian Sundaranar University",
                                         "School_or_College":"Annai Vellankanni College,Tholayavattam",
                                         "Year":2023,
                                         "Percentage_or_CGPA":8.7},
                                         {"Level":"HSC",
                                         "Board_or_University":"State Board",
                                         "School_or_College":"Christuraja Matriculation Higher School,Marthandam",
                                         "Year":2019,
                                         "Percentage_or_CGPA":"80.7%"},
                                         {"Level":"SSLC",
                                         "Board_or_University":"State Board",
                                         "School_or_College":"Christuraja Matriculation Higher School,Marthandam",
                                         "Year":2017,
                                         "Percentage_or_CGPA":"96.6%"}],
            "Projects":[{"Project_Title":"Value of pi",
                         "Project_Description":"Evaluating the value of pi and its origin",
                         "Project_Year":2020},
                         {"Project_Title":"Great Mathematiciens",
                         "Project_Description":"Studing about the mathematiciens of 18th,19th,20th century.",
                         "Project_Year":2021},
                         {"Project_Title":"Index of Economic Freedom",
                         "Project_Description":"An Analysis of Population Growth.",
                         "Project_Year":2023}],
            "Experience":[{"Company_name":"Flow",
                           "Experience":1.6,
                           "Job_role":"Project manager"},
                          {"Company_name":"TCS",
                           "Experience":2,
                           "Job_role":"Manager"},
                          {"Company_name":"Amazon",
                           "Experience":2.4,
                           "Job_role":"Manager"} ],
            "Hobbies":["Music","Drawing","Gardening"],
            "Personal_Details":{"Father_name":"S Gnanaseelan",
                               "Father_occupation":"Auto driver",
                               "Languages_Known":["Tamil","English","Malayalam"],
                               "DOB":"16-04-2002",
                               "Gender":"Female",
                               "Marital_Status":"Unmarried",
                               "Address":{"Door no":"25-7/A1",
                                          "Street_name":"Kuzhivilai",
                                          "Village_name":"kannacode",
                                          "Town_name":"Marthandam.",
                                          "Pincode":"629165"}},
            "Declaration":"I heareby declare that the above given information is true to my knowledge."}                                      
# print(my_resume)
print(my_resume["Soft_Skills"][0])
print(my_resume["Hard_Skills"][1])
print(my_resume["Educational_Qualification"][2]["Board_or_University"])
print(my_resume["Projects"][1]["Project_Description"])
print(my_resume["Experience"][2]["Job_role"])
print(my_resume["Hobbies"][2])
print(my_resume["Personal_Details"]["DOB"])
print(my_resume["Personal_Details"]["Languages_Known"][2])
print(my_resume["Personal_Details"]["Address"]["Town_name"])
