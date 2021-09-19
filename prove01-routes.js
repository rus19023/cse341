const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  // create array of users
  const users = ['user1', 'user2'];

  // show welcome message on root page
  if (url === '/') {
    //res.setHeader('Content-Type','text/html');
    // Show greeting and form to enter new user
    res.write('<html>');
    res.write('<head><title>Welcome to our server!</title><head>');
    res.write('<body> <h1>Thanks for visiting our Node.js server!</h1> </body>');
    res.write('<section><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create Username</button></form></section>');
    res.write('</body></html>');
    return res.end();
  }
  // show user list when on /users page
  if (url === '/users') {
    // get input from form
    const newName = req.body.username;
    console.log('newName: '+newName);
    users.push(newName);
    console.log(users);

    // Show users list on page with heading
    res.write('<html><head><title>User List</title></head><body><section><h1>User List</h1>');
    res.write('<ul>');
    // Loop through users using for...of loop to display the list
    for (let user of users) {
      res.write(`<li>${user}</li>`);
    }
    res.write('</ul>');
    res.write('</section></body></html>');
    return res.end();
  }
  // process form data collected in / page
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      //console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      // pull new user from data collected by converting to string and pulling out value(s)
      const parsedBody = Buffer.concat(body).toString();
      const newUser = parsedBody.split('=')[1];

      // console.log('newUser: ' + newUser);
      // Add new user to users array
      // users.push(newUser);
      // console.log(users);
      // redirect to /users page
      res.statusCode = 302;
      res.setHeader('Location', '/users');
      res.end();
      });
    };
    res.end();
  };

exports.handler = requestHandler;
