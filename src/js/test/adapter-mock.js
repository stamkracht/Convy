let authenticated = true;

class Adapter {
  constructor() {
    this.chatSubscribers = [];
    this.contactSubscribers = [];
  }

  getMe() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(me);
      }, 1000)
    });
  }

  getChats() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(chats);
      }, 1000)
    });
  }

  getChat(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          status: 'success',
          chat: chats.chats.filter((chat) => chat.id == id)[0]
        })
      }, 1000);
    })

  }

  getContacts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(contacts);
      }, 1000);
    })

  }
  login(email, password) {
    if (password == 'jordy') {
      authenticated = true
    }
  }

  isAuthenticated() {
    return authenticated
  }

  updateLastSeen(chatId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000);
    });
  }


  getContact(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          status: 'success',
          contact: contacts.contacts.filter((contact) => contact.id == id)[0]
        })
      }, 1000);
    })

  }
  createChat() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          status: 'success',
          chat: {
            id: 1
          }
        })
      }, 1000);
    })

  }
  subscribeToChatEvents(callback) {
    this.chatSubscribers.push(callback);
    return {
      cancel: () => {
        const index = this.chatSubscribers.indexOf(callback)
        if(index != -1) {
          this.chatSubscribers.splice(index, 1)
        }
      }
    }
  }

  subscribeToContactEvents(callback) {
    this.contactSubscribers.push(callback);
    return {
      cancel: () => {
        const index = this.contactSubscribers.indexOf(callback)
        if(index != -1) {
          this.contactSubscribers.splice(index, 1)
        }
      }
    }
  }
}

export default Adapter;


function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getById(list, id) {
  return list.filter((item) => item.id == id)[0]
}


const me = {
  status: 'success',
  user: {
    id: 3,
    firstname: 'Peter II',
    lastname: 'Fox',
    headline: 'Lead Developer @ Stamkracht',
    image: 'http://lorempixel.com/500/500/business/',
    email: 'example@example.org',
    phone: '0987654321',
    twitter: 'everybodylovesmartha',
    location: {
      address: 'Oostenburgervoorstraat 72',
      zipcode: '1018 MR',
      city: 'Amsterdam',
      country: 'Nederland',
    },
    lastSeenAt: '2017-02-25T17:37:53.227Z',
  }
};

const chats = {
  status: 'success',
  chats: [
    {
      id: 1,
      title: 'A love story',
      image: null,
      members: [
        {
          id: 2,
          name: 'John Graham',
          image: 'http://lorempixel.com/300/300/business/',
        },
        {
          id: 3,
          name: 'Peter Fox',
          image: 'http://lorempixel.com/300/300/business/',
        }
      ],
      lastMessage: 'Ik kan er maar niet aan wennen',
      lastMessageAt: '2017-02-28T17:37:53.227Z',
      unreadMessagesCount: 7,
    },
    {
      id: 2,
      title: 'A horror story',
      image: 'http://lorempixel.com/300/300/business/',
      members: [
        {
          id: 1,
          name: 'George Best',
          image: 'http://lorempixel.com/300/300/business/',
        },
        {
          id: 3,
          name: 'Peter Fox',
          image: 'http://lorempixel.com/300/300/business/',
        }
      ],
      lastMessage: 'Ik kan er maar niet aan vastzitten',
      lastMessageAt: '2017-02-27T17:37:53.227Z',
      unreadMessagesCount: 7,
    },
    {
      id: 3,
      title: 'A triangular story',
      image: 'http://lorempixel.com/300/300/business/',
      members: [
        {
          id: 1,
          name: 'George Best',
          image: 'http://lorempixel.com/300/300/business/',
        },
        {
          id: 2,
          name: 'John Graham',
          image: 'http://lorempixel.com/300/300/business/',
        },
        {
          id: 3,
          name: 'Peter Fox',
          image: 'http://lorempixel.com/300/300/business/',
        }
      ],
      lastMessage: 'Samen',
      lastMessageAt: '2017-02-27T17:37:53.227Z',
      unreadMessagesCount: 7,
    },
  ]
};

const contacts = {
  status: 'success',
  contacts: [
    {
      id: 2,
      firstname: 'John',
      lastname: 'Graham',
      headline: 'Lead Developer @ Stamkracht',
      image: 'http://lorempixel.com/300/300/business/',
      email: 'example@example.org',
      phone: '0987654321',
      twitter: 'everybodylovesmartha',
      location: {
        address: 'Oostenburgervoorstraat 72',
        zipcode: '1018 MR',
        city: 'Amsterdam',
        country: 'Nederland',
      },
      lastSeenAt: '2017-02-25T17:37:53.227Z',
    },
    {
      id: 1,
      firstname: 'George',
      lastname: 'Best',
      headline: 'Lead Developer @ Stamkracht',
      image: 'http://lorempixel.com/300/300/business/',
      email: 'example@example.org',
      phone: '0987654321',
      twitter: 'everybodylovesmartha',
      location: {
        address: 'Oostenburgervoorstraat 72',
        zipcode: '1018 MR',
        city: 'Amsterdam',
        country: 'Nederland',
      },
      lastSeenAt: '2017-02-22T17:37:53.227Z',
    },
  ]
};
