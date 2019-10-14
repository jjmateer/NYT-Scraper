$("#submitForm").on("submit", () => {
    let pathname = window.location.pathname;
    $.post({
        method: "POST",
        url: pathname
    }).then(() => {
        console.log("hi")
    })
})