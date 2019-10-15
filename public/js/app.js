$("[name='modalBtn']").on("click", () => {
    $('#noteModal').modal("show")
})

$("#noteArchiveForm").on("submit", function() {
    event.preventDefault()  
    window.location.href += `/${$("#archiveID").val().trim()}`;
})
