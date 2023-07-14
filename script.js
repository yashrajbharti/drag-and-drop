function readURL(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      let listIcon = e.target.result;
      document.getElementById("list-image").src = listIcon;
      document
        .querySelector(".image-upload-wrap")
        .classList.remove("image-dropping");
    };
    reader.readAsDataURL(input.files[0]);
  }
}

let dragTimer;
$(document).on("dragover", function (e) {
  let dt = e.originalEvent.dataTransfer;
  if (
    dt.types &&
    (dt.types.indexOf
      ? dt.types.indexOf("Files") != -1
      : dt.types.contains("Files"))
  ) {
    document
      .querySelector(".image-upload-wrap")
      .classList.add("image-dropping");
    window.clearTimeout(dragTimer);
  }
});
$(document).on("dragleave", function (e) {
  dragTimer = window.setTimeout(function () {
    document
      .querySelector(".image-upload-wrap")
      .classList.remove("image-dropping");
  }, 25);
});
