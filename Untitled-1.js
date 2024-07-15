// Ask the user to confirm before proceeding
let confirmed = confirm("Are you sure you want to delete this item?");
if (confirmed) {
    // Proceed with deletion logic
    console.log("Item deleted successfully.");
} else {
    // Cancelled deletion
    console.log("Deletion cancelled.");
}