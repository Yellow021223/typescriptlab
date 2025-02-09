import { Friend, Colleague, ColleagueHistory, EmailContact } from './myTypes';  // 导入 Friend 和 Colleague 接口

// 定义 Friend 数组
const friend1: Friend = {
  name: "Paul Fleming",
  phone: "087-12345",
  age: 25,
  interests: ["Music", "Sport"], // 初始兴趣
};

const friend2: Friend = {
  name: "Jane Costello",
  phone: "086--12345",
  age: 31,
  interests: [], // 初始兴趣为空
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

// addInterest 函数：将兴趣添加到朋友的兴趣数组中
function addInterest(f: Friend, interest: string): string[] {
  if (!f.interests) {
    f.interests = [];
  }
  f.interests.push(interest);
  return f.interests;
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

// ------------- 新函数：sortColleagues -------------------

// sortColleagues 函数：根据提供的排序器对同事进行排序，并返回 EmailContact 数组
function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max: number
): EmailContact[] {
  const end = max < 2 ? 1 : max;
  const sorted = colleagues.sort(sorter);
  const fullResult = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0, end);
}

// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension, 3));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length, 1));

// ------------- 新函数：findFriends -------------------

// findFriends 函数：根据回调函数条件筛选朋友
function findFriends(friends: Friend[], condition: (friend: Friend) => boolean): string[] {
  return friends.filter(condition).map((friend) => friend.name);
}

// 测试调用 findFriends
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));  // 输出: [ 'Paul Fleming' ]
console.log(findFriends(friends, (friend) => friend.age < 35));  // 输出: [ 'Paul Fleming', 'Jane Costello' ]
