let emailClient = {
  user: {
    email: 'emailQueen@AwesomeCompany.com',
    name: 'Email Queen'
  },
  emails: [],
  tags: [
    'inbox',
    'sent',
    'draft',
    'starred',
    'snoozed',
  ],
    contacts: []
}

for (let x = 1; x <= 2; x++) {
  emailClient.tags.push[`${x}company`];
}

for (let x = 0; x <= 29; x++) {

  emailClient.emails.push(
    {
      sender: `someEmail${x}@${x}company.com`,
      date: Date.now(),
      recipients: [`someOtherEmail${x}@${x}company.com`],
      subject: `Something awesome for ${x}company`,
      content: `A bunch of amazing ideas for ${x}company`,
      attachments: [
        'idea1',
        'idea2'
      ]
    }
  );
  if (x < 5) {
    emailClient.emails[x].tag = 'inbox';
  } else if (x < 10) {
      emailClient.emails[x].tag = 'starred';
  } else if (x < 15) {
      emailClient.emails[x].tag = 'snoozed';
  } else if (x < 20) {
      emailClient.emails[x].sender = emailClient.user.email;
      emailClient.emails[x].subject = `Reasons why we can't do something awesome for ${x}company`;
      emailClient.emails[x].tag = 'sent';
  } else if (x < 25) {
      emailClient.emails[x].sender = emailClient.user.email;
      emailClient.emails[x].subject = `Things to consider before doing something awesome for ${x}company`;
      emailClient.emails[x].tag = 'draft';
  } else if (x < 30) {
      emailClient.emails[x].tag = '1company';
  } else {
      emailClient.emails[x].tag = '2company';
  }

  emailClient.contacts.push(
    {
      name: 'Some Interesting Name',
      email: `someEmail${x}@${x}company.com`,
      favorite: false
    }
  )
}

//Get list of tags:
console.log(emailClient.tags.join(', '));

//Get a list of emails by subject
let emailsBySubject = emailClient.emails.map(email => email.subject);
console.log(emailsBySubject);

//Find an email that has a draft tag and mark as sent
for (let x = 0; x < emailClient.emails.length; x++) {
  console.log('Why isn\'t tag showing? ', emailClient.emails[x]);
  if (emailClient.emails[x].tag === 'draft') {
    emailClient.emails[x].tag = 'sent';
    console.log(emailClient.emails[x])
    break;
  }
};

//Check to make sure that there are 6 sent and 4 draft emails.
let emailsByTag = emailClient.emails.map(email => email.tag);
console.log(emailsByTag);
