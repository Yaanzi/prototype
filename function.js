console.log('Before adding event listener');
document.getElementById('analyzeBtn').addEventListener('click', function() {
    var fileInput = document.getElementById('fileToUpload');
    var file = fileInput.files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            var img = new Image();
            img.src = reader.result;
            img.onload = function() {
                var result = OCRAD(img);
                var url = 'ocrtest.html?result=' + encodeURIComponent(result);
                window.location.href = url; // Redirect to ocrtest.html
            };
        };
    } else {
        alert('Please select a file.');
    }
});
