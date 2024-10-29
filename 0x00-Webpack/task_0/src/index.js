import $ from "jquery";

$(document).ready(function () {
  const content = [
    "Holberton Dashboard",
    "Dashboard data for the students",
    "Copyright - Holberton School"
  ];

  content.forEach(text => {
    $("body").append(`<p>${text}</p>`);
  });
});
