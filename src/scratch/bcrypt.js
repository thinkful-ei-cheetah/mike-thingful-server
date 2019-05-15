const bcrypt = require('bcryptjs');

bcrypt.hash('password', 10).then(hash => console.log({ hash }))
bcrypt.hash('bo-password', 10).then(hash => console.log({ hash }))
bcrypt.hash('charlie-password', 10).then(hash => console.log({ hash }))
bcrypt.hash('sam-password', 10).then(hash => console.log({ hash }))
bcrypt.hash('lex-password', 10).then(hash => console.log({ hash }))
bcrypt.hash('ping-password', 10).then(hash => console.log({ hash }))

//const pwd = 'baseball';

// bcrypt.genSalt(10, function (err, salt) {
//   console.log(salt)
//   bcrypt.hash(pwd, salt, function(err, hash) {
//     console.log(hash)
//   });
// })

// bcrypt.hash(pwd, 10)
//   .then(hash => {
//     console.log('Hashed Password:', pwd, hash);
//     return hash;
//   });

// bcrypt.compare('baseball', '', function(err, res) {
//   .then(valid => {
//     console.log(valid);
//   })
// })
  

