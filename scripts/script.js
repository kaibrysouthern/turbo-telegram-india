$(function () {
  console.log("ready!");

  let userJSON = {
    email: "email address",
    pwd: "password"
  };

  $("#formLoad").click(function () {
    console.log("button clicked: ");

    $.ajax({
      url: "../assets/data.json",
      dataType: "json",
      success: function (data) {
        console.log(data);
        $("#email").val(data.email);
        console.log(data.formcheck);

        $("#formcheck").prop("checked", data.formcheck);
      }
    });
  });

  $("#loadData").click(() => {
    console.log("in button click event");

    $("#email").val(userJSON.email);
  });

  $("input[type=radio]").on("change", function () {
    let radioChoice = $("input[type=radio]:checked").val();
    let newWordList = getWords(radioChoice);
    console.log(newWordList);

    let optionList = "";

    for (i = 0; i < newWordList.length; i++) {
      optionList += `<option value="${newWordList[i]}">${newWordList[i]}</option>`;
    }
    console.log(optionList);

    $("#letterWordsSelect").empty().append(optionList);
  });

//Submit
$("#formSubmit").on("click", (e) => {
  e.preventDefault();
  console.log("clicked the button");
  $("#result").html("<b>The button is pressed and form is submitted.</b>");
  
  // submit the form
  $("form").submit();
});


  let dataStuff = `{ "letterSelected": "${$(
    "input[type=radio]:checked"
  ).val()}" }`;

  console.log(dataStuff);
});

//Selection Responses
function getWords(letter) {
  console.log("in f/n getWords, here the paramter: ", letter);

  let aWordArray = [
    "Select a treat!",
    "Chocolate Chip Cookies",
    "Strawberry Cupcakes",
    "Double Chocolate Fudge Brownies",
  ];
  let bWordArray = [
    "Select a treat!",
    "Vanilla Ice Cream",
    "Cheesecake",
    "Peanut Butter Milkshake",
  ];
  let cWordArray = ["Select a treat!", "Fudge", "Candy Bars", "Lollipops"];

  if (letter === "A") {
    return aWordArray;
  } else if (letter === "B") {
    return bWordArray;
  } else if (letter === "C") {
    return cWordArray;
  } else {
    return ["Please select a letter!"];
  }
}

function refreshPage() {
  $("#row").html("");
  var getValue = document.getElementById("loadData");
  if (getValue.value != "") {
    getValue.value = "";
  }
}


