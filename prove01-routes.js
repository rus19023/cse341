const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  // show welcome message on root page
  if (url === '/') {
    //res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Welcome to our server!</title><head>');
    res.write('<body> <h1>Thanks for visiting our Node.js server!</h1> </body>');
    res.write('<section><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create Username</button></form></section>');
    res.write('</body></html>');
    return res.end();
  }
  // show user list if in /users route
  if (url === '/users') {
    //res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>User List</title></head><body><section><ul><li>user1</li><li>user2</li></ul></section></body></html>');
  }
  // process form data collected in / page
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      //console.log(chunk);
      body.push(chunk);
      return res.end();
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split('=')[1];
      console.log(user);
      });
    };
    res.statusCode = 302;
    //res.setHeader('Location', '/');
    res.end();
  };

exports.handler = requestHandler;