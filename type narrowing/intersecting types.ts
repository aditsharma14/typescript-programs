type Employee = {
    id: number;
    name: string;
  };
  
  type Manager = {
    department: string;
    role: string;
  };
type Managerwithemployeeinfo=Employee &Manager;
const manager:Managerwithemployeeinfo={
    id:123,
    name:"John Doe",
    department:"Engineering",
    role:"Team Lead",
};
console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);