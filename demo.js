$().ready(function () {
    $.getJSON("data.json", function (data) {
        console.log(data);
        $("#text").html(data["text"]);
    });
});
$.ajax({
    url: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86pbx1idwptpn7&redirect_uri=https%3A%2F%2Fvaughnsoftworks.github.io%2Fauth%2Flinkedin%2Fcallback&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social',
    type: "GET",
    datatype: "json",
    username: 'alecj.vaughn@gmail.com',
    password: 'V@ughn2018',
    xhrFields: {
        withCredentials: true
    },
    success: function(result) {
        $("#profile").append(result);
    },
    error: function(xhr, status, strErr) {
        console.log("There was an error!");
    }
});