const multiplyValue =  (value: number, multiplier?: number)=>{
    if(multiplier || multiplier ==0){
        return value * multiplier;
    }
    else
        return value * 2;
}



const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else{
        if (value === true) {
            return "Active";
    }   else {
            return "Inactive";
    }
  }
}



const formatCoordinate = 
    (value : readonly [latitude:number, longitude:number, locationName:string]) =>{
        return `Location: ${value[2]} (${value[0]}, ${value[1]})`
}


const concatenateArrays =<T>(...arrays:T[][]):T[]=>{
     let arr: T[] = []
     arr = arr.concat(...arrays);
     return arr;
}





interface Course{
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (course:Course[], minStudents: number):Course[]=>{
    let popularCourse : Course[] =[];
    for (let crs of course) {
        if(crs.isPublished === true && crs.students >= minStudents){
            popularCourse.push(crs)
        }
    }
    return popularCourse;
};




const pluckValues = function<T, K extends keyof T>(items: T[], key: K): T[K][] {
    const newArr :T[K][] = [];
    for(let arr of items){
        let extractValue = arr[key];
        newArr.push(extractValue);

    }
    return newArr;
};







class Employee{
        protected name : string;
        private baseSalary: number;
        
        constructor(name:string, baseSalary:number){
            this.name = name;
            this.baseSalary = baseSalary;
        }
        getDetails(){
            return `Employe: ${this.name}, Base Salary: ${this.baseSalary}`;
        }
}

class Manager extends Employee{
    private department :string;
    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary)
        this.department = department;
    }
    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`
    }
}

const employee = new Employee("Ahir",40000);
const manager = new Manager("Alice", 50000,"Engineering")





const validateAgeAsync =(age:number):Promise<string>=> {
    if(age >= 18){
         return new Promise<string>((resolve) =>{
            setTimeout(()=>{
                resolve("Access Granted");
            },1000)
         });
    }else{
        return Promise.reject(
            new Error("Access Denied: Must be 18 or older")
        );
    }
};
