var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);




textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("viewer@internet.com:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "socials":
      loopLines(socials, "color2 margin", 80);
      break;
    case "msfconsole":
      addLine("<span class=\"inherit\">  reallydude?😂</span>", "error", 100);;
        break;
    case "ip a":
      addLine("<span class=\"inherit\">  You are genius yeah ?😂</span>", "error", 100);
      break;
    case "ifconfig":
      addLine("<span class=\"inherit\">  awe try a newer command!😂</span>", "error", 100);
      break;
    case "ip -a":
      addLine("<span class=\"inherit\">  This what you only know ?😂</span>", "error", 100);
      break;
      case "ifconfig ":
        addLine("<span class=\"inherit\">  awe try a newer command!😂</span>", "error", 100);
      break;

    case "video":
        addLine("Opening YouTube...", "color2", 80);
        newTab(youtube);
      break;

   case "sudo":
       addLine("Oh no, you're not admin...", "color2", 80);
       setTimeout(function() {
          window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
          }, 1000); 
        break;
   case "su -":
       addLine("Oh no, you're not admin...", "color2", 80);
       setTimeout(function() {
          window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
          }, 1000); 
        break;
   case "su - root":
       addLine("Oh no, you're not admin...", "color2", 80);
       setTimeout(function() {
          window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
          }, 1000); 
        break;
   case "su":
       addLine("Oh no, you're not admin...", "color2", 80);
       setTimeout(function() {
          window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
          }, 1000); 
        break;

  case "socials":
      loopLines(social, "color2 margin", 80);
      break;
  
  case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
  case "password":
      addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂</span>", "error", 100);
      break;
  case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
  case "email":
      addLine('Opening mailto:<a href="mailto:sananshahverdiyev.work@gmail.com">sananshahverdiyev.work@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
  case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
  case "banner":
      loopLines(banner, "", 80);
      break;
  case "contact":
      loopLines(contact, "color2 margin", 80);
      break;
    //

  case "medium":
      addLine("Opening Medium...", "color2", 0);
      newTab(medium);
      break;
  case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;

  case "instagram":
     addLine("Opening Instagram...", "color2", 0);
     newTab(instagram);
      break;
  case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
  case "resume":
        addLine("Opening resume...", "color2", 0);
        newTab(resume);
        break;
  case "resume":
      addLine("Opening resume...", "color2", 0);
      newTab(resume);
      break;

    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  case "resume":
      addLine("Opening resume...", "color2", 0);
      newTab(resume);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
