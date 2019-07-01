<div>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="demo.js"></script>
</div>
  
# vaughnsoftworks.github.io

## LinkedIn Content
1. Initiate three-legged authentication [here](https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86pbx1idwptpn7&redirect_uri=https%3A%2F%2Fvaughnsoftworks.github.io%2Fauth%2Flinkedin%2Fcallback&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social).
2. Display content here.

<div id="text"></div>

<div id="profile"></div>

<script>
// This sample code will make a request to LinkedIn's API to retrieve and print out some
// basic profile information for the user whose access token you provide.

const https = require('https');

// Replace with access token for the r_liteprofile permission
const accessToken = '';
const options = {
  host: 'api.linkedin.com',
  path: '/v2/me',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
  }
};

const profileRequest = https.request(options, function(res) {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const profileData = JSON.parse(data);
    console.log(JSON.stringify(profileData, 0, 2));
  });
});
profileRequest.end();
</script>