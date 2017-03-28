class Adapter {
  constructor() {
    this.chatSubscribers = [];

    // Generate dummy updates
    //setInterval(() => {
    //  this.chatSubscribers.forEach((callback) => {
    //    const chatId = getRandom(chats.chats.map((chat) => chat.id));
    //    const chat = getById(chats.chats, chatId);
    //    chat.unreadMessagesCount++;
    //    callback(chatId, {
    //      lastMessageAt: new Date().toISOString(),
    //      unreadMessagesCount: chat.unreadMessagesCount,
    //      lastMessage: `${chat.unreadMessagesCount}: ${chat.lastMessage}`,
    //    });
    //  })
    //}, 5000)
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
  subscribeToChats(callback) {
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
  chats: []
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
