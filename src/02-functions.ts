import { Friend, Colleague, ColleagueHistory, EmailContact } from './myTypes';  // 导入Friend和Colleague接口

// 定义 Friend 数组
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

// friends 数组
const friends: Friend[] = [friend1, friend2];

// older 函数：增加一个朋友的年龄并返回字符串
function older(f: Friend): string {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

// allOlder 函数：增加每个朋友的年龄并返回所有新年龄的字符串数组
function allOlder(friends: Friend[]): string[] {
  return friends.map(friend => {
    friend.age += 1;
    return `${friend.name} is now ${friend.age}`;
  });
}

// ------------- 同事数据结构 -------------------

// 同事数据（模拟）
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

const colleagues: ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

// ------------- 新函数：highestExtension 和 addColleague -------------------

// highestExtension 函数：返回拥有最大 extension 的同事
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort((c1, c2) => c1.contact.extension - c2.contact.extension);
  return result[cs.length - 1];
}

// addColleague 函数：向 current 数组添加新同事
function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
  const newColleague: Colleague = {
    name: name,
    department: department,
    contact: {
      email: email,
      extension: Math.floor(Math.random() * 1000), // 随机生成扩展号
    },
  };
  cs.push(newColleague); // 添加新同事到 current 数组
}

// 使用 highestExtension 函数
console.log(highestExtension(colleagues.current));

// 使用 addColleague 函数
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");

// 输出添加的同事
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

// ------------- 新函数：findFriends -------------------

// findFriends 函数：接受一个朋友数组和回调函数，返回符合条件的朋友名字
function findFriends(friends: Friend[], callback: (friend: Friend) => boolean): string[] {
  return friends.filter(callback).map(friend => friend.name);  // 过滤出符合条件的朋友并返回名字数组
}

// 测试 findFriends 函数
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));  // [ 'Paul Fleming' ]
console.log(findFriends(friends, (friend) => friend.age < 35));  // [ 'Paul Fleming', 'Jane Costello' ]
