$("[name='modalBtn']").on("click", () => {
    $('#noteModal').modal("show")
})

// $("#noteForm").on("submit", function (req ,res) {
//     // console.log(req.body)
//     event.preventDefault();
//     $.post("/postnote", {
//         type: "POST",
//         data: $("#message-text").val().trim()
//     }).then(function () {
//         window.location.href = "/postnote";
//       });
// })