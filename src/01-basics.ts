import {Friend, Colleague, ColleagueHistory } from './myTypes'


  // 使用 Friend 类型
  const friend1: Friend = {
    name: "Paul Fleming",
    phone: "087-12345",
    age: 25,
  };
  
  const friend2: Friend = {
    name: "Jane Costello",
    phone: "086--12345",
    age: 31,
  };
  
  // 明确 friends 数组的类型
  const friends: Friend[] = [friend1, friend2];
  
  console.log(friends[1]);
  
  // ------------- 定义同事数据结构 -------------------
  
  // 定义 Contact 接口
  interface Contact {
    email: string;
    extension: number;
  }
  

  // 使用 Colleague 类型
  const colleague1: Colleague = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };
  

  // 使用 ColleagueHistory 类型
  export const colleagues: ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
//   console.log(colleagues.current[0]);
  