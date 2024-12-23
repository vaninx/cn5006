const dateofBirth = "12/10/1998"

const getStudentName = () => 
{
    return "Vanessa" 
}

 
const getCampusName = () => 
{
    return ("UEL Campus ") 
} 

exports.getName=getStudentName 
exports.Location=getCampusName 
exports.dob=dateofBirth 

exports.Studentgrade=(marks)=> 
{ 
if (marks>50 && marks <70) return ("B grade") 
else 
return ("A grade") 
}