const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
      users = new Users();
      users.users = [{
        id: '1',
        name: 'Mike',
        room: 'Node Course'
      }, {
        id: '2',
        name: 'Jen',
        room: 'React Course'
      }, {
        id: '3',
        name: 'Bill',
        room: 'Node Course'
      }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: "234",
      name: "Jackson",
      room: "Lolipop"
    };
    var responseUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser("2");

    expect(user.id).toBe("2");
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', ()=> {
    var user = users.removeUser("99");

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser("2");
    expect(user.id).toBe("2");
    expect(user).toEqual({
      id: '2',
      name: 'Jen',
      room: 'React Course'
    });
  });

  it('should not find user', () => {
    var user = users.getUser("4");
    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList("Node Course");

    expect(userList).toEqual(['Mike','Bill']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList("React Course");

    expect(userList).toEqual(['Jen']);
  });
});
