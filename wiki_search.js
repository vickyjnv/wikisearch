$(document).ready(function () {
    $("form").on("submit", function (someevent) {
        someevent.preventDefault();
        var properData = ($("form").serialize());
        var justWhatWeNeed = properData.replace("ourData=", "");
        $.ajax({
            //create the search url based on user input
            url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + justWhatWeNeed + "&limit=20&format=json",
            dataType: 'jsonp',
            type: 'POST',
            headers: {
                'Api-User-Agent': 'Example/1.0'
            },
            success: function (json) {
                var ourHTML = "";
                var lengthOfJSON = json[1].length;
                for (var x = 0; x < lengthOfJSON; x++) {
                    ourHTML += "<div class='well'>" + "<strong>" + json[1][x] + "</strong>" + "<br>" + json[2][x] + "<br>" + "<a href=" + "'" + json[3][x] + "'" + " target='_blank'>" + json[3][x] + "</a></div>";
                }
                document.getElementById("changeIt").innerHTML = ourHTML;
                $("#changeIt").css("text-align", "center");
                $("#ourLabel").text("Search Wikipedia again: ");
            } //end of success function
        }); //end of ajax
    }); //end of $("form").on("submit",function(someevent) {
}); //end of $(document).ready