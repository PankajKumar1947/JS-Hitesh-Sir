// Object de-structure and JSON API
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor
//course.price// bar bar dot lagakar object ko access karna sahi method but

// better than above
const {courseInstructor}=course;
console.log(courseInstructor);

const {courseInstructor:instructor}=course;
console.log(instructor);// same as above we can give any name.


// in react: something
const navbar=({company})=>{

}
navbar(company="hitesh");


//++++++++++++++++++++ API ++++++++++++++++++++++//

// Api is taken in Json format.
//Json format:
// {
//     //key:value
//     name:"hitesh",
//     coursename:"js in hindi",
//     courseIntruct:"hitesh"
// }

// api in array format
//--> Use JSON formatter for better understanding.
