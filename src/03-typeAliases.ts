import { ColleagueV2, Friend, Buddy, BuddyList } from "./myTypes"; 
import { friends } from "./01-basics"; // 导入 friends 数组

// 创建同事数据
const colleague1: ColleagueV2 = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
    slack: "ralph_graham",
  },
};

const colleague2: ColleagueV2 = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3: ColleagueV2 = {
  name: "Dean Sullivan",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

// 使用 Buddy 类型，可以包含 Friend 或 ColleagueV2
const buddyList: BuddyList = {
  name: "Team A",
  administrator: "John Doe",
  members: [friend1, colleague1],
};

// 打印输出 BuddyList
console.log(buddyList);

// 创建 BuddyList 的函数
function makeBuddyList(
  name: string,
  buddies: Buddy[],
  admin?: Administrator
): BuddyList {
  return {
    name,
    members: buddies,
    administrator: admin,
  } as BuddyList;
}

// Tests for makeBuddyList
const myFootballBuddies = makeBuddyList(
  "Football team",
  [colleague1, friends[0], colleague2],
  colleague1
);

const myBandBuddies = makeBuddyList(
  "Band name",
  [colleague1, friends[1]]
  // No administrator
);

console.log(myFootballBuddies);
console.log(myBandBuddies);

// 获取 BuddyList 中的所有好友（Friend 类型的对象）
function getBuddyListFriends(list: BuddyList): Friend[] {
  return list.members.reduce((friendsList: Friend[], buddy) => {
    if ("phone" in buddy) { // 判断是否为 Friend 类型，因为 Friend 有 phone 属性
      friendsList.push(buddy); // 将 Friend 类型对象添加到列表中
    }
    return friendsList;
  }, []); // 初始化一个空数组来保存好友
}

// Test for getBuddyListFriends.
console.log(getBuddyListFriends(myFootballBuddies));  // 输出包含朋友的数组

// 查找 Buddy 的联系方式
function findBuddyContact(list: BuddyList, name: string): string | undefined {
  for (const buddy of list.members) {
    if (buddy.name === name) {
      if ("phone" in buddy) {
        return buddy.phone;
      } else {
        return buddy.contact.email;
      }
    }
  }
  return undefined;
}

// Test for findBuddyContact.
console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));
