
function analyzeImage() {
    #call the API
    var uriBase = "https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze";
    var params = {
        "visualFeatures": "Categories,Description,Color",
        "details": "",
        "language": "en",
    };
    var sourceImageUrl = document.getElementById("inputImage").value;
    var sourceImageUrl = document.getElementById("inputImage").value;
    document.querySelector("#sourceImage").src = sourceImageUrl;

    $.ajax({
        url: uriBase + "?" + $.param(params),

        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","YOUR-KEY");
        },

        type: "POST",

        data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })

    .done(function(data) {
        $("#responseTextArea").val(JSON.stringify(data, null, 2));
        $("#description").text(data.description.captions[0].text);
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" : (jQuery.parseJSON(jqXHR.responseText).message) ? 
            jQuery.parseJSON(jqXHR.responseText).message : jQuery.parseJSON(jqXHR.responseText).error.message;
        alert(errorString);
    });

};


